# Note các kiến thức liên quan

## CHƯƠNG 2

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

## 2 cách styles cơ bản trong React

- Cách 1: Inline style: Dùng attribute style ={{ width: 100px }}
  Lưu ý: Theo cú pháp camel case, dấu ngoặc nhọn thứ nhất là JSX, thứ 2 là object
- Cách 2: Dùng class, viết ra file riêng. Nhớ import file CSS vào file cần dùng

## children: là props đặc biệt

### Chương 2 chúng ta đã học được những gì ?

1. Cài đặt được create-react-app(CRA)
2. Biết được JSX là gì và sử dụng nó trong React
3. Biết được thế nào là components và thay đổi các giá trị cho từng components khác nhau với props
4. Biết cách styling cơ bản trong React
5. Biết cách sử dụng kỹ thuật rendering list cơ bản
6. Hiểu được về props đặc biệt là children

## CHƯƠNG 3

1. State là gì? => Là thông tin được lưu bên trong component đó, tức là component có thể tùy chỉnh thông tin đó. Dùng state bên trong functional Component, để sử dụng state dùng 1 hook tên là useState

- React hook là 1 tính năng trong React cho phép sử dụng state và các tính năng khác của React mà không sử dụng class
- Dùng hook thì phải dùng trong Function Componet

- Stateless fuctional Component: Là function component nhưng không sử dụng state
- Statefull fuctional Component:Là function component co sử dụng state

- Khi state change(thay đổi) thì component sẽ re-render lại => Để cập nhật lại DOM ra bên ngoài

* Các bước dùng state

a. Enabling state: useState(initialize value) => initialize value có thể truyền boolean, number, string, undefined, null, {title: "FE DEv"}
b. initialize state: Giá trị khởi tạo => useState (false)
c. reading state
d. updating state

2. Những nguyên tắc khi sử dụng hook cần nắm

- Dùng hook ở trên cùng của component, không dùng trong vòng lặp, function
- Array(9).fill() => Tạo ra các mảng giống nhau 1 cách nhanh nhất

- Object Destructuring

  const student = {
  name: 'evondev',
  age: 28
  }

=> const {name,age} = student;

Note:

- prop không thay đổi, nhận từ component cha truyền xuống, có gì render cái đấy => hết
- Thay đổi theo thời gian => Dùng state có thể thay đổi được.

# useEffect

- Xử lý các vấn đề liên quan đến side-effect: tức là bên trong function nhưng tác động ra bên ngoài

# useRef

- Khi useState thay đổi => Component rerender
- Ref thay đổi => không rerender
