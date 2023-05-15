import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList'
import './App.css'

const App = (props) => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, college:uCollege, id: Math.random().toString() }]
    })
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  )
}

export default App;
