import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import Home from './Home';
import styled from 'styled-components';

// Styled components for input and button
const Input = styled.input`
  height: 15px;
  margin: 15px;
  border-radius: 5rem;
  border-style: solid;
  border-color: #eeeeee;
  box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
  padding: 15px;
  font-size: large;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  font-size: medium;
  border-style: none;
  border-radius: 15rem;
  box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
  outline: none;

  &:active {
    background-color: #4CAF40;
  }
`;

function App() {
  const [todoList, setTodoList] = useState(["task 1"]); // string array
  const [text, setText] = useState("Enter your input here");

  const onTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const addTask = () => {
    setTodoList([
      ...todoList,
      text
    ]);
    setText("");
  };

  const removeTodo = (index) => {
    let todo = [...todoList];
    todo.splice(index, 1);
    setTodoList(todo);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={
            <div>
              <div>
                <Input type="text" value={text} onChange={onTextChange} />
                <Button onClick={addTask}>Click here to add task</Button>
              </div>
              <TodoList todoList={todoList} removeTodo={removeTodo} />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
