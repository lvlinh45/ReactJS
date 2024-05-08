# Note các kiến thức liên quan

## JSX

- JSX: javascript XML => Là 1 định dạng cho viết HTML trong react, sẽ convert sang reactElement

- Khi sử dụng JSX trong react giúp ta viết code dễ dàng hơn

- Tại sao dùng JSX mà không dùng react element? => Vì JSX dễ hiểu, dễ tiếp cận, react element cú pháp viết dài nếu có nhiều phần tử lồng nhau

- ES5 hỗ trợ trình duyệt cũ. Tới ES6 1 số thứ mới không còn được hỗ trợ như Arrow function,... thì làm sao trình duyệt cũ hiểu được => dùng BABEL

- Babel giúp compile code => giúp compile ra các version cũ hơn để các trình duyệt cũ hiểu được
- Dùng biến trong JSX dùng dấu curly braces {}
  => Viết theo JSX, sau đó nó sẽ tự build ra theo kiểu React Element

## Components

- Components cho phép chia nhỏ UI dưới dạng nhiều Thành phần khác nhau để có thể tái sử dụng
- function App() => là functional components, components chữ cái đầu lúc nào cũng in hoa
- Trong component return về JSX

## props

- props -> là viết tắt của property, là những thuộc tính bên trong components đó
- Nếu props không được gọi trong components thì nó sẽ không được hiển thị

# 2 cách styles cơ bản trong React

- Cách 1: Inline style: Dùng attribute style ={{ width: 100px }}
  Lưu ý: Theo cú pháp camel case, dấu ngoặc nhọn thứ nhất là JSX, thứ 2 là object
- Cách 2: Dùng class, viết ra file riêng. Nhớ import file CSS vào file cần dùng
