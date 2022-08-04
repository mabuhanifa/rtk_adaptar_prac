import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";
const AddToDo = () => {
  const dispatch = useDispatch();
  const {entities} = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  console.log(entities);
  const submit = () => {
    dispatch(
      addTodo({
        id: nanoid(),
        todo: text,
        completed: false,
      })
    );
  };
  return (
    <div style={{ margin: "50px" }}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddToDo;
