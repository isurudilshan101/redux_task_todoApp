import React from "react";
import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";
import ShowTodo from "./showTodo";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function TodoForm() {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();

  //const [todo, setTodo] = React.useState([]);

  // const addValue = (data) => {
  //   todo.push(data);
  //   console.log(todo);
  // };

  // const handleButtonClick = (e) => {
  //   console.log("clicked");
  //   e.preventDefault();
  //   if (!value) return alert("please enter todo");

  //   addValue(value);
  //   setValue("");
  //   // setTodo(value);
  //   console.log(value);
  // };

  const handleButtonClick = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!value) return alert("please enter todo");
    console.log(value);

    dispatch(addTodo(value));

    setValue("");
  };

  // const onSubmit=(e)=>{
  //     e.preventDefault();

  //     dispatch(
  //       addTodo({title:value,

  //       })
  //     )
  // }

  return (
    <div className="container">
      <form>
        <h1>ADD TODO</h1>
        <div className="addTodo">
          <Input
            placeholder="Enter your Todos"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button onClick={handleButtonClick} type="primary">
            ADD
          </Button>
        </div>
      </form>
      {/* <ShowTodo list={todo} /> */}
    </div>
  );
}
