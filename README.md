# TỔNG QUÁT:

Dự án có 2 folder chính: 
 - Folder 1: [laravel-api] để chạy server cung cấp các API cho project. Hiện tại có [2 API] chính: [hiển thị] thông tin và [chỉnh sửa] thông tin nhân viên.
 - Folder 2: [react-auth] chứa [giao diện] của project và gọi đến các API của folder 1 để hiển thị dữ liệu.
 
 ## YÊU CẦU TRƯỚC KHI KHỞI CHẠY PROJECT:
 ### Cần cài đặt các phần mềm sau:
 - [NodeJS phiên bản LTS 16.13.0](https://nodejs.org/en/)
 - XAMP hướng dẫn [tại đây](https://www.youtube.com/watch?v=ucQkV9Lff7s). Sau đó tạo một database tên review_nhanvien
 - Laravel Composer hướng dẫn [tại đây](https://www.youtube.com/watch?v=NdL-sbjIaOI)
 - POSTMAN [tại đây](https://www.postman.com/product/rest-client/)
 
# KHỞI CHẠY PROJECT

Hiện tại chỉ có phần API là hoàn chỉnh nên mọi người chạy phần API trước nhé. Phần giao diện sẽ được cập nhật sau:
## API:
 ### Vào folder laravel-api (sau khi đã clone project về). Mở command line ở thư mục này lên và gõ các lệnh sau:
 - Bước 1: cp .env.example .env (sau đó vào file .env cập nhật lại tên DB_DATABASE=review_nhanvien)
 - Bước 2. composer update 
 - Bước 3: php artisan db:seed (khởi tạo dữ liệu fake cho database)
 - Bước 4: php artisan serve (khởi chạy serve)
 ** Project sẽ khởi chạy ở host: http://127.0.0.1:8000/
 
 ## KIỂM TRA API:
 # Sử dụng POSTMAN:
 - Hiển thị thông tin user: http://127.0.0.1:8000/api/user/{userId} (userId từ 1->10) (phương thức GET)
 - Hiển thị thông tin CV của user:  http://127.0.0.1:8000/api/employee/cv-show/{userId} (phương thức GET)
 
