import "./UserInput.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values)."
      })
      return;

    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (>0)."
      })
      return;
    }
    props.sendUser(details);
    setName("");
    setAge("");
  };
  const details = {
    name: name,
    age: age,
    id: Math.random(),
  };

   const cancelError  = ()=>{
     setError(null)
   }
  return (
    <>
    {error && 
      <ErrorModal onCancelError={cancelError} title={error.title } message={error.message} />}
    
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="contain">
          <label htmlFor="name">Username</label>
          <input
            id="name"
            value={name}
            type="text"
            onChange={handleNameChange}
            value={name}
            placeholder="Your Name"
          />
        </div>
        <div className="contain">
          <label htmlFor="age">Age</label>

          <input
            id="age"
            type="number"
            value={age}
            onChange={handleAgeChange}
            value={age}
            placeholder="Your Age"
          />
        </div>
        <Button type="submit" text={"Add user"} ></Button>
      </form>
    </Card>
    </>
  );
};

export default UserInput;
