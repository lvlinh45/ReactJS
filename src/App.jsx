import { CountProvider, useCount } from "./contexts/countContext";

function CountDisplay() {
  const [count] = useCount();
  // console.log("TCL: CountDisplay -> context", context);.
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  // const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
    >
      Increment count
    </button>
  );
}

const App = () => {
  // app() -> header -> menu -> user -> profile
  // truyền prop thông qua nhiều component xảy ra vấn đề gọi là Props Driling
  // có cách truyền từ app(status: false) -> Profile: context
  return (
    <div className="flex items-center justify-center p-5 gap-x-5">
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
};

export default App;
