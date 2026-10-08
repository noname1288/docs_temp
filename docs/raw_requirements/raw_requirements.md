# Bảng câu hỏi tổng hợp

Làm rõ yêu cầu triển khai **Website Hội thi điểm đến du lịch nông nghiệp nông thôn** (Bộ Nông nghiệp và Môi trường).

Tài liệu ghi lại câu hỏi sơ khảo, lý do cần làm rõ và câu trả lời của khách hàng. Các hạng mục khách hàng nhờ đội kỹ thuật đề xuất được đánh dấu riêng ở cuối file.

---

## A. Quy mô và vận hành cuộc thi

### 1. Số lượng bài dự thi và số vòng thi


|                      |                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Dự kiến số lượng bài dự thi mỗi mùa (vài chục hay vài trăm)? Có mấy vòng thi (sơ khảo / chung kết)? |
| **Lý do cần làm rõ** | Ảnh hưởng thiết kế trang "Bài thi & Bình chọn", phân trang, lọc.                                    |
| **Câu trả lời**      | 68 bài dự thi (34 tỉnh thành). Có sơ khảo và chung kết, nhưng chỉ cần bình chọn 1 lần.              |




### 2. Lượng truy cập cao điểm


|                      |                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Ước tính lượng truy cập cao điểm (giai đoạn nước rút gần chốt vote)?                      |
| **Lý do cần làm rõ** | Quyết định hạ tầng, auto-scale, CDN.                                                      |
| **Câu trả lời**      | Hạ tầng kỹ thuật tính giúp. Dự kiến khoảng **100 lượt truy cập đồng thời** là mức tối đa. |




### 3. Thời gian mùa giải


|                      |                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Mỗi mùa giải kéo dài bao lâu? Mốc thời gian cụ thể cho năm đầu tiên?                                 |
| **Lý do cần làm rõ** | Lên timeline triển khai dự án.                                                                       |
| **Câu trả lời**      | Chung kết dự kiến khoảng **đầu tháng 12**. Online voting dự kiến triển khai khoảng **đầu tháng 11**. |


---



## B. Tính thường niên (nhiều năm)



### 4. Mùa giải theo năm


|                      |                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Mỗi năm có tạo "mùa giải" (season / edition) riêng, dữ liệu tách biệt theo năm nhưng vẫn lưu lại lịch sử không? |
| **Lý do cần làm rõ** | Quyết định mô hình cơ sở dữ liệu (tách theo năm).                                                               |
| **Câu trả lời**      | Có.                                                                                                             |




### 5. Kho lưu trữ bài đạt giải các năm trước


|                      |                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Bài thi / điểm đến đạt giải các năm trước có cần hiển thị lại như "kho lưu trữ" không, hay archive / ẩn sau khi kết thúc? |
| **Lý do cần làm rõ** | Ảnh hưởng trang chủ, SEO, tính năng tra cứu.                                                                              |
| **Câu trả lời**      | Có. Hiển thị lại như kho lưu trữ.                                                                                         |




### 6. Tài khoản giữa các năm


|                      |                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Câu hỏi**          | Tài khoản số điện thoại đã xác thực có tái sử dụng được giữa các năm (vote năm sau không cần OTP lại) không? |
| **Lý do cần làm rõ** | Thiết kế bảng người dùng và phiên xác thực.                                                                  |
| **Câu trả lời**      | Không. Tách biệt từng năm.                                                                                   |




### 7. Dùng chung cho cuộc thi khác của Bộ


|                      |                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Nền tảng có dự định dùng chung cho các cuộc thi / chương trình khác của Bộ trong tương lai không? |
| **Lý do cần làm rõ** | Quyết định xây theo hướng nền tảng đa cuộc thi ngay từ đầu hay không.                             |
| **Câu trả lời**      | Chưa có dự kiến.                                                                                  |


---



## C. Xác thực OTP và chống gian lận vote



### 8. Hạ tầng SMS


|                      |                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------ |
| **Câu hỏi**          | Đã có ngân sách / nhà cung cấp SMS Brandname (eSMS, SpeedSMS, Viettel, FPT...) chưa? |
| **Lý do cần làm rõ** | Phát sinh chi phí theo lượt gửi, cần duyệt ngân sách.                                |
| **Câu trả lời**      | Tính chung vào gói xây dựng website.                                                 |




### 9. Chống gian lận


|                      |                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Chấp nhận rủi ro 1 người dùng nhiều SIM để vote nhiều lần, hay cần thêm lớp kiểm soát (giới hạn IP / thiết bị, reCAPTCHA)? |
| **Lý do cần làm rõ** | Quyết định mức đầu tư cho cơ chế chống gian lận.                                                                           |
| **Câu trả lời**      | Chấp nhận rủi ro đó.                                                                                                       |




### 10. Định danh


|                      |                                                                                   |
| -------------------- | --------------------------------------------------------------------------------- |
| **Câu hỏi**          | Có cần định danh thật (liên kết CCCD / VNeID) không, hay OTP số điện thoại là đủ? |
| **Lý do cần làm rõ** | Ảnh hưởng độ phức tạp và chi phí xác thực.                                        |
| **Câu trả lời**      | OTP SMS là đủ.                                                                    |




### 11. Hiển thị kết quả vote


|                      |                                                         |
| -------------------- | ------------------------------------------------------- |
| **Câu hỏi**          | Số vote có công khai real-time hay ẩn đến ngày công bố? |
| **Lý do cần làm rõ** | Ảnh hưởng giao diện và giảm hiệu ứng "mua vote".        |
| **Câu trả lời**      | Công khai theo thời gian thực.                          |


---



## D. Tính năng comment



### 12. Nghiệp vụ comment


|                      |                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Comment là bình luận công khai dưới bài thi (kiểu mạng xã hội), hay góp ý riêng gửi ban tổ chức / ban giám khảo? |
| **Lý do cần làm rõ** | Quyết định thiết kế giao diện và luồng dữ liệu.                                                                  |
| **Câu trả lời**      | Không có comment.                                                                                                |




### 13. Kiểm duyệt comment


|                      |                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------ |
| **Câu hỏi**          | Có cần duyệt comment trước khi hiển thị không (tránh phát ngôn nhạy cảm vì là web của Bộ)? |
| **Lý do cần làm rõ** | Cần thêm module kiểm duyệt trong CMS.                                                      |
| **Câu trả lời**      | Không áp dụng. Cuộc thi không có comment (xem câu 12).                                     |




### 14. Xác thực khi comment


|                      |                                                                             |
| -------------------- | --------------------------------------------------------------------------- |
| **Câu hỏi**          | Comment có cần xác thực OTP như vote không, hay chỉ cần nhập tên / ẩn danh? |
| **Lý do cần làm rõ** | Ảnh hưởng trải nghiệm người dùng và mức độ spam cần kiểm soát.              |
| **Câu trả lời**      | Không áp dụng. Cuộc thi không có comment (xem câu 12).                      |


---



## E. Quản trị nội dung và ban giám khảo



### 15. Ai đăng bài thi


|                      |                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Ai đăng bài thi lên hệ thống — ban tổ chức tự thao tác qua trang quản trị, hay gửi nội dung để đội kỹ thuật đăng thủ công? |
| **Lý do cần làm rõ** | Quyết định có cần xây CMS quản trị đầy đủ không.                                                                           |
| **Câu trả lời**      | Gửi nội dung để đội kỹ thuật đăng.                                                                                         |




### 16. Hội đồng ban giám khảo


|                      |                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Trang "Hội đồng BGK" chỉ giới thiệu tĩnh, hay ban giám khảo cần chấm điểm online qua hệ thống riêng? |
| **Lý do cần làm rõ** | Có thể cần thêm một cổng riêng cho ban giám khảo.                                                    |
| **Câu trả lời**      | Giới thiệu tĩnh.                                                                                     |


---



## F. Tích hợp mạng xã hội và chia sẻ



### 17. Nút chia sẻ


|                      |                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Cần nút chia sẻ bài thi lên các nền tảng nào (Facebook, Zalo, TikTok...)? Chia sẻ dạng link kèm ảnh / mô tả (Open Graph) hay chia sẻ nguyên clip video? |
| **Lý do cần làm rõ** | Ảnh hưởng thiết kế thẻ meta từng bài thi và thư viện chia sẻ.                                                                                           |
| **Câu trả lời**      | Chia sẻ lên Facebook và Zalo, dạng gắn link tại caption. TikTok là link in bio.                                                                         |




### 18. Khuyến khích chia sẻ để tăng vote


|                      |                                                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Có tính năng viral / khuyến khích chia sẻ để tăng vote không (ví dụ: mời bạn bè, mã giới thiệu)? Nếu có, có tính là một hình thức "mua vote gián tiếp" cần kiểm soát không? |
| **Lý do cần làm rõ** | Có thể phát sinh thêm cơ chế chống gian lận.                                                                                                                                |
| **Câu trả lời**      | Không có tính năng này.                                                                                                                                                     |




### 19. Đăng nhập mạng xã hội


|                      |                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Có cho phép đăng nhập / bình chọn qua tài khoản Facebook / Google (Social Login) thay vì chỉ OTP số điện thoại không? |
| **Lý do cần làm rõ** | Ảnh hưởng luồng xác thực; có thể tăng nguy cơ một người dùng nhiều tài khoản.                                         |
| **Câu trả lời**      | Có.                                                                                                                   |


---



## G. Đa ngôn ngữ



### 20. Phạm vi ngôn ngữ


|                      |                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Website có cần đa ngôn ngữ không (Việt – Anh, hay thêm ngôn ngữ khác)? Toàn bộ nội dung hay chỉ trang giới thiệu / thể lệ dành cho khách quốc tế? |
| **Lý do cần làm rõ** | Quyết định kiến trúc đa ngôn ngữ ngay từ đầu (tốn công nếu làm sau).                                                                              |
| **Câu trả lời**      | Chỉ tiếng Việt.                                                                                                                                   |




### 21. Khách quốc tế tham gia


|                      |                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------- |
| **Câu hỏi**          | Khách quốc tế có được tham gia dự thi (nộp bài) hay chỉ xem / bình chọn?           |
| **Lý do cần làm rõ** | Ảnh hưởng form nộp bài và xác thực (OTP số điện thoại nước ngoài có hỗ trợ không). |
| **Câu trả lời**      | Không quan trọng. Xác thực SMS OTP trong nước là được.                             |




### 22. OTP cho số điện thoại nước ngoài


|                      |                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Nếu khách quốc tế được vote, hệ thống SMS Brandname đã chọn có hỗ trợ gửi OTP ra số điện thoại nước ngoài không? Hay cần phương án xác thực khác (email OTP) cho nhóm này? |
| **Lý do cần làm rõ** | Nhà cung cấp SMS nội địa thường không gửi được số quốc tế — cần phương án dự phòng.                                                                                        |
| **Câu trả lời**      | Không áp dụng (xem câu 21).                                                                                                                                                |




### 23. Dịch nội dung bài thi


|                      |                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Nội dung bài thi (do người Việt nộp) có cần dịch sang tiếng Anh để khách quốc tế đọc không — dịch tự động hay do ban tổ chức biên tập? |
| **Lý do cần làm rõ** | Ảnh hưởng khối lượng công việc vận hành nội dung.                                                                                      |
| **Câu trả lời**      | Không áp dụng (xem câu 20).                                                                                                            |


---



## H. Pháp lý và hạ tầng



### 24. Bảo vệ dữ liệu cá nhân


|                      |                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Yêu cầu tuân thủ Nghị định 13/2023/NĐ-CP (bảo vệ dữ liệu cá nhân số điện thoại người dùng) như thế nào? |
| **Lý do cần làm rõ** | Cần trang chính sách bảo mật và cơ chế đồng ý.                                                          |
| **Câu trả lời**      | Hạ tầng kỹ thuật đề xuất xây dựng hợp lý.                                                               |




### 25. Vị trí đặt server


|                      |                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Server đặt ở đâu: của Bộ, thuê ngoài (AWS / GCP / VNPT Cloud), hay yêu cầu đặt tại Việt Nam? |
| **Lý do cần làm rõ** | Ảnh hưởng lựa chọn nhà cung cấp cloud.                                                       |
| **Câu trả lời**      | Hạ tầng kỹ thuật tư vấn.                                                                     |




### 26. Tên miền và chứng chỉ bảo mật


|                      |                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Có yêu cầu tên miền `.gov.vn` hoặc chứng chỉ bảo mật đặc thù của cơ quan nhà nước không? |
| **Lý do cần làm rõ** | Ảnh hưởng quy trình phê duyệt và thời gian triển khai.                                   |
| **Câu trả lời**      | Tên miền Bộ sẽ tự xin.                                                                   |


---



## I. Ngân sách và nền tảng



### 27. Ngân sách và nền tảng sẵn có


|                      |                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Ngân sách dự kiến và có ràng buộc dùng nền tảng sẵn có (WordPress, hệ thống cũ...) không? |
| **Lý do cần làm rõ** | Quyết định xây mới hay tuỳ biến.                                                          |
| **Câu trả lời**      | Hạ tầng kỹ thuật đề xuất. Dự kiến khoảng **50–60 triệu đồng**, bao gồm cả tiền SMS.       |




### 28. Bảo trì sau mỗi mùa giải


|                      |                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| **Câu hỏi**          | Sau mỗi mùa giải, hệ thống có cần bảo trì, nâng cấp định kỳ hàng năm không (SLA, hợp đồng bảo trì)? |
| **Lý do cần làm rõ** | Lên kế hoạch nhân sự vận hành lâu dài.                                                              |
| **Câu trả lời**      | Chưa có kế hoạch.                                                                                   |


---



## Hạng mục đội kỹ thuật cần đề xuất

Khách hàng chưa chốt phương án, nhờ đội kỹ thuật tư vấn:


| STT | Hạng mục                         | Đầu vào đã có                                             |
| --- | -------------------------------- | --------------------------------------------------------- |
| 2   | Hạ tầng chịu tải                 | Tối đa khoảng 100 truy cập đồng thời                      |
| 8   | Nhà cung cấp SMS Brandname       | Chi phí SMS tính trong gói xây website                    |
| 24  | Tuân thủ Nghị định 13/2023/NĐ-CP | Đề xuất mức xây dựng hợp lý (chính sách bảo mật, consent) |
| 25  | Nơi đặt server                   | Bộ chưa chỉ định; cần tư vấn                              |
| 27  | Kiến trúc trong ngân sách        | 50–60 triệu đồng, đã gồm SMS                              |


