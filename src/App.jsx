import { useEffect,useState } from 'react';
import './App.css'
import { NavLink,Routes,Route } from 'react-router';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserUpdate from './UserUpdate';

function App() {

  
  return (
    <>
       <ul className='flex w-full bg-blue-500 justify-around'>
        <NavLink to='/users'><li>Users</li></NavLink>
        <NavLink to='/addUser'><li>Add User</li></NavLink>
       </ul>


       <Routes>
        <Route path='/users' element={< UserList/>} />
        <Route path='/addUser' element={< UserAdd/>} />
        <Route path='/edit/:id' element={< UserUpdate/>} />
       </Routes>
    </>
  )
}

export default App