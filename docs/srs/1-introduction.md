## 1. Introduction

> Sơ bản 0.1, lập ngày 2026-10-08 từ `docs/raw_requirements/raw_requirements.md` và phần làm rõ cùng ngày. Cùng ngày, phạm vi User Class được chỉnh: website còn khách xem, người bình chọn và ban tổ chức. CMS không có tự đăng ký; một tài khoản admin được cấp sẵn để tạo và xóa tài khoản ban tổ chức (ASM-09). Website công khai không có kho lưu trữ bài và điểm đến đạt giải các năm trước, và không có trang chính sách bảo vệ dữ liệu cá nhân. Các mục đánh dấu **[GIẢ ĐỊNH]** hoặc **[MỞ]** cần được chốt trước khi chuyển sang đặc tả chi tiết.

### 1.1 Document Purpose

Tài liệu này đặc tả yêu cầu phần mềm cho website cuộc thi điểm đến du lịch nông nghiệp nông thôn của Bộ Nông nghiệp và Môi trường.

**Product Name:** Website Hội thi điểm đến du lịch nông nghiệp nông thôn

**Document Version:** 0.1 (sơ bản)

**Intended Audience:**

- Ban tổ chức cuộc thi
- Business Analysts
- Developers
- Testers
- Project Managers
- Đội kỹ thuật vận hành

### 1.2 Document Conventions

**Requirement ID Format:** `<Loại>-<Nhóm>-<NN>`

| Loại | Ý nghĩa               | Ví dụ      |
| ---- | --------------------- | ---------- |
| FR   | Yêu cầu chức năng     | FR-VOTE-01 |
| NFR  | Yêu cầu phi chức năng | NFR-SEC-01 |
| UC   | Ca sử dụng            | UC-VOTE-01 |
| ASM  | Giả định              | ASM-01     |
| OPEN | Điểm còn mở           | OPEN-01    |

Nhóm dự kiến: `AUTH`, `CMS` (đăng bài), `VOTE`, `CONTENT`, `SHARE`, `SEASON`.

**Notation Conventions:**

- **Bold text:** thuật ngữ nghiệp vụ hoặc nhãn trạng thái cần giữ nguyên khi đặc tả tiếp.
- `Code/Technical terms:` định danh yêu cầu, tên hệ thống ngoài, tên trường dữ liệu.
- **[GIẢ ĐỊNH]:** điều kiện sơ bản đang dùng để viết tiếp; đổi giả định thì phải rà lại phạm vi và luồng.
- **[MỞ]:** câu hỏi chưa có câu trả lời. Sơ bản không biến điểm này thành hành vi hệ thống.
- **[ĐỀ XUẤT]:** phương án kỹ thuật đưa ra để khách hàng chấp thuận trước khi thành yêu cầu bắt buộc.

### 1.3 Project Scope

**Software Purpose:**

Website công khai cho một mùa thi, lặp lại theo năm. Sản phẩm gồm hai bề mặt trên cùng một hệ thống: website công khai cho khách xem và người bình chọn, và CMS cho ban tổ chức. Hai bề mặt dùng chung kho bài, phiếu và file. Ban tổ chức nhận hồ sơ điểm đến ngoài website, rồi đưa bài lên CMS để công chúng xem và bình chọn. Cách quản lý bài đăng là **[GIẢ ĐỊNH], chờ chốt spec** (ASM-01). Người bình chọn đăng nhập bằng tài khoản Facebook hoặc Google. Mỗi tài khoản ghi tối đa một phiếu cho cùng một bài trong mùa đó. Số phiếu hiển thị công khai theo thời gian thực: khi có phiếu mới, màn hình thay số đang hiện bằng tổng phiếu mới nhất trên hệ thống. **[ĐỀ XUẤT]** giao diện không lấy số đang hiện rồi cộng 1. Việc có xem được ai đã vote là điểm **[MỞ]** (OPEN-03). **[ĐỀ XUẤT]** mọi vai trò chỉ thấy số lượng phiếu, không thấy danh sách người vote. Website công khai chỉ hiển thị mùa hiện tại.

Mùa đầu dự kiến khoảng 68 bài từ 34 tỉnh thành. Bình chọn trực tuyến dự kiến mở khoảng đầu tháng 11; chung kết dự kiến khoảng đầu tháng 12. **[GIẢ ĐỊNH]** Ban tổ chức đặt thời gian mở và đóng bình chọn của mùa trên CMS (ASM-12). Cách gắn hai mốc này lên giao diện theo từng vòng thi là điểm **[MỞ]** (xem mục 2.5).

**Major Features:**

Website công khai — khách xem và người bình chọn:

- Trang nội dung tĩnh: giới thiệu cuộc thi, thể lệ, tin tức, hội đồng ban giám khảo hội đồng ban giám khảo, chính sách bảo mật
- Danh sách bài dự thi. **[GIẢ ĐỊNH]** Danh sách lọc được theo tỉnh thành (ASM-11)
- Trang chi tiết bài dự thi. **[GIẢ ĐỊNH]** Nếu bài có 1 video thì video đó tự động phát (ASM-10)
- Đăng nhập Facebook hoặc Google để bình chọn
- Mỗi tài khoản được ghi tối đa một phiếu trên cùng một bài. Số phiếu công khai: sau khi ghi phiếu, danh sách và trang chi tiết hiện tổng mới nhất trên hệ thống.
- Khi người dùng chọn Facebook hoặc Zalo, hệ thống mở chức năng chia sẻ tương ứng và truyền URL bài viết vào nội dung chia sẻ. TikTok dùng cùng URL đó làm link in bio; hệ thống không đăng video gốc lên TikTok
- **[ĐỀ XUẤT]** Ảnh và video đã công khai phát qua CDN; trang danh sách và trang chi tiết preload các media này từ CDN

CMS — ban tổ chức:

- Đăng nhập bằng tài khoản đã được cấp. Không có luồng tự đăng ký
- **[ĐỀ XUẤT]** Tài khoản CMS gắn với email và xác thực email bằng OTP. Quên mật khẩu gửi OTP tới email đã xác thực. Gửi lại OTP tối đa 3 lần, mỗi lần cách lần gửi trước 60 giây
- **[GIẢ ĐỊNH]** Một tài khoản admin được cung cấp khi bàn giao, không tạo được trên hệ thống. Admin tạo và xóa tài khoản ban tổ chức (ASM-09)
- Cập nhật nội dung tĩnh: giới thiệu cuộc thi, thể lệ, tin tức, hội đồng ban giám khảo
- **[GIẢ ĐỊNH]** Quản lý mùa giải, gồm thời gian mở bình chọn và thời gian đóng bình chọn (ASM-12)
- **[GIẢ ĐỊNH], chờ chốt spec:** Quản lý bài đăng của mùa — xem danh sách, tạo, sửa, xóa; bài công khai ngay khi tạo (ASM-01)
- **[ĐỀ XUẤT]** Form tạo và sửa bài trên CMS dùng cùng các trường: tên điểm đến, tỉnh/thành, xã/phường và huyện/quận, mô tả, 1–10 ảnh, 1 video
- **[ĐỀ XUẤT]** Thống kê phiếu trên CMS: lọc theo mùa giải; mỗi bài hiện tên điểm đến, tỉnh/thành, xã/phường và huyện/quận, số phiếu (mục 2.8)

Dùng chung:

- Mùa giải tách theo năm

**Out of Scope:**

- Cổng nộp bài và tài khoản của đơn vị dự thi
- Tự đăng ký tài khoản CMS, hoặc tự tạo thêm tài khoản admin trên hệ thống
- SMS OTP
- Hàng đợi duyệt bài
- Định danh CCCD / VNeID
- Bình luận công khai hoặc góp ý riêng cho ban giám khảo
- Ban giám khảo chấm điểm trên hệ thống
- Đăng nhập để bình chọn bằng cách khác Facebook và Google
- Website tiếng Anh hoặc ngôn ngữ khác
- Mã giới thiệu, mời bạn bè, hoặc cơ chế thưởng phiếu khi chia sẻ
- Nền tảng dùng chung cho cuộc thi khác của Bộ
- Giới hạn phiếu theo IP hoặc thiết bị
- Kho lưu trữ bài và điểm đến đạt giải các năm trước trên website công khai
- Trang chính sách bảo vệ dữ liệu cá nhân và bước đồng ý khi đăng nhập để bình chọn
- Kế thừa quyền bình chọn của tài khoản sang mùa năm sau
- Hợp đồng bảo trì định kỳ sau mùa giải
- Luồng giao diện tách sơ khảo và chung kết (chưa được chốt, không đặc tả ở sơ bản này)

### 1.4 References

| Reference ID | Title                                                                                       | Version | Date       | Source/URL                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------- | ------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| REF-01       | Bảng câu hỏi tổng hợp — Website Hội thi điểm đến du lịch nông nghiệp nông thôn              | 1.0     | 2026-10-08 | `docs/raw_requirements/raw_requirements.md`                                                                          |
| REF-02       | Làm rõ phạm vi khi lập sơ bản SRS (bình chọn, xác thực, nộp bài, nội dung bài, AS-IS)       | 0.1     | 2026-10-08 | Phiên làm rõ nội bộ, ghi vào ASM/OPEN ở mục 2.5                                                                      |
| REF-03       | Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân                                           | —       | 2023-04-17 | Câu 24 trong raw requirements. Sơ bản không xây trang chính sách hay bước đồng ý; xem REF-07                          |
| REF-04       | Làm rõ User Class: khách xem, người bình chọn, ban tổ chức; ban tổ chức đăng bài trên CMS   | 0.1     | 2026-10-08 | Phiên làm rõ phạm vi, ghi vào mục 1.3 và 2.1–2.6                                                                     |
| REF-05       | Làm rõ tài khoản CMS: không tự đăng ký; một admin được cấp tạo và xóa tài khoản ban tổ chức | 0.1     | 2026-10-08 | Phiên làm rõ, ghi vào ASM-09 và mục 2.2, 2.7                                                                         |
| REF-06       | Website công khai không có kho lưu trữ bài và điểm đến đạt giải các năm trước               | 0.1     | 2026-10-08 | Phiên làm rõ, ghi vào mục 1.3 và 2.2. Câu 5 trong raw requirements ghi có kho lưu trữ; sơ bản này lấy lần làm rõ sau |
| REF-07       | Website công khai không có trang chính sách bảo vệ dữ liệu cá nhân và bước đồng ý khi đăng nhập để bình chọn | 0.1 | 2026-10-08 | Phiên làm rõ, ghi vào mục 1.3 và 2.3–2.5 |
