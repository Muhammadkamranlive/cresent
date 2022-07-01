import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {myapp} from "../../ConfigurationFirebase/firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useHistory} from 'react-router-dom';
function Login()
{
  const [passwordShown, setPasswordShown] = useState(false);
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [error,seterror]=useState('');
  const [loading,setloading]=useState(false);
  const togglePassword = () => { 
    setPasswordShown(!passwordShown);
  };
  const histroy=useHistory();
  const auth=getAuth(myapp);
  const login = (e) =>
  {

    e.preventDefault();
    setloading(true);
    signInWithEmailAndPassword(auth,email,password).then((user)=>{
      setloading(false);
      histroy.push('/');
    }).catch((error)=>{
      seterror(error.message);
      setloading(false);
    })  
  }
  return (
    <main id="content" role="main" class="main py-5" >
    <div class="position-fixed top-0 end-0 start-0 bg-img-start bg-gradient" style={{ height: "32rem" }}>
     
      <div class="shape shape-bottom zi-1">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
          <polygon fill="#fff" points="0,198 1921,273 1921,0 " />
        </svg>
      </div>
    
    </div>

  
    <div class="container py-5 py-sm-7">
     

    <div class="mx-auto" style={{ maxWidth: "30rem" }}>

          <div class="card card-lg mb-5">
          
          <div class="card-body">
          <div className="display-6 text-dark text-center">
              Login Page
            </div>
            {
              loading?<div className='text-center'><div class="spinner-grow" style={{width:"200px",height:"200px"}} role="status">
              <span class="visually-hidden">Loading...</span>
            </div></div>
              :
              <form onSubmit={login} >
              <div class="text-center">
                <div class="mb-5">
                  <h1 class="display-5">Sign in</h1>
                  {
                    error?<div className='alert alert-danger'>{error.slice(9)}</div>:null
                  }
                  <p>Don't have an account yet? <Link  class="link" to="/register">Sign up here</Link></p>
                </div>

                

                <span class="divider-center text-muted mb-4">OR</span>
              </div>

        
              <div class="mb-4">
                <label class="form-label" for="signinSrEmail">Your email</label>
                <input type="email" class="form-control form-control-lg" name="email" id="signinSrEmail" tabindex="1" placeholder="email@address.com" aria-label="email@address.com" required value={email} onChange={(e)=>setemail(e.target.value)} />
                <span class="invalid-feedback">Please enter a valid email address.</span>
              </div>
           
              <div class="mb-4">
                <label class="form-label w-100" for="signupSrPassword" tabindex="0">
                  <span class="d-flex justify-content-between align-items-center">
                    <span>Password</span>
                    <Link class="form-label-link mb-0" to="/reset">Forgot Password?</Link>
                  </span>
                </label>

                <div class="input-group input-group-merge" data-hs-validation-validate-class>
                  <input type={passwordShown ? "text" : "password"} class="js-toggle-password form-control form-control-lg" name="password"  placeholder="8+ characters required" aria-label="8+ characters required" required minLength='8' value={password} onChange={(e)=>setpassword(e.target.value)} />
                  <button class="input-group-append input-group-text" >
                    <i id="changePassIcon" onClick={togglePassword}  class="fa fa-eye"></i>
                  </button>
                </div>

                <span class="invalid-feedback">Please enter a valid password.</span>
              </div>
              
              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" value="" id="termsCheckbox" />
                <label class="form-check-label" for="termsCheckbox">
                  Remember me
                </label>
              </div>
            

              <div class="d-grid">
                <button   type="submit" class="btn btn-primary btn-lg">Sign in</button>
              </div>
            </form>
            }
            
          </div>
        </div>
       
       
     
      </div>
    </div>

  </main>
  )
}

export default Login