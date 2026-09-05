# Design QA — Đồng bộ bảng màu Phương án 1

## Comparison target

- Source visual truth 1: `/Users/baongoc/Desktop/Screenshot 2026-09-05 at 09.52.16.png` (2660 × 1210 px), khu giới thiệu hai miền công nghệ và kể chuyện.
- Source visual truth 2: `/Users/baongoc/Desktop/Screenshot 2026-09-05 at 09.53.00.png` (2684 × 802 px), phần mở đầu dự án sắp ra mắt.
- Source visual truth 3: `/Users/baongoc/Desktop/Screenshot 2026-09-05 at 09.53.24.png` (2656 × 2044 px), chứng chỉ tiêu biểu.
- Source visual truth 4: `/Users/baongoc/Desktop/Screenshot 2026-09-05 at 09.53.33.png` (2648 × 1880 px), danh sách bốn chứng chỉ.
- Browser-rendered implementation: `design-qa-evidence/palette-journey-dual-final.png`, `design-qa-evidence/palette-upcoming-pass1.png` và `design-qa-evidence/palette-credentials-pass1.png` (1111 × 1032 px mỗi ảnh).
- Responsive evidence: `design-qa-evidence/palette-credentials-mobile-pass1.png` (313 × 677 px phần nội dung đã lưu từ viewport 390 × 844 CSS px; chênh lệch do chrome của trình duyệt).
- Combined comparison evidence: `design-qa-evidence/palette-journey-comparison.png`, `design-qa-evidence/palette-upcoming-comparison.png` và `design-qa-evidence/palette-credentials-comparison.png` (2400 × 900 px mỗi ảnh).
- Browser surface: Codex in-app browser, route cục bộ `/phuong-an-1`; hiệu ứng xuất hiện đã hoàn tất trước khi chụp.

## Full-view comparison evidence

Ba ảnh so sánh ghép đã được mở trực tiếp. Ở bản nguồn, các khu vực sáng dùng những sắc kem gần nhau nhưng hơi lạnh và phẳng, khiến nhịp chuyển từ xanh đêm sang nền sáng có cảm giác như thay hẳn sang một trang khác. Ở bản triển khai, các chương sáng cùng nằm trong một hệ “giấy ấm”: phần giới thiệu nhẹ và thoáng, dự án sắp ra mắt có đường viền vàng mảnh, còn chứng nhận đậm hơn như một hồ sơ lưu trữ. Sự khác biệt giữa các section vẫn đủ nhận biết nhưng không còn phá vỡ mạch thị giác chung.

## Focused region comparison evidence

- Khu hai miền công nghệ và kể chuyện dùng lớp giấy ấm có ánh vàng rất nhẹ; đường chia giữa hai cột chuyển sang nâu ấm thay vì xám lạnh.
- Điểm nối giữa khu dự án xanh đêm và phần dự án sắp ra mắt có một đường vàng mảnh cùng bóng trong mềm, giúp chuyển cảnh rõ mà không tạo cảm giác bị cắt ngang.
- Khu chứng nhận có nền giấy đậm hơn, khung chứng chỉ tiêu biểu mang một nét ký hiệu xanh đêm–vàng ở mép trên và đường viền ấm hơn.
- Logo chính thức Google, IBM và Yale vẫn giữ nguyên màu trên nền trắng; ảnh chứng chỉ gốc không bị thay thế, cắt lại hoặc chỉnh màu.
- Các hàng chứng chỉ giữ trạng thái tĩnh trang nhã; khi hover hoặc focus mới chuyển sang xanh đêm với chữ trắng ngà và vàng, giúp phản hồi tương tác đồng nhất với phần còn lại của website.
- Trên điện thoại, hàng chứng chỉ chuyển cột gọn, không có chữ tràn hoặc nội dung bị cắt; kiểm tra kích thước tài liệu không phát hiện tràn ngang thực tế.

## Required fidelity surfaces

- Fonts and typography: passed. Hệ serif và sans-serif hiện có được giữ nguyên; thay đổi màu không làm giảm phân cấp tiêu đề, mô tả và chú thích.
- Spacing and layout rhythm: passed. Chỉ tinh chỉnh nhẹ khoảng đầu section và đệm hàng chứng chỉ; cấu trúc nội dung hiện tại không thay đổi.
- Colors and visual tokens: passed. Các mảng sáng dùng chung `paper`, `paper-soft`, `paper-deep`; xanh đêm và vàng ấm tiếp tục là hai màu nhận diện chính.
- Transition rhythm: passed. Các ranh giới sáng–tối có đường vàng mảnh, ánh sáng rất nhẹ và bóng trong vừa đủ; không thêm hiệu ứng phô trương.
- Image quality and asset fidelity: passed. Logo chính thức và ảnh chứng chỉ gốc được giữ nguyên; không áp bộ lọc làm sai màu nhận diện.
- Copy and content: passed. Không sửa câu chữ, dữ liệu chứng chỉ, liên kết hoặc nội dung dự án trong lượt đồng bộ màu này.
- Affordance and accessibility: passed. Hover/focus của danh sách chứng chỉ có độ tương phản cao và không làm mất khả năng nhận biết liên kết.

## Findings

- Không còn vấn đề P0, P1 hoặc P2 trên các vùng desktop và mobile đã kiểm tra.
- P3: logo thương hiệu vẫn có màu riêng trên nền trắng, tạo điểm nhấn khác hệ vàng–xanh. Đây là ngoại lệ có chủ đích để tôn trọng nhận diện chính thức, không phải sai lệch bảng màu.

## Interaction and runtime checks

- Local route rendered successfully.
- Desktop visual review: passed at vùng nội dung lưu 1111 × 1032 px.
- Mobile visual review: passed at viewport 390 × 844 CSS px.
- Mobile overflow diagnostic: `scrollWidth` không lớn hơn vùng tài liệu thực; không có tràn ngang do nội dung.
- Browser viewport override đã được reset sau khi kiểm tra.
- Build: Vite passed.
- Sites worker tests: 4/4 passed.
- Source whitespace validation: `git diff --check` passed.
- Deployment: intentionally not run.

## Comparison history

### Pass 1

- Chuẩn hóa bốn token nền sáng thành một họ giấy ấm có sắc độ rõ ràng.
- Thêm lớp chuyển rất nhẹ cho khu hai miền, dự án sắp ra mắt và chứng nhận.
- Tạo khung “hồ sơ lưu trữ” cho chứng chỉ tiêu biểu và trạng thái tương tác xanh đêm cho từng hàng chứng chỉ.

### Final pass

- So sánh trực tiếp ba cặp ảnh nguồn–triển khai ở cùng khung 2400 × 900 px.
- Kiểm tra riêng khu chứng nhận trên điện thoại và xác nhận không có lỗi tràn ngang.
- Xác nhận logo Google, IBM, Yale và ảnh chứng chỉ vẫn nguyên bản.
- Chạy lại build, toàn bộ 4 bài kiểm thử Sites và `git diff --check`; tất cả đều đạt.

## Information architecture pass — 2026-09-05

- Phương án 1 được sắp lại theo mạch: Giới thiệu → Chứng nhận → Tác phẩm → Dự định → Liên hệ.
- Nhóm Giới thiệu gồm hero, dải năng lực tóm tắt và câu chuyện kết nối công nghệ với đức tin.
- Nhóm Tác phẩm gồm ECCE HOMO và Hành Trình CanVê; mục “Tác phẩm” trên thanh điều hướng vẫn được đánh dấu khi người đọc đi qua cả hai section.
- Nhóm Dự định gồm hai ứng dụng đang phát triển, kế hoạch YouTube và lớp học cho người trẻ; mục “Dự định” vẫn được đánh dấu xuyên suốt cả nhóm.
- Accessibility tree xác nhận thứ tự section và thứ tự liên kết điều hướng đúng với yêu cầu.
- Kiểm tra trực quan xác nhận các điểm nối Chứng nhận → ECCE HOMO → Hành Trình CanVê → Dự định vẫn giữ nhịp màu và không phát sinh khoảng trống bất thường.
- Phương án 2 giữ nguyên trật tự trước đó.
- Build: Vite passed.
- Sites worker tests: 4/4 passed.
- Source whitespace validation: `git diff --check` passed.
- Deployment: intentionally not run.

## Production deployment — 2026-09-05

- Vercel project đã đổi tên từ `bao-ngoc-personal-site` thành `nguyenhoangbaongoc` nhưng giữ nguyên project ID và lịch sử triển khai.
- Tên miền production chính thức: `https://nguyenhoangbaongoc.vercel.app`.
- Tên miền mới đã được thêm vào project domains, không chỉ là một deployment alias; kiểm tra khách ẩn danh trả về HTTP 200.
- Đường dẫn gốc mở thẳng Phương án 1. `/phuong-an-1` và `/phuong-an-2` vẫn hoạt động riêng.
- Production deployment ID: `dpl_Bsu6butvuH69Xuio94s8yykrYX3H`; trạng thái Vercel: READY.
- Live accessibility tree xác nhận đúng tiêu đề, thanh điều hướng, thứ tự section, hình ảnh và liên kết của Phương án 1.
- Tên miền cũ được giữ lại để các liên kết đã chia sẻ trước đây không bị hỏng.

## Journey simplification and production update — 2026-09-05

- Đã gỡ toàn bộ khối hai cột “Kỹ sư công nghệ / Tác giả & người kể chuyện” khỏi Phương án 1 theo ảnh chỉ định.
- Phần hình ảnh kể chuyện “Dòng sáng liên tục” và dải trích dẫn được giữ lại; hai phần nối trực tiếp, không để lại khoảng trống hoặc đường chia thừa.
- Phương án 2 không bị thay đổi.
- Build: Vite passed.
- Sites worker tests: 4/4 passed.
- Source whitespace validation: `git diff --check` passed.
- Production deployment ID: `dpl_4M8tj4WTHxBDCqWWFSHNxP8MK7fx`; trạng thái Vercel: READY.
- Live accessibility tree trên `https://nguyenhoangbaongoc.vercel.app/phuong-an-1` xác nhận không còn nội dung của khối đã xóa.
- Live visual review xác nhận chương Hành trình chuyển thẳng từ hình ảnh và lời dẫn sang dải trích dẫn, đúng nhịp xanh đêm – vàng ấm của toàn trang.

## Editorial motion — local review, 2026-09-05

- Replaced section-wide reveals with GSAP/ScrollTrigger: responsive SplitText headline lines, paragraph reveals, individual image entrances, staggered phones, gold chapter seams, and desktop image depth.
- Screenshots reviewed at 1440 × 1000 and 390 × 844 in `output/playwright/`. Vietnamese accents and original headline dimensions preserved: animated and reduced-motion H1 both measured 637.30 × 365.43 px on desktop.
- Temporal samples confirmed headline opacity progresses 0 → 0.8861 → 1 and translation reaches zero; this verifies animation rather than only final static appearance.
- Full desktop traversal: no hidden paragraphs/headline lines after traversal, no horizontal overflow. Mobile section checks: no horizontal overflow.
- Runtime reduced-motion switch: zero split lines and zero hidden paragraphs/headings. Keyboard focus immediately reveals a credential link. Variant 2: zero motion lines/seams.
- Corrected cold-load fragment navigation after React/font initialization.
- Build and 4/4 Sites worker checks passed. Browser logged only a pre-existing missing favicon request; no animation runtime errors observed.
- Deployment intentionally not run; awaiting user review of the local motion design.

## Contact icons and Zalo QR — local review

- Replaced contact addresses/handles with four accessible icon controls in both variants. Removed the personal phone number and phone-based Zalo URL from source and built JavaScript.
- Zalo opens a native modal dialog with the supplied original QR image, close control, Escape dismissal and downloadable image. Source and copied asset SHA-256 match.
- Desktop/mobile interaction checks passed: QR image loads at its original 1260px width, dialog fits 390px viewport, Escape restores focus to Zalo and body scrolling is restored on close.
- Fixed a ScrollTrigger resize failure exposed by modal/mobile testing by retaining completed triggers and removing manual trigger sorting. Desktop-to-mobile transitions subsequently passed.
- Build and 4/4 Sites tests passed. Local only; production remains unchanged pending approval.

## Hero copy simplification — local review

- Removed both hero action buttons and the bestseller line from variant 1 only.
- Replaced the introduction with the user's exact supplied paragraph, including the 2025 completion statement.
- Build passed. Desktop (1440 × 1000) and mobile (390 × 844) screenshots reviewed; exact copy, absence of removed controls, and no horizontal overflow verified.
- Local only; not deployed.

## Approved production publication — 2026-09-05

- User approved publication of the reviewed local version. Production deployment `dpl_F6XDqH86CpPaHZu4L2G7odPVvchD` reached READY and was aliased to `https://nguyenhoangbaongoc.vercel.app`.
- Build and 4/4 Sites tests passed before publication.
- Live root route opens variant 1 with the exact revised hero paragraph and without its two action buttons or bestseller line.
- Live Zalo button opens the supplied QR image (1260px original width); no visible personal phone number or horizontal overflow. Screenshot visually reviewed in `output/playwright/production-zalo-verified.png`.
- Browser console reports only the existing missing favicon.ico (404), with no application runtime error observed.

final result: passed
