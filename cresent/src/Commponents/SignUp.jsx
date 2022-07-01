import React, { useEffect, useState } from 'react'
import  { useSelector,useDispatch } from "react-redux";
import { UserRegister } from '../Redux/Action/Action';
import { Link, useHistory, useLocation } from 'react-router-dom'
import {app} from '../utils/init-firebase'
import { getAuth,createUserWithEmailAndPassword ,signInWithPopup,getRedirectResult, GoogleAuthProvider } from 'firebase/auth';

function SignUp()
{
  const history = useHistory()
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  //google services 
  const signup = (e) =>
    {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((res) =>
        {
            console.log(res);
            setPassword('');
            setEmail('');
            history.push('/admin')
                
        }).catch((e) =>
        {
            alert('Error in sign up',e.message);
        })
    }
  

  //login with google
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
   
    const dispatch = useDispatch();
    const  data = useSelector(state =>state.AuthRegisterReducer);
    const { loading, err, UserInfo } = data;
    useEffect(() =>
    {
        if (UserInfo)
        {
            window.location.replace('/');
        }
    }, [UserInfo]);
  
   //redux login
    const HandleSubmit = (e) =>
    {
        e.preventDefault();
        dispatch(UserRegister(name, email, password));

    }
   //google services
  function google(e)
  {
    e.preventDefault()
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  
  
  
  
    return  <div>
    <div class="bg-soft-success">
      <div class="container content-space-1 content-space-t-md-3">
        <div class="mx-auto"  style={{maxWidth: "30rem"}}>
          <div class="card card-lg zi-2">
            <div class="card-header text-center">
              <h4 class="card-title">Sign Up</h4>
              
            </div>
         
            <div class="card-body">
              <form class="js-validate need-validate" novalidate   onSubmit={HandleSubmit}>
                <div class="d-grid">
                    <button class="btn btn-white btn-lg" onClick={
                      google
                      

                  }>
                    <span class="d-flex justify-content-center align-items-center">
                      <img class="avatar avatar-xss me-2" src="mygoogle.svg" alt="Image Description"/>
                       Continue with Google
                    </span>
                  </button>
                </div>
    
                <span class="divider-center my-4">OR</span>
    
                <div class="mb-4">
                  <label class="form-label" for="loginFormEmail">Your email</label>
                  <input type="email" class="form-control" name="loginFormEmailName" id="loginFormEmail" placeholder="Muhammad Kamran"  value={name}
                onChange={e => setname(e.target.value)}  aria-label="email@site.com" required/>
                  <span class="invalid-feedback">Please enter a valid email address.</span>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="loginFormEmail">Your email</label>
                  <input type="email" class="form-control" name="loginFormEmailName" id="loginFormEmail" placeholder="email@site.com"  value={email}
                onChange={e => setEmail(e.target.value)}  aria-label="email@site.com" required/>
                  <span class="invalid-feedback">Please enter a valid email address.</span>
                </div>
             
                <div class="mb-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label" for="loginFormPassword">Password</label>
                     
      
                  </div>
    
                  <div class="input-group input-group-merge">
                      <input type="password" class="js-toggle-password form-control" name="loginFormPasswordName" id="loginFormPassword" placeholder="8+ characters required" aria-label="8+ characters required" required
                        value={password}
              
                        onChange={e => setPassword(e.target.value)}
                         />
                   
                  </div>
                  <span class="invalid-feedback">Your password is invalid. Please try again.</span>
                </div>
               
                <div class="form-check mb-4">
                  <input type="checkbox" class="form-check-input" id="loginFormRememberMeCheck" name="loginFormRememberMeCheck"/>
                  <label class="form-check-label" for="loginFormRememberMeCheck"> Remember me</label>
                </div>
              
    
                <div class="d-grid mb-4">
                  <button type="submit" class="btn btn-primary btn-lg shadow-lg">Sign Up</button>
                </div>
              </form>
            </div>
          
          </div>
         
        </div>
      </div>
    </div>
    <div class="shape-container">
      <div class="shape shape-bottom zi-1">
        <svg viewBox="0 0 3000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1000V583.723L3000 0V1000H0Z" fill="#fff"/>
        </svg>
      </div>
    </div>
     </div>
}

export default SignUp;



