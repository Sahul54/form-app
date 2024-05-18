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
    isVisiable: false,
    mode: "",
    favCar: ""

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

  function submitHandler(event) {
    event.preventDefault();
    // print data
    console.log("Finally printing the fiil data....");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
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
      checked={formData.isVisiable}
      ></input>
      <label htmlFor="isVisiable">AM, I Visiable</label>
      <br/><br/>

      
      <fieldset>
        <legend>Mode:</legend>
        <input
      type="radio"
      onChange={changeHandler}
      name="mode"
      checked={formData.mode === "online-mode"}
      value="online-mode"
      id="online-mode"
      ></input>
      <label htmlFor="online-mode">Online-mode</label>
     
        <input
      type="radio"
      onChange={changeHandler}
      name="mode"
      checked={formData.mode === "Offline-mode"}
      value="Offnline-mode"
      id="Offnline-mode"
      ></input>
      <label htmlFor="Offnline-mode">Offline-mode</label>
      </fieldset>
      <br/><br/>

      <label htmlFor="favCar"> Your favourite Car </label>
      <select
      onChange={changeHandler}
      name="favCar"
      id="favCar"
      value={formData.favCar}
      >
        <option>Audi</option>
        <option>BMW</option>
        <option>Farari</option>
        <option>Tesla</option>
      </select>
     
      {/* <input type="submit" value="submit"></input>      */}
       <br/><br/>
       <button >Submit</button> 
      </form>

    </div>
  );
}

export default App;
