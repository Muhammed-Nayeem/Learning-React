import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // let Name = "Muhammed Nayeem";
  // const element = <h1>Hello React World!</h1>;

  //Creating an Object:
  let person = {
    Name: "Muhammed Nayeem",
    title: "Student",
    age: 24,
    institute: "Leading University, Sylhet",
    department: "Computer Science and Engineering",
    address: {
      home: "B-Baria,Bangladesh",
      currentCity: "Shahi-EidGah, Sylhet",
    },
  };

  //Creating a Variable and stored some styleSheet in it:
  let style = {
    color: "white",
    backgroundColor: "salmon",
    borderRadius: "3px",
    padding: "15px",
    textAlign: "left",
  };

  //Creating an Object of user name information:
  let user = {
    firstName: "Muhammed",
    lastName: "Nayeem",
  };

  //Creating an arrow-function for format the user name:
  let formatUser = (userInfo) => {
    return `${userInfo.firstName} ${userInfo.lastName}`;
  };

  //Creating an Array of Person Data:
  let Names = [
    "Muhammed Nayeem",
    "Joydip Paul Jishu",
    "Indrajit Chandra Chanda",
    "Crescent Debnath Partha",
  ];

  //Creating an Array of Person Data:
  const nayoks = [
    "Hrittik",
    "Tiger Sharf",
    "Jhon Abraham",
    "Salman Khan",
    "Sahruk Khan",
    "Amir Khan",
    "Saif Ali Khan",
  ];

  //Creating an Array of Products Data:
  const products = [
    { Name: "Photoshop", price: "$60.50" },
    { Name: "Illustrator", price: "$30.40" },
    { Name: "PDF Reader", price: "$10.25" },
    { Name: "Premier AI", price: "$240.30" },
    { Name: "Adobe EI Pro", price: "$350.50" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        {/* <p>Edit done <code>src/App.js</code> and save to reload.</p>? */}
        {/* <p>I am started to learning react.</p> */}
        {/* <h3>Calculation: {(2 + 2) * 4 + 8}</h3> */}
        {/* <h2>My Name Is: {Name}</h2> */}
        {/* {element} */}

        <div className="" style={style}>
          <h4>Name: {person.Name}</h4>
          <p>Title: {person.title}</p>
          <p>Age: {person.age}</p>
          <p>Institute: {person.institute}</p>
          <p style={{ color: "white", backgroundColor: "gray" }}>
            Department: {person.department}
          </p>
          <p>Address: {person.address.currentCity}</p>
          <p>Hello, {formatUser(user)}!</p>
        </div>

        {/* Applying new component: Looks In Similar with dynamic data */}
        <Person
          Name={Names[0]}
          title="Student"
          institute="Leading University"
          id="1712020132"
          email="nayeem08@gmail.com"
        ></Person>

        <Person
          Name="Joydip Paul Jishu"
          title="Student"
          institute="Leading University"
          id="1712020050"
          email="joydip08@gmail.com"
        ></Person>

        <Person
          Name="Indrajit Chandra Chanda"
          title="Student"
          institute="Leading University"
          id="1712020131"
          email="indrajit08@gmail.com"
        ></Person>

        <Person
          Name="Crescent Debnath Partha"
          title="Student"
          institute="Leading University"
          id="1712020048"
          email="partha08@gmail.com"
        ></Person>

        {/* Creating Multiple Component with dynamically */}
        <ul style = {{textAlign: "left"}}>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {products.map((product) => (
            <li>
              {product.Name} {product.price}
            </li>
          ))}
        </ul>

        {/* Applying Counter Component */}
        <Counter></Counter>

        {/* Applying User component */}
        <Users></Users>

        {/* creating products component: similar in looks with different in data */}
        {/* <Product Name = {products[0].Name} price = {products[0].price}></Product> */}
        {/* <ProductCon product={products[0]}></ProductCon>
        <ProductCon product={products[1]}></ProductCon>
        <ProductCon product={products[2]}></ProductCon> */}
        {products.map((pd) => (
          <ProductCon product={pd}></ProductCon>
        ))}
      </header>
    </div>
  );
}

//Create a new Person Component: Looks in similar;
//Different in Data : dynamic data -> need to pass a parameter in defined function:
function Person(props) {
  //Creating StyleSheet Object:
  const personStyle = {
    border: "1px solid salmon",
    margin: "30px",
    padding: "15px",
    textAlign: "left",
    width: "500px",
  };

  return (
    // looks in similar with static data:
    /**
    <div className="person-class" style={personStyle}>
      <h3>Name: Muhammed Nayeem</h3>
      <p>Email: mohammednayeem808@gmail.com</p>
      <p>Institute: Leading University, Sylhet</p>
    </div>
    */

    //Looks in similar with Dynamic Data: Similar in Data
    <div className="person-class" style={personStyle}>
      <h4>Name: {props.Name}</h4>
      <p>Title: {props.title}</p>
      <p>Institute: {props.institute}</p>
      <p>Student Id: {props.id}</p>
      <p>Email:{props.email} </p>
    </div>
  );
}

//Creating a Product component: similar in Looks with different in data:
function ProductCon(props) {
  //Creating StyleSheet:
  const productStyle = {
    border: "1px solid gray",
    backgroundColor: "lightgrey",
    color: "black",
    width: "250px",
    margin: "15px",
    padding: "15px",
    borderRadius: "5px",
    float: "left",
  };

  //Using Destructuring:
  const { Name, price } = props.product;
  // console.log(props);

  return (
    <div className="product-box" style={productStyle}>
      {/* <h3>{props.product.Name}</h3>
      <h4>{props.product.price}</h4> */}
      <h3>{Name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

//Creating Count Component:
function Counter() {
  const [count, setCount] = useState(0);
  //  let handleIncrease = () => setCount(count + 1);
  let handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count">
      <h3>Count: {count} </h3>
      <button id="btn" onClick={handleDecrease}>
        Decrease
      </button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

//Creating Users component:
function Users() {
  const [users, setUser] = useState([]);

  //Data-Loading:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="users-info">
      <h4>Users : {users.length}</h4>
      <ul style = {{textAlign: "left"}}>
        {
          users.map((user) => (
            <li>Name: {user.name}, Email: {user.email}, Phone: {user.phone}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default App;
