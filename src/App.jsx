import Counter from "./components/advaced-react/state-reducer/Counter";
import useCounter from "./components/advaced-react/state-reducer/useCounter";
import FirebaseApp from "./firebase/FirebaseApp";

const App = () => {
  // const { count, handleIncrement, handleDecrement } = useCounter();
  /* <div>
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter>
      ;
    </div> */
  return (
    <div>
      <FirebaseApp></FirebaseApp>
    </div>
  );
};

export default App;
