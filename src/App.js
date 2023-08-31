import {useState } from 'react';
import User from "./components/User";
import Form from "./components/Form";
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Robin', age: 28 },
    { id: 2, name: 'Markus', age: 29 },
    { id: 3, name: 'John', age: 26}
  ]);

  const handleAddUser = (user) => {
    const usersCopy = [...users];
    usersCopy.push(user);
    setUsers(usersCopy);
  }

  const removeUser = (id) => {
    const usersCopy = [...users];
    setUsers(usersCopy.filter(user => user.id !== id))
  }
  
 return (
 <>
  <ul>{
    users.map(user =>
      <User user={user} onClick={()=> removeUser(user.id)} key={user.id}/>
    )}
  </ul>
  <Form handleAddUser={handleAddUser}/>
    </>);
 
}

export default App;

//Gestion du formulaire
// 1. création du formulaire
// 2. soumission du formulaire
// 3. récupération des données du formulaire
