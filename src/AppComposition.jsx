import { useState } from "react";
import FetchingData from "./components/advaced-react/hoc/FetchingData";
import Accordion from "./components/advaced-react/react-composition/Accordion";
import Editable from "./components/advaced-react/react-composition/Editable";
import Input from "./components/advaced-react/render-props/HandleValue";
import HandleValue from "./components/advaced-react/render-props/HandleValue";
import Title from "./components/advaced-react/render-props/Title";

// HOC = High order component pattern: chia sẻ logic từ 1 component mà không cần phải viết lại
// render props: gioongs formik

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return { on, toggle };
}



const App = () => {
  return (
    {/* <div className="w-full p-10 max-w-[600px] mx-auto"> */}
      {/* <FetchingData></FetchingData> */}
      {/*  <Title>{() => <h1>Hello from render props</h1>}</Title> */}
      {/* <HandleValue></HandleValue> */}
      {/*  <Accordion header="Can I change my plan later">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati
          autem inventore, perferendis perspiciatis ipsam beatae natus sapiente
          assumenda quo molestias maxime impedit ipsa libero rerum fuga quas,
          voluptatem in.
        </div>
      </Accordion>
      <Accordion header="Can I become a front-end developer">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati
          autem inventore, perferendis perspiciatis ipsam beatae natus sapiente
          assumenda quo molestias maxime impedit ipsa libero rerum fuga quas,
          voluptatem in.
        </div>
      </Accordion> */}
      {/* <Editable></Editable> */}
// </div>
  div
  );
};

export default App;
