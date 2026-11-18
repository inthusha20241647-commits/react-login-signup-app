import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter,Link} from 'react-router-dom';
import Login  from './Login';
import SignUp from './SignUp';
import  './index.css'
import Landing from './Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){

   const [users,setUsers]=useState([
        {
            username:"Inthusha",
            password:"123"
        }
    ]);
  return(

  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
  <Route path='/signUp' element={<SignUp users={users} setUsers={setUsers}/>}></Route>
  <Route path='/landing' element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>

  )
}

root.render(
  <App/>
);



