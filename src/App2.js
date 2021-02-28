import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App2() {
  //Person Names:
  const personInfo = [
   {Name: "Muhammed Nayeem", title: "Student", age: 24, institute: "Leading University", department: "Computer Science and Engineering", id: "1712020132", email: "nayeem07@gmail.com"},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React Development</h3>

        {/* Applying Persons information component */}
        <Persons info = {personInfo[0]}></Persons>

        {/* Applying Counter Component */}
        <Counter></Counter>

      </header>
    </div>
  );
}

//Creating Component: Similar in Looks with Different in Data
function Persons(props) {
  //Creating StyleSheet:
  const personStyle = {
    border: "1px solid salmon",
    margin: "15px",
    padding: "30px",
    width: "600px",
    textAlign: "left",
  };

  // console.log(props.info.Name);
  //Object Destructuring:
  const {Name, title, age, institute, department, id, email} = props.info;

  return (
    <div className="person-class" style = {personStyle}>
      <h4>Name: {Name}</h4>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Institute: {institute}</p>
      <p>Department: {department}</p>
      <p>Id: {id}</p>
      <p>Email: {email}</p>
    </div>
  );
}

//Counter Component:
function Counter() {
  const [count, setCount] = useState(10);
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-class">
      <h3>Count: {count}</h3>
      <button onClick = {handleDecrease}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App2;
