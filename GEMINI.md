# SKILL & RULES: XÂY DỰNG LANDING PAGE BEECARE BẰNG ANTIGRAVITY

> File này dùng làm **system rules / project skill** nạp vào Antigravity trước khi yêu cầu code. Agent phải đọc và tuân thủ toàn bộ quy tắc dưới đây cho mọi file được sinh ra trong dự án.

## 0. BỐI CẢNH DỰ ÁN
- **Sản phẩm:** BeeCare — hệ sinh thái quản lý viện dưỡng lão thông minh gồm 3 nền tảng: App Web Quản lý (React 18 + Vite), App Mobile Staff, App Mobile Người thân, dùng chung Backend ASP.NET Core + PostgreSQL + SignalR realtime.
- **Landing page này:** trang giới thiệu/marketing, thuyết phục Ban Giám đốc viện dưỡng lão đăng ký dùng thử/mua gói.
- **Yêu cầu chính:**
  1. Header có 4 mục điều hướng: **Trang chủ / Tin tức / Bảng giá / Liên hệ**
  2. Có hình ảnh và video minh họa
  3. Responsive tối ưu cho **MacBook Air** (1280px - 1440px) và toàn dải thiết bị
  4. Có hiệu ứng animation ("chuyển động sinh học" ecgDash, pulseGreen)
  5. Chuẩn SEO, điểm cao (Lighthouse/PageSpeed)

## 1. BẢNG CHỨC NĂNG CHỐT (MASTER LIST)
- **Website Admin:** Quản lý hồ sơ người cao tuổi, nhân viên, cơ sở vật chất, dịch vụ, tài chính, người thân, báo cáo thống kê, thông báo & cảnh báo, cài đặt hệ thống.
- **Mobile Staff:** Lịch làm việc & chấm công QR/FaceID, cập nhật tình trạng NCT (chỉ số sức khỏe, ăn uống, tắm rửa, bài tiết, hoạt động), sự cố - báo động khẩn cấp.
- **Mobile Family:** Xem thông tin sức khỏe NCT, theo dõi lịch trình & điều dưỡng phụ trách, nhận thông báo bất thường & hóa đơn.

## 2. DESIGN SYSTEM TOKENS
- Primary: `#265397`, hover: `#204780`, dark: `#193662`, light: `#EEF1F7`
- Secondary: `#0284C7`, hover: `#0369A1`
- Accent: `#06B6D4`
- Bg body: `#FBF7F3` (trắng ngà ấm), card: `#F4F6FA`, white: `#FFFFFF`
- Navy: `950: #0C1E37, 900: #0F172A, 800: #1E293B`
- Gray: `600: #475569, 500: #64748B, 400: #94A3B8, 200: #E5E1D8, 100: #F1EFE9`
- Semantics: Success `#10B981`, Warning `#F59E0B`, Danger `#EF4444`
- Font: `'Be Vietnam Pro', Inter, sans-serif`
- Radius: `sm 8px, md 12px, lg 16px, xl 22px, 2xl 30px`
- Shadows: blue-tinted shadows, `glow`, `card-hover`
- Motion: `ecgDash 2s linear infinite`, `pulseGreen 2s ease-out infinite`

## 3. SITEMAP 13 SECTIONS
1. Hero (#F8FAFD)
2. Pain Points (#FFFFFF)
3. Ecosystem (#F8FAFD)
4. Features (#FFFFFF)
5. Workflow (#F8FAFD)
6. Feature Grid 4x2 (#FFFFFF)
7. Benefits (gradient #F8FAFD -> #EFF6FF)
8. Showcase (#FFFFFF)
9. Target Personas (#F8FAFD)
10. Pricing (#FFFFFF, anchor #pricing)
11. News (#FFFFFF, anchor #news)
12. Contact (#F8FAFD, anchor #contact)
13. Footer (#0C1E37)

## 4. NGUYÊN TẮC LÀM VIỆC VỚI NGƯỜI DÙNG (BẮT BUỘC)
- **Tư vấn / Trả lời trước — Chỉ triển khai khi người dùng đồng ý:** Khi người dùng đặt câu hỏi, thăm dò khả năng ("có được không", "làm thế nào", gửi ảnh tham khảo...), Agent **chỉ phân tích, giải thích và đề xuất phương án**.
- **TUYỆT ĐỐI KHÔNG TỰ Ý VIẾT CODE / SỬA FILE** khi người dùng chưa xác nhận đồng ý triển khai. Chỉ bắt tay vào code khi người dùng nói rõ: *"Đồng ý", "Làm đi", "Triển khai giúp tôi", v.v.*

