import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [value, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const type = e.target.type;
    setValues({
      ...value,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    value,
    handleChange,
  };
}
