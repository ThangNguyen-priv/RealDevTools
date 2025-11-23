RealDevTools

📌 Giới thiệu
RealDevTools là một bộ công cụ hỗ trợ lập trình viên với nhiều tiện ích cần thiết trong quá trình phát triển phần mềm. Ứng dụng được xây dựng với giao diện thân thiện, dễ sử dụng và hỗ trợ đầy đủ light/dark mode.

✨ Tính năng chính
HTML/CSS/JS Tools
HTML Minifier - Tối ưu hóa mã HTML
HTML Formatter - Format mã HTML
HTML Viewer - Xem trực quan mã HTML
CSS Minifier - Tối ưu hóa mã CSS
CSS Formatter - Format mã CSS
JavaScript Minifier - Tối ưu hóa mã JavaScript
JavaScript Formatter - Format mã JavaScript
Text Tools
Regex Tester - Kiểm tra biểu thức chính quy
Text Diff Checker - So sánh sự khác biệt giữa các văn bản
Word Counter - Đếm số từ, ký tự trong văn bản
Lorem Ipsum Generator - Tạo văn bản mẫu
Random String Generator - Tạo chuỗi ngẫu nhiên
Case Converter - Chuyển đổi kiểu chữ
Duplicate Remover - Xóa dòng trùng lặp
Encoding Tools
Base64 Encode/Decode - Mã hóa và giải mã Base64
URL Encode/Decode - Mã hóa và giải mã URL
JWT Decode - Giải mã JWT token
HTML Entities - Chuyển đổi HTML entities
Morse Code - Chuyển đổi văn bản sang mã Morse và ngược lại
JSON & Data Tools
JSON Validator - Kiểm tra và format JSON
JSON to CSV - Chuyển đổi JSON sang CSV
CSV to JSON - Chuyển đổi CSV sang JSON
YAML to JSON - Chuyển đổi YAML sang JSON
JSON Viewer - Xem và điều hướng JSON
Base Converter - Chuyển đổi giữa các hệ số
Other Utilities
UUID Generator - Tạo UUID
Timestamp Converter - Chuyển đổi định dạng thời gian
Color Picker - Chọn và chuyển đổi màu sắc
QR Code Generator - Tạo mã QR
Barcode Generator - Tạo mã vạch
IP Lookup - Tra cứu thông tin IP
User Agent - Phân tích User Agent

🛠️ Công nghệ sử dụng
Frontend Framework: React 18 với TypeScript
Build Tool: Vite
Styling: Tailwind CSS v4
Routing: React Router v6
Theme Management: next-themes
State Management: React Context API
API Integration: Google Generative AI (Gemini)
Icon Library: Font Awesome

📥 Cài đặt

# Clone dự án
git clone https://github.com/username/RealDevTools-Basic.git

# Di chuyển vào thư mục dự án
cd RealDevTools-Basic

# Cài đặt dependencies
npm install

# Tạo file môi trường
cp .env.example .env
# Thêm Google Generative AI API key vào file .env

# Khởi chạy ứng dụng ở môi trường development
npm run dev

🚀 Sử dụng
Mở trình duyệt và truy cập địa chỉ: http://localhost:5173/
Sử dụng thanh sidebar bên trái để điều hướng giữa các công cụ
Chọn công cụ cần sử dụng từ danh sách
Mỗi công cụ có giao diện riêng phù hợp với chức năng
Sử dụng toggle theme ở góc phải trên cùng để chuyển đổi giữa light/dark mode
Chatbot hỗ trợ có sẵn ở góc dưới bên phải màn hình

📂 Cấu trúc dự án
src/
├── main.tsx               # Entry point

├── apis/                  # API calls and configurations

├── assets/                # Static assets (images, icons)

├── components/            # Reusable React components

│   ├── common/            # Common components (buttons, inputs, etc)

│   ├── config/            # Configuration components

│   ├── features/          # Feature-specific components

│   └── ui/                # UI components (theme, modals, etc)

├── context/               # React Context providers

├── hooks/                 # Custom React hooks

├── layout/                # Layout components

│   ├── chatbotlayout/     # Chatbot layout

│   ├── headerlayout/      # Header layout

│   ├── mainlayout/        # Main content layout

│   ├── sidebarlayout/     # Sidebar layout

│   └── tools/             # Tool-specific layouts

├── lib/                   # Utilities and helper functions

├── pages/                 # Page components

│   └── tools/             # Tool pages

├── router/                # Routing configuration

├── services/              # Service layer

├── styles/                # Global styles

└── types/                 # TypeScript type definitions


🎨 Theme
RealDevTools hỗ trợ đầy đủ chế độ light và dark mode với thiết kế nhất quán. Người dùng có thể dễ dàng chuyển đổi giữa các theme bằng cách sử dụng toggle ở góc trên bên phải của ứng dụng.

Dark Mode
Màu nền tối với độ tương phản cao
Thiết kế tập trung vào nội dung
Giảm mỏi mắt khi làm việc lâu
Light Mode
Màu nền sáng, rõ ràng
Phù hợp với môi trường làm việc ánh sáng tốt
Hiển thị chi tiết và màu sắc chính xác

🤖 Chatbot
RealDevTools tích hợp chatbot thông minh sử dụng Google Generative AI (Gemini) có khả năng:

Trả lời các câu hỏi về lập trình
Hỗ trợ người dùng sử dụng các công cụ
Giải thích các khái niệm kỹ thuật
Đề xuất giải pháp cho vấn đề của người dùng

👥 Đóng góp
Mọi đóng góp cho dự án đều được đánh giá cao. Nếu bạn muốn đóng góp:

Fork dự án
Tạo nhánh tính năng (git checkout -b feature/amazing-feature)
Commit thay đổi (git commit -m 'Add some amazing feature')
Push lên nhánh (git push origin feature/amazing-feature)
Mở Pull Request

🔧 Các vấn đề đã biết và giải pháp
Theme toggle: Nếu gặp vấn đề với việc chuyển đổi theme, hãy kiểm tra console để xem xung đột giữa next-themes và các class CSS khác
Scrollbar style: Scrollbar được tùy chỉnh riêng trong file layout.css và có thể cần điều chỉnh để phù hợp với theme

📞 Liên hệ
Nguyễn Văn Thắng - GitHub

Link dự án: https://github.com/ThangNguyen-priv/RealDevTools-Basic

© 2024 RealDevTools. All Rights Reserved.
