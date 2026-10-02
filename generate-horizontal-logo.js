import sharp from 'sharp';
import path from 'path';

async function generateHorizontalLogo() {
  const inputJpg = path.resolve('src/assets/logo.jpg');

  // Let's create an RGBA buffer with transparent background from logo.jpg directly
  const { data, info } = await sharp(inputJpg)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Background sample at (10, 10)
  const bgR = data[0], bgG = data[1], bgB = data[2];

  const transparentBuffer = Buffer.alloc(width * height * 4);
  const whiteBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const distToBg = Math.sqrt(
      Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
    );

    let alpha = 0;
    if (distToBg < 20) {
      alpha = 0;
    } else if (distToBg > 65) {
      alpha = 255;
    } else {
      alpha = Math.round(((distToBg - 20) / 45) * 255);
    }

    transparentBuffer[i * 4] = r;
    transparentBuffer[i * 4 + 1] = g;
    transparentBuffer[i * 4 + 2] = b;
    transparentBuffer[i * 4 + 3] = alpha;

    whiteBuffer[i * 4] = 255;
    whiteBuffer[i * 4 + 1] = 255;
    whiteBuffer[i * 4 + 2] = 255;
    whiteBuffer[i * 4 + 3] = alpha;
  }

  // 1. Crop Icon: top: 150..690, left: 160..860
  const iconRaw = await sharp(transparentBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: 160, top: 150, width: 700, height: 530 })
    .png()
    .toBuffer();

  const iconTrimmed = await sharp(iconRaw).trim().toBuffer();
  const iconMeta = await sharp(iconTrimmed).metadata();

  // 2. Crop Text: top: 710..850, left: 160..860
  const textRaw = await sharp(transparentBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: 160, top: 710, width: 700, height: 140 })
    .png()
    .toBuffer();

  const textTrimmed = await sharp(textRaw).trim().toBuffer();
  const textMeta = await sharp(textTrimmed).metadata();

  console.log(`Trimmed Icon: ${iconMeta.width}x${iconMeta.height}, Text: ${textMeta.width}x${textMeta.height}`);

  // Scale icon to height 160px
  const targetIconH = 160;
  const scaledIcon = await sharp(iconTrimmed)
    .resize({ height: targetIconH })
    .toBuffer();
  const scaledIconMeta = await sharp(scaledIcon).metadata();

  // Scale text to height 70px
  const targetTextH = 70;
  const scaledText = await sharp(textTrimmed)
    .resize({ height: targetTextH })
    .toBuffer();
  const scaledTextMeta = await sharp(scaledText).metadata();

  const spacing = 30;
  const canvasW = scaledIconMeta.width + spacing + scaledTextMeta.width + 30;
  const canvasH = 180;

  const iconLeft = 10;
  const iconTop = Math.round((canvasH - scaledIconMeta.height) / 2);

  const textLeft = iconLeft + scaledIconMeta.width + spacing;
  const textTop = Math.round((canvasH - scaledTextMeta.height) / 2);

  // Blue horizontal
  await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: scaledIcon, left: iconLeft, top: iconTop },
      { input: scaledText, left: textLeft, top: textTop },
    ])
    .png()
    .toFile('public/logo-horizontal.png');

  // White horizontal
  const whiteIconRaw = await sharp(whiteBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: 160, top: 150, width: 700, height: 530 })
    .png()
    .toBuffer();
  const scaledWhiteIcon = await sharp(whiteIconRaw)
    .trim()
    .resize({ height: targetIconH })
    .toBuffer();

  const whiteTextRaw = await sharp(whiteBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: 160, top: 710, width: 700, height: 140 })
    .png()
    .toBuffer();
  const scaledWhiteText = await sharp(whiteTextRaw)
    .trim()
    .resize({ height: targetTextH })
    .toBuffer();

  await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: scaledWhiteIcon, left: iconLeft, top: iconTop },
      { input: scaledWhiteText, left: textLeft, top: textTop },
    ])
    .png()
    .toFile('public/logo-horizontal-white.png');

  console.log(`Created public/logo-horizontal.png (${canvasW}x${canvasH})`);
  console.log(`Created public/logo-horizontal-white.png (${canvasW}x${canvasH})`);
}

generateHorizontalLogo().catch(console.error);
