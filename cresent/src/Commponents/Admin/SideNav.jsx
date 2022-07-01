import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
function SideNav({title,Dashbaord,add,up,view,detail}) {

const auth = getAuth();
const history = useHistory();

const logout = (e) => {
       e.preventDefault();
     signOut(auth).then(() => {
      localStorage.clear();
    
      history.push('/login');
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
    return <div>
               <div class="d-flex  ">
                <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            
                             <a href="/admin" className={`navbutton mb-3  mt-5 ${Dashbaord}`}> <i className="fa fa-th-large "></i> Dashboard</a>
                             {
                               detail ? <a href="#" className={`navbutton mb-3  ${detail}`} > <i className="fa fa-info-circle "></i> Detail</a> : null
                              }
                             <a href="/client-search" className={`navbutton mb-3  ${title}`}  > 

                             <i class="fa fa-search px-2"></i>Image based Search</a>
                             <a href="/addemp" className={`navbutton mb-3  ${add}`} > 
                             
                             <i class="fa fa-plus px-2"></i>Add New</a>
                            <a class={`navbutton mb-3  ${up}`} href="/updateAlldoc"><i class="fa fa-pencil px-2"></i> Update</a>
                            <a href="/viewall" className={`navbutton mb-3  ${view}`} > <i class="fa fa-eye"></i> View All</a>
                            <button href="/" className='btn btn-primary' onClick={logout} > <i className="fa fa-lock "></i> Logout</button>
                           
                       
                        </div>
               
                </div>
  </div>;
}

export default SideNav;
