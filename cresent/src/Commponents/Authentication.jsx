import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import {myapp} from "../config";
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
function Authentication()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory()  
  function signIn(e)
  {
    e.preventDefault()
    const auth = getAuth(myapp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push('/')
        // ...
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      });
  }

  
    return (
<div>
<div class="bg-soft-success">
  {
    error && <div class="alert alert-danger" role="alert">{error}</div>
  }
      <div class="container content-space-1 content-space-t-md-3">
        <div class="mx-auto"  style={{maxWidth: "30rem"}}>
          <div class="card card-lg zi-2">
            <div class="card-header text-center">
              <h4 class="card-title">Login to Crestex Admin Pannel</h4>
            </div>   
            <div class="card-body">
              <form class="js-validate need-validate" novalidate >            
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
                  <Link to='/reset'>
                     Forget Password?
                    </Link> 
      
                </div>
              
    
                <div class="d-grid mb-4">
                  <button onClick={signIn}  class="btn btn-primary btn-lg shadow-lg">login in</button>
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
    )
}

export default Authentication
