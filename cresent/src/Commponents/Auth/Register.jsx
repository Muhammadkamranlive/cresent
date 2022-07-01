import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import {createUserWithEmailAndPassword, getAuth,updateProfile} from 'firebase/auth';
import {db,storage} from "../../config";
import { doc, setDoc} from "firebase/firestore"; 

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';

function Register()
{
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => { 
    setPasswordShown(!passwordShown);
  };

  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');
  const [file, setFile]=useState(null);
  const [userType,setUserType]=useState('admin');
  const [url,setUrl]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  const [success,setSuccess]=useState('');
  const [percentage,setPercentage]=useState(0);
  const history=useHistory();

  const auth=getAuth();
  const handleImage=(e)=>{
    if(e.target.files[0]){
      setFile(e.target.files[0]);
    }
  }

  
  const uploadImage=()=>{
    setLoading(true);
    const fileName=new Date().getTime()+file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
    (snapshot) => {
      
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setPercentage(progress);
      switch (snapshot.state) {
        case 'paused':
          setSuccess('Upload is paused');
          break;
        case 'running':
          setSuccess('Upload is running');
          break;
        default:
          break;
      }
    }, 
    (error) => {
      setError(error.message);
      setLoading(false);
    }, 
    () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);
        setLoading(false);
      });
    }
   );
    }
   const Register=async(e)=>{
     e.preventDefault();
      setLoading(true);
      axios.get('http://localhost:5000/findemail',{
        headers:{
          'email':email
        }
      }).then(res=>{
      setSuccess(res.data.message);
      createUserWithEmailAndPassword(auth,email,password).then((user)=>{
       if(user!=null){
        
         try {
                   
                   updateProfile(auth.currentUser,{
                   displayName:userType,
                   photoURL: url,
                   
 
                 }).then(()=>{  
                   setSuccess('User Created Successfully');
                   setLoading(false);
                   
                 }).catch((error)=>{
                   setLoading(false);
                   setError(error.message);
                 });
                 
                setLoading(false);
                setSuccess('Registered Successfully');
                history.push('/');
         }
         catch(err){
             setError(err.response.data.message)
         }
       }
     }).catch((error)=>{
       setError(error.response.data.message);
       setLoading(false);
     })
     }).catch(err=>{
        setError(err);
        setLoading(false);
     });
    
        
     
    }

 
 

  return (
    <main id="content" role="main" class="main">
    <div class="position-fixed top-0 end-0 start-0 bg-img-start bg-gradient" style={{ height: "32rem" }}>
     
      <div class="shape shape-bottom zi-1">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
          <polygon fill="#fff" points="0,198 1921,273 1921,0 " />
        </svg>
      </div>
    
    </div>

  
    <div class="container py-5 py-sm-7">
    <div class="mx-auto py-5" style={{ maxWidth: "50rem" }}>
        <div class="card card-lg mb-5">
          <div class="card-body">
              <div className="text-center display-6 text-dark">
                Sign Up
             </div>
             {
                error&&<div className="alert alert-danger">{error}</div>
             }
             {
                success&&<div className="alert alert-success">{success}</div>
             }
           {
            loading?
            <>
               <div className="text-center">
               <div class="spinner-border" style={{width:"10rem",height:"10rem"}} role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
               </div>
            </>
            : <form onSubmit={Register}>
            <div class="text-center">
              <div class="mb-5">
                
                {
                  error?<div className="alert alert-danger">{error}</div>:null
                }
                <p>Already have account? <Link to='/login' class="link" >Sign In here</Link></p>
              </div>

                       
        
              <span class="divider-center text-muted mb-4">OR</span>
            </div>
            <label class="form-label " for="file">Your Pofile Pic</label>
            <div class="mb-4 d-flex justify-content-between">
            
            <input type="file" class="form-control form-control-lg" name="file" id="file" tabindex="1" placeholder="Choose file"    onChange={handleImage}   />
            <button onClick={uploadImage} className="btn btn-primary mx-2">Upload</button>
            </div>
             {
              percentage?<div className="alert alert-success mt-4">{percentage+"% Upload done"}</div>:null

             }
            
            
            
           
            <div class="mb-4">
              <label class="form-label" for="Email">Your email</label>
              <input type="email" class="form-control form-control-lg" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} tabindex="1" placeholder="email@address.com" aria-label="email@address.com" required />

            </div>
         
            <div class="mb-4">
              <label class="form-label w-100" for="password" tabindex="0">
                <span class="d-flex justify-content-between align-items-center">
                  <span>Password</span>
                
                </span>
              </label>

              <div class="input-group input-group-merge" data-hs-validation-validate-class>
                <input type={passwordShown ? "text" : "password"} class="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minlength="8" value={password}  onChange={(e)=>setPassword(e.target.value)}  />
                <a id="changePassTarget" class="input-group-append input-group-text" href='#' >
                  <i id="changePassIcon" onClick={togglePassword} class="fa fa-eye"></i>
                </a>
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
              <button  disabled={loading?true:false}  type="submit" class="btn btn-primary btn-lg">Sign Up</button>
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

export default Register