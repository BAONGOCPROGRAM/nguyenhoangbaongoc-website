# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Project decisions

- Mã nguồn website được lưu riêng tại `BAONGOCPROGRAM/nguyenhoangbaongoc-website` ở chế độ Private. Không công khai kho, không đưa khóa đăng nhập hoặc tệp cấu hình bí mật lên Git; không tự bật triển khai tự động từ GitHub.

- This project contains two complete visual variants of Nguyễn Hoàng Bảo Ngọc's personal landing page at `/phuong-an-1` and `/phuong-an-2`.
- Preserve the balanced positioning between software engineering and Catholic authorship/research.
- Do not display credential issue dates on the landing page.
- The Fahasa bestseller statement must retain the February 2026 time qualifier.
- Keep the primary contact email as `baongocmobile@gmail.com`; the book-order email belongs only to the ECCE HOMO site.
- Keep the upcoming-project section in both variants with two named apps: `Dòng Sông Đức Tin — Bách Khoa Toàn Thư 2000 năm Hội Thánh` and `Những Vì Sao Sáng — Các thánh bổn mạng trong lòng người Việt`. Do not invent release dates.
- Use the two project-specific generated editorial illustrations in the upcoming-project cards; keep them free of embedded text so the responsive HTML copy remains readable and accurate.
- Phương án 1 là hướng được chọn. Giữ một ngôn ngữ hình ảnh thống nhất xanh đêm – vàng ấm, dùng “dòng sáng” làm mô-típ nối các chương và có chuyển cảnh cuộn tinh tế. Luôn hỗ trợ `prefers-reduced-motion`.
- Phương án 1 không hiển thị section “Năng lực công nghệ” và không có mục “Công nghệ” trên thanh điều hướng. Phương án 2 vẫn giữ section này.
- Trong phần chứng nhận, không hiển thị tên nền tảng Coursera trong nội dung HTML. Giữ tên tiếng Anh chính thức và thêm diễn giải tiếng Việt chính xác; không gọi chứng chỉ nghề nghiệp là học vị hay văn bằng đại học.
- Trong danh sách chứng nhận, dùng logo Google, IBM và Yale thay cho biểu tượng minh họa. Không hiển thị lời kêu gọi “Xem trang xác thực” trong thẻ nổi bật hoặc “Xem toàn bộ chứng chỉ” trên ảnh; toàn bộ từng hàng chứng nhận vẫn có thể mở liên kết xác thực.
- Trong nội dung HTML của danh sách chứng nhận, tên Google không kèm hậu tố “(v.2)” và tên khóa Yale cùng dòng mô tả không kèm mốc “200–1650”.
- Giọng văn của Phương án 1 phải khiêm tốn, nhẹ nhàng và bình dị: không đọc như bản khoe thành tích. Các lựa chọn đã chốt gồm `H1-A, H2-C, J1-C, J2-B, J3-B, J4-A`; từ phần công nghệ trở xuống dùng A cho thông tin kỹ thuật cần rõ, B cho đoạn cần chiều sâu và C làm giọng nền khiêm nhường.
- Khi đưa ảnh chứng chỉ chính thức lên trang, giữ nguyên nội dung tài liệu; không tẩy xóa logo, tên nhà cung cấp hoặc thông tin xác thực trong ảnh.
- Không triển khai lên Vercel cho đến khi người dùng xem bản cục bộ và yêu cầu triển khai rõ ràng.
- Giữ mục “Dự định sắp tới” sau phần hai ứng dụng đang phát triển. Mục này gồm hai hướng: kênh YouTube dạy lập trình mobile hoàn toàn miễn phí; và dự định mở lớp dạy lập trình, thần học Công giáo cho người trẻ thuộc Giáo hạt Phương Lâm, Giáo phận Xuân Lộc. Không tự suy diễn rằng các lớp trực tiếp cũng miễn phí, và không bịa ngày khai giảng.
- Phần liên hệ của Phương án 1 là một “chương kết” nền xanh đêm có ảnh thư viện mờ và lời dẫn ở đầu. Bên dưới chỉ có bốn biểu tượng Email, LinkedIn, GitHub, Zalo; không in địa chỉ hay tên tài khoản. Zalo mở hộp thoại với ảnh QR nguyên bản `zalo-contact-qr.jpg`. Không đưa số điện thoại cá nhân vào nội dung, nhãn truy cập hoặc URL ở bất kỳ phương án nào.
- Footer của Phương án 1 không hiển thị liên kết “Xem phương án 02”; Phương án 2 vẫn có thể dẫn về Phương án 1.
- Các chương sáng của Phương án 1 dùng cùng hệ “giấy ấm” (`paper`, `paper-soft`, `paper-deep`) với đường chuyển vàng mảnh; không dùng các mảng trắng kem phẳng, lạnh. Khu chứng nhận mang cảm giác hồ sơ lưu trữ: khung giấy đậm hơn, logo chính thức giữ nguyên màu và hàng chứng nhận chuyển xanh đêm khi tương tác.
- Giữ trật tự nội dung Phương án 1 theo mạch: Giới thiệu → Chứng nhận → Tác phẩm (ECCE HOMO, Hành Trình CanVê) → Dự định (hai ứng dụng đang phát triển, YouTube và lớp học) → Liên hệ. Thanh điều hướng phải đánh dấu đúng nhóm trong suốt các section con.
- Phương án 1 không còn khối hai cột “Kỹ sư công nghệ / Tác giả & người kể chuyện” trong chương Hành trình. Giữ phần hình ảnh kể chuyện “Dòng sáng liên tục” và dải trích dẫn nối trực tiếp sang phần Chứng nhận.
- Website production chính thức dùng dự án Vercel `nguyenhoangbaongoc` và tên miền `https://nguyenhoangbaongoc.vercel.app`. Đường dẫn gốc mở thẳng Phương án 1; Phương án 2 vẫn giữ ở `/phuong-an-2`.
- Hiệu ứng Phương án 1 dùng nhịp đọc nhẹ: tiêu đề hiện theo dòng, đoạn văn và ảnh có trigger riêng, đường vàng nối chương, chuyển động ảnh theo cuộn chỉ trên desktop. Không khóa cuộn; hỗ trợ đổi reduced-motion trực tiếp. Bản hiệu ứng mới chỉ chạy cục bộ cho đến khi người dùng duyệt và yêu cầu triển khai.
- Hero Phương án 1 không có hai nút “Xin mời đọc tiếp”, “Một vài dấu mốc học hỏi” hoặc dòng bestseller Fahasa. Đoạn giới thiệu dùng nội dung người dùng cung cấp về công việc kĩ sư phát triển phần mềm, viết sách, hai dự án đầu tiên hoàn thành năm 2025 và việc tiếp tục xây dựng App Công Giáo.
