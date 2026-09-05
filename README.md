# Nguyễn Hoàng Bảo Ngọc — Personal Landing Page

Một website cá nhân với hai phương án thiết kế hoàn chỉnh:

- `/phuong-an-1`: Sử thi đương đại — xanh đen, vàng đồng, giàu chiều sâu.
- `/phuong-an-2`: Hồ sơ biên tập sáng — giấy ngà, đỏ rượu, gần gũi và giàu tính tác giả.

Trang gốc `/` mở thẳng Phương án 1, là bản được chọn để sử dụng chính thức. Phương án 2 được giữ lại để tham khảo.

Website chính thức: https://nguyenhoangbaongoc.vercel.app

Mã nguồn được lưu trong kho GitHub **Private** `BAONGOCPROGRAM/nguyenhoangbaongoc-website`. Không đổi kho sang Public khi chưa được chủ sở hữu đồng ý.

## Lấy mã nguồn về máy

Cần Node.js 22 LTS, npm, Git và tài khoản GitHub có quyền truy cập kho riêng tư. Nếu đã đăng nhập bằng GitHub CLI:

```bash
gh repo clone BAONGOCPROGRAM/nguyenhoangbaongoc-website
cd nguyenhoangbaongoc-website
npm ci
npm run dev
```

Mở địa chỉ mà Vite in trong terminal. Website hiện không yêu cầu khóa API hoặc tệp `.env` để chạy cục bộ.

## Chạy và kiểm tra

```bash
npm run build
npm run test:sites
npm run preview -- --port 4173
```

Nội dung dùng ảnh chân dung do tác giả cung cấp, bìa sách và ảnh Hành Trình CanVê từ nguồn chính thức, cùng các liên kết chứng nhận công khai.

## Những phần cần biết khi sửa

- `src/App.jsx`: nội dung và các section của hai phương án.
- `src/styles.css`, `src/contact-channels.css`: giao diện, bố cục và liên hệ.
- `src/useEditorialMotion.js`: hiệu ứng cuộn và xuất hiện nội dung; hỗ trợ giảm chuyển động.
- `public/assets/`: ảnh và logo cần thiết, gồm ảnh mã QR Zalo nguyên bản.
- `AGENTS.md`: các quyết định thiết kế đã được duyệt.
- `vercel.json`: cấu hình triển khai; bản tĩnh được xuất vào `dist/client`.

Giữ liên hệ bằng biểu tượng và QR Zalo, không thêm lại số điện thoại cá nhân. Không tự thay đổi nội dung ảnh chứng chỉ chính thức.

## Lưu phiên bản và triển khai

Sau khi sửa, chạy build và kiểm tra rồi commit/push lên kho riêng tư. Kho này dùng để lưu và lấy lại mã nguồn; chưa thiết lập tự động triển khai từ GitHub. Chỉ cập nhật website công khai sau khi người dùng duyệt.

Thư mục `.vercel/` không được đưa vào Git. Nếu cần triển khai từ một máy mới, đăng nhập Vercel và liên kết với **dự án đang có** `nguyenhoangbaongoc`; không tạo dự án khác hoặc thay tên miền ngoài ý muốn.

Các thư mục `node_modules`, `dist`, `.vercel`, ảnh chụp kiểm thử và log cục bộ không được lưu trong kho. `package-lock.json` được giữ để `npm ci` cài lại đúng các phiên bản phụ thuộc.
