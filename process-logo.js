import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processLogo() {
  const inputPath = path.resolve('src/assets/logo.jpg');
  console.log('Processing logo from:', inputPath);

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Original image size: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

  // Get raw RGBA buffer
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Measure background color at top-left corner
  let bgR = 0, bgG = 0, bgB = 0, bgSamples = 0;
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 20; x++) {
      const idx = (y * width + x) * channels;
      bgR += data[idx];
      bgG += data[idx + 1];
      bgB += data[idx + 2];
      bgSamples++;
    }
  }
  bgR = Math.round(bgR / bgSamples);
  bgG = Math.round(bgG / bgSamples);
  bgB = Math.round(bgB / bgSamples);
  console.log(`Measured background color: rgb(${bgR}, ${bgG}, ${bgB})`);

  // Target Blue Color from logo
  // Let's sample a blue pixel in the heart area (around x = 600, y = 350)
  let logoR = 0, logoG = 0, logoB = 0, logoSamples = 0;
  for (let y = 330; y < 370; y++) {
    for (let x = 580; x < 620; x++) {
      const idx = (y * width + x) * channels;
      if (data[idx] < 80 && data[idx + 2] > 120) {
        logoR += data[idx];
        logoG += data[idx + 1];
        logoB += data[idx + 2];
        logoSamples++;
      }
    }
  }
  if (logoSamples > 0) {
    logoR = Math.round(logoR / logoSamples);
    logoG = Math.round(logoG / logoSamples);
    logoB = Math.round(logoB / logoSamples);
    console.log(`Measured logo blue color: rgb(${logoR}, ${logoG}, ${logoB}) -> #${logoR.toString(16).padStart(2,'0')}${logoG.toString(16).padStart(2,'0')}${logoB.toString(16).padStart(2,'0')}`);
  }

  // 1. Create Transparent Blue Logo (Public & Assets)
  // For each pixel, background is near-white (luminance > 220, or (R+G+B)/3 > 220)
  // The blue pixels have high B relative to R & G.
  const transparentBuffer = Buffer.alloc(width * height * 4);
  const whiteBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // Compute distance from background color
    const distToBg = Math.sqrt(
      Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
    );

    // If pixel is close to background, it should be transparent
    // Smooth transition between thresholdMin and thresholdMax
    const thresholdMin = 18;
    const thresholdMax = 65;

    let alpha = 0;
    if (distToBg < thresholdMin) {
      alpha = 0;
    } else if (distToBg > thresholdMax) {
      alpha = 255;
    } else {
      alpha = Math.round(((distToBg - thresholdMin) / (thresholdMax - thresholdMin)) * 255);
    }

    // Set transparent buffer (preserve authentic blue or use sampled logo blue for anti-aliasing edges)
    transparentBuffer[i * 4] = r;
    transparentBuffer[i * 4 + 1] = g;
    transparentBuffer[i * 4 + 2] = b;
    transparentBuffer[i * 4 + 3] = alpha;

    // Set white buffer (pure white for dark backgrounds, retaining alpha)
    whiteBuffer[i * 4] = 255;
    whiteBuffer[i * 4 + 1] = 255;
    whiteBuffer[i * 4 + 2] = 255;
    whiteBuffer[i * 4 + 3] = alpha;
  }

  // Save full transparent logo
  await sharp(transparentBuffer, { raw: { width, height, channels: 4 } })
    .png({ quality: 100 })
    .toFile('public/logo-transparent.png');

  // Save white transparent logo (for dark footer)
  await sharp(whiteBuffer, { raw: { width, height, channels: 4 } })
    .png({ quality: 100 })
    .toFile('public/logo-white.png');

  // Also copy original jpg to public
  await sharp(inputPath).jpeg({ quality: 95 }).toFile('public/logo-original.jpg');

  // 2. Crop Icon Only (Bee + Heart without text "BEE CARE")
  // The icon occupies top area roughly y from 100 to 700, x from 120 to 900
  // Let's find bounding box of top icon
  const iconCrop = {
    left: Math.round(width * 0.12),
    top: Math.round(height * 0.12),
    width: Math.round(width * 0.76),
    height: Math.round(height * 0.58),
  };

  await sharp(transparentBuffer, { raw: { width, height, channels: 4 } })
    .extract(iconCrop)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/logo-icon-transparent.png');

  await sharp(whiteBuffer, { raw: { width, height, channels: 4 } })
    .extract(iconCrop)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/logo-icon-white.png');

  // Favicon 192 and 512
  await sharp('public/logo-icon-transparent.png')
    .resize(192, 192)
    .png()
    .toFile('public/favicon.png');

  console.log('Successfully generated all logo assets:');
  console.log('- public/logo-transparent.png');
  console.log('- public/logo-white.png');
  console.log('- public/logo-original.jpg');
  console.log('- public/logo-icon-transparent.png');
  console.log('- public/logo-icon-white.png');
  console.log('- public/favicon.png');
}

processLogo().catch(console.error);
