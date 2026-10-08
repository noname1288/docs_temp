# Trang chi tiết bài — mẫu WeChoice

Nguồn: https://wechoice.vn/chi-tiet-de-cu/nhan-vat-truyen-cam-hung-1/cau-thu-doi-tuyen-u23-viet-nam-dinh-bac-119.htm

Trang công khai là bài dài. Form CMS tạo đúng các khối dưới đây. Header, footer, số phiếu, nút bình chọn, chia sẻ là chrome của site — không có ô nhập.

## Trang công khai

Từ trên xuống:

1. **Hero** — ảnh bìa full màn. Chữ đè: nhãn tỉnh/thành, H1 tên điểm đến, sapo, nút Bình chọn + số phiếu.
2. **Video** — 1 video, tự phát. Dưới video một dòng đơn vị thực hiện (nếu có).
3. **Thanh cố định đáy** — 3 ô: Tên đề cử | Tỉnh/thành | Lượt bình chọn. Cùng cụm có Chia sẻ và Copy link.
4. **Thân bài** — nhãn “Bài viết”, tiêu đề bài, sapo lặp lại, rồi các chương.

Mỗi chương là 2 cột (desktop):

| Trái ~50% | Phải ~50% |
| --- | --- |
| H2 (chương đầu không có H2) | 1 ảnh dọc, `position: sticky` trong khi đọc chương |
| Đoạn văn, ảnh ngang chèn, trích dẫn — đúng thứ tự CMS | |

Trích dẫn: câu nói cỡ lớn, tên người nói nhỏ bên dưới, thanh dọc bên trái.

Giữa hai chương: 1 ảnh ngang, tràn hết cột trái. Mobile: xếp ảnh cột xuống dưới chữ của chương đó. Thanh đáy giữ cố định.

## Form CMS

Tạo và sửa dùng chung field. Mùa giải hệ thống gán, không có trên form.

### A. Thẻ bài

| Field | Bắt buộc | Gắn UI |
| --- | --- | --- |
| `name` Tên điểm đến | Có | H1 hero + ô trái thanh đáy |
| `province` Tỉnh/thành | Có, select | Nhãn trên hero + ô giữa thanh đáy + filter danh sách |
| `locality` Xã/phường, huyện/quận | Có | Dòng phụ dưới tên (danh sách và chi tiết) |
| `sapo` | Có, ≤ 400 ký tự | Dưới H1; lặp dưới tiêu đề bài |
| `coverImage` | Có, 1 ảnh ngang | Hero |
| `cardImage` | Có, 1 ảnh | Thẻ trang danh sách |

### B. Mở bài

| Field | Bắt buộc | Gắn UI |
| --- | --- | --- |
| `video` | Có, đúng 1 file | Khối video, `autoplay` |
| `credit` Đơn vị thực hiện | Không, 1 dòng | Dòng dưới video |

### C. Thân bài

| Field | Bắt buộc | Gắn UI |
| --- | --- | --- |
| `articleTitle` | Có | Đầu cột trái |
| `sections[]` | 1–8, sắp xếp được | Mỗi phần tử = 1 chương |

Mỗi `section`:

| Field | Bắt buộc | Gắn UI |
| --- | --- | --- |
| `heading` | Không. Chương đầu để trống | H2 cột trái |
| `sideImage` | Có, 1 ảnh dọc | Cột phải, sticky |
| `blocks[]` | ≥ 1, sắp xếp được | Cột trái, theo thứ tự |
| `dividerImage` | Không, tối đa 1 | Ảnh ngang giữa chương này và chương sau |

`blocks[]` có 3 type:

| `type` | Field |
| --- | --- |
| `paragraph` | `text` |
| `image` | `src`, `caption` (để trống thì không render chú thích) |
| `quote` | `text`, `author` |

Tổng chữ thân bài ≤ 12.000 ký tự. Mỗi chương ≤ 6 `image` và ≤ 3 `quote`.

## FE không tự tính

Số phiếu lấy từ API và thay cả số đang hiện. Chia sẻ mở Facebook / Zalo kèm URL bài; copy link copy URL đó.
