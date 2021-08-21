import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log("change");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    callback();
    window.location = "/main";
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
