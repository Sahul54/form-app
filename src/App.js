import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function chamgeLastName(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }
  // ===========sab k liye ek ek kr k banayegn kya nhi isk jaha k object use kr lenge

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false

  });

  //console.log(formData.email); 
  console.log(formData);

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        [name] : type === "checkbox" ? checked : value
      };
    });
  }

  return (
    <div className="App">
      <input
        onChange={changeHandler}
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
      ></input>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="First Name"
        name="lastName"
        value={formData.lastName}
      ></input>
      <input 
      onChange={changeHandler}
      type="email" 
      placeholder="email" 
      name="email"
      value={formData.email}
      ></input>
      <br>
      </br>

      <textarea
      onChange={changeHandler}
      placeholder="Enter your comments" 
      name="comments"
      value={formData.comments}
      ></textarea>

      <br/><br/>
      <input 
      type="checkbox"
      onChange={changeHandler}
      name="isVisiable"
      id="isVisiable"
      checked={formData.isVisible}
      ></input>
      <label htmlFor="isVisiable">AM, I Visiable</label>
    </div>
  );
}

export default App;
