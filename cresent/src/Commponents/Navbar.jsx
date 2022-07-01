import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
export default function Navbar() {
const user = useSelector((state) => state.user.value);
const auth = getAuth();
const logout = (e) => {
       e.preventDefault();
      signOut(auth).then(() => {
      localStorage.removeItem('persist:root');
      window.location.href = '/login';
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

  return (
        <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
      <img src="Logo-2.png" alt="" className='img-fluid' style={{width:"200px"}} />
     </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          
      <ul class="navbar-nav  ">
       <li class="nav-divider"></li>
       {
          user  && user.displayName==='employee'?<li className='nav-item'>
          <Link to='/employee' className='nav-link'>Employee</Link>
          </li>
          :<li className='nav-item'>
          <Link to='/admin' className='nav-link'>Dashboard</Link>
          </li>
       }
       {
          user ?  <>
           <li class="nav-item d-flex">
           <span class="badge bg-primary pt-3">Looged In as:{user.displayName}</span>
           <span class="avatar avatar  avatar-circle">
           <img class="avatar-img" src={user.photoURL} key={user.photoURL} />
          </span>
        </li>
        
          <li class="nav-item">
          <button  class="btn btn-primary"  type='buitton' onClick={logout}> <i class="fas fa-user-clock"></i> Logout</button>
        </li>
       
          </> : 
        <>
        <li class="nav-item">
        <Link to="/register" class="nav-link">Sign Up</Link></li>
         <li class="nav-item">
        <Link to="/login" class="btn btn-primary">Login</Link></li>
        
        </>
       }
       
      </ul>
     
    </div>
  </div>
     </nav>
        </div>
    )
}
