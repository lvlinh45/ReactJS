import { Fragment } from "react";
import { CountProvider, useCount } from "./contexts/countContext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";
import PhotoList from "./components/gallery/PhotoList";
import CartList from "./components/gallery/CartList";

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
  return {
    /* <Fragment>
        <div className="flex items-center justify-center p-5 gap-x-5">
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider> 
        </div>
     
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment> */
  };
};

export default App;
