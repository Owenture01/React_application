import React, {useState} from 'react'   // to allow our web app to store the parameter or input
import TodoList from './TodoList'
import styled from 'styled-components'

// to style the input section --> can replace 'input' tag with 'Input'
const Input = styled.input`

 height: 15px;
 margin: 15px;
 border-radius: 5rem;
 border-style: solid;
 borer-color: #eeeeee;
 box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
 padding: 15px;
 font-size: large;

`

// to style the button section --> can replace 'button' tag with 'Button'
const Button = styled.button`

padding: 15px;
background-color: #4CAF50;
color: white;
font-size: medium;
border-style: none;
border-radius: 15rem;
box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
outline: none;

&: active{
  background-color: #4CAF40;
}

`


function App() {

  // first argument is a variable, while the second arg is a function  to set that variable
  // this will allow thed state or item on the web app to dynamically change as long as it is related to the "todolist" state
  const [todoList, setTodoList] = useState(["task 1"])   // string array
  const [text, setText] = useState("Enter your input here")

  const onTextChange = ({target : {value}}) =>{

    console.log(value);
    setText(value)

  } 

  // add elements into array --> link to the onClick under the button
  const addTask = () => {

    setTodoList([
      ...todoList,
      text
    ])

    // clear text after adding the element into the todoList array
    setText("")

  }

  const removeTodo = (index) =>{

    console.log(index);

    let todo = [...todoList]

    todo.splice(index, 1)
    setTodoList(todo)

  }



  return (
    <div>
      <div>
        <Input type="text" value = {text} onChange = { onTextChange }/>
        <Button onClick={addTask}> Click here to add task</Button>
      </div>

      <TodoList todoList = {todoList} removeTodo = {removeTodo} />

    </div>
  );
}

export default App;
