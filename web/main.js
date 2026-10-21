// ===== 1. Biến và kiểu dữ liệu =====
const userName = "Newbie";     // const: không gán lại được
let age = 20;               // let: có thể gán lại
age = age + 1;
console.log("Xin chào", userName, "- tuổi:", age);

// ===== 2. Hàm =====
function add(a, b) {
  return a + b;
}
console.log("2 + 3 =", add(2, 3));

// ===== 3. Mảng và vòng lặp =====
const fruits = ["táo", "cam", "xoài"];
for (const fruit of fruits) {
  console.log("Trái cây:", fruit);
}

// ===== 4. Thao tác với HTML (DOM) =====
const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const value = input.value.trim();
  output.textContent = value ? `Xin chào, ${value}!` : "Bạn chưa nhập tên.";
});

// ===== BÀI TẬP (tự làm bên dưới) =====
// 1. Viết hàm kiểm tra số chẵn/lẻ rồi in ra console.
// 2. Viết hàm tính tổng các phần tử trong mảng [1, 2, 3, 4, 5].
// 3. Khi bấm nút, đổi màu nền của #output.

const config = {
    db: {
        host: "localhost",
        port: 27107,
        name: "booking"
    }
};

console.log(config.db.host)
console.log(config.db.port)
console.log(config.db.name)

config.db.name = "quang"
console.log(config.db.name)

