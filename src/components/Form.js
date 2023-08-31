import {useState} from "react";
export default function Form({handleAddUser}) {
    const [newUserName, setNewUserName] = useState("");
    const [newUserAge, setNewUserAge] = useState(0);

    const addUser = (e)=> {
    e.preventDefault();
    const newUser = {id: new Date().getTime(), name: newUserName, age: newUserAge};
    handleAddUser(newUser);
  }
  const handleUserNameInput = (e) => {
    setNewUserName(e.target.value);
  }
  const handleUserAgeInput = (e) => {
    setNewUserAge(e.target.value);
  }
    return (
    <form action="submit" onSubmit={addUser}>
    <input   type="text" placeholder="Name" name={"user_name"} onChange={handleUserNameInput} value={newUserName}/><br/>
    <input type="number" placeholder="Age" name="user_age" onChange={handleUserAgeInput} value={newUserAge}/><br/>
    <button type="submit">Ajouter</button>
  </form>)
}