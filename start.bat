@echo off
chcp 65001 >nul
title BeeCare Ads - Khoi chay he thong
color 0B

:: Chuyen ve dung thu muc cua du an
cd /d "%~dp0"

:: Bo sung cac duong dan Node.js pho bien vao PATH phong khi bien moi truong chua load
set "PATH=%PATH%;C:\Program Files\nodejs;%LOCALAPPDATA%\Programs\node;%APPDATA%\npm"

echo ========================================================
echo       CHƯƠNG TRÌNH KHỞI CHẠY BEE CARE LANDING PAGE
echo ========================================================
echo.

:: 1. Kiem tra Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo [LỖI] Máy tính chưa được cài đặt Node.js!
    echo Vui lòng tải và cài đặt Node.js tại: https://nodejs.org/
    echo Sau khi cài đặt xong, hãy mở lại file này.
    echo.
    pause
    exit /b
)

:: 2. Kiem tra thu vien node_modules
if not exist "node_modules\" (
    echo [THÔNG BÁO] Chưa tìm thấy thư viện, hệ thống đang cài đặt tự động...
    echo Quá trình này có thể mất 1-2 phút tùy tốc độ mạng...
    call npm install
    if %errorlevel% neq 0 (
        color 0C
        echo [LỖI] Cài đặt dependencies thất bại! Vui lòng kiểm tra kết nối mạng.
        pause
        exit /b
    )
    echo [THÀNH CÔNG] Cài đặt thư viện hoàn tất!
    echo.
)

:: 3. Khoi chay Du an va tu dong mo trinh duyet
echo [ĐANG KHỞI CHẠY] Dự án đang chạy tại: http://localhost:3000
echo Hệ thống sẽ tự động bật trình duyệt web cho bạn...
echo Để dừng hệ thống, bạn có thể nhấn Ctrl + C hoặc đóng cửa sổ này.
echo ========================================================
echo.

call npm run dev -- --open

pause
