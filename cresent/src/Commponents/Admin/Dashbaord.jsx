import React from 'react';

import SideNav from './SideNav';
import Table from './Table';
import axios from 'axios';
import {useState} from 'react';
import SearchEmployee from './SearchEmployee';
import Users from './Users';
import {useSelector} from 'react-redux';
function Dashbaord() {
    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [Cnic, setCnic] = useState('');
    const [close,setClose]=useState(false);
    const [classes,setclass]=useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selection,setSelection]=useState('');
    const user=useSelector(state=>state.auth.value);
   //write function to find the employee by employee number first name or last name or email or phone number
    const findEmployee = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);
        const url = 'http://localhost:5000/api/search/';   
        try {
            const response = await axios.get(url,{
                params: {  
                    employeeNumber: employeeNumber,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    Cnic: Cnic,

                 } ,
                 headers:{
                  'authorization':user
              }

            });
            setEmployee(response.data);
           
            setIsLoading(false);
            setIsSuccess(true);

          
        } catch (error) {
            setError('Error occured');
            setIsLoading(false);
            setIsError(true);
        }
    }
    const side=(e)=>{
      e.preventDefault();
     if(close) {
         setClose(false);
         setclass('col-sm-10');
     }else{
         setClose(true);
         setclass('col-sm-12');
     }       

  }

    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand " href="#">
      <img src="Logo-2.png" alt="" className='img-fluid' style={{width:"200px"}} />
     </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
          
      <ul class="navbar-nav  ">
       
      <li className="nav-item">
        <button onClick={side} className="btn btn-default"><i className="fa fa-bars"></i></button>
       
        </li>
         <li className="nav-item">
         <div class="w-lg-100 mx-lg-auto">
            
            <div class="input-card ">
                <div class="input-card-form">
                <div class="input-group d-none d-lg-flex flex-nowrap ">
                <div class="input-group-prepend ">
                <button className='btn btn-primary btn-icon' type='submit' onClick={findEmployee}>
                    <i class="fa  fa-search"></i>
                        </button>
                            </div>
                            {
                               //check if the selection is first name or last name or email or phone number or cnic
                                selection==='employeeNumber'?
                                <input class="form-control rounded-start w-100 px-4" type="text" placeholder="Employee Number" value={employeeNumber} onChange={(e)=>setEmployeeNumber(e.target.value)} />
                                :selection==='firstName'?
                                <input class="form-control rounded-start w-100 px-4" type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                                :selection==='lastName'?
                                <input class="form-control rounded-start w-100 px-4" type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                                :selection==='email'?
                                <input class="form-control rounded-start w-100 px-4" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                :selection==='Cnic'?
                                <input class="form-control rounded-start w-100 px-4" type="text" placeholder="Cnic" value={Cnic} onChange={(e)=>setCnic(e.target.value)} />
                                : <input class="form-control rounded-start w-100 px-4" type="text" placeholder="Employee Number" value={employeeNumber} onChange={(e)=>setEmployeeNumber(e.target.value)} />
                             
                                  
                            }
                            
                           
                            <select class="form-control" style={{width: "10.5rem"}} onChange={(e)=>setSelection(e.target.value)}>
                            <option value='email'>Email</option>
                            <option value='firstName'>First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value='Cnic'>CNIC</option>
                            <option value="employeeNumber">Employee ID</option>
                            
                            </select>
                           
                        </div>
                        </div>
                      </div>
                      </div>
         </li>
              
      
      
         
      </ul>
     
    </div>
  </div>
        </nav>
        
        <div className="container-fluid pt-5 mt-5" style={{backgroundColor:"rgb(255,255,255)",}}>
           <div className="row">
                <div className={close?'d-none':'col-sm-2'} style={{paddingTop:"50px"}}>
                   <SideNav Dashbaord="act"/>
                </div>
                  {isLoading ? <div class="spinner-border text-center my-5" style={{width: "9rem", height: "9rem"}} role="status">
                    <span class="sr-only">Loading...</span>
                  </div>:
                   <div className={close?'col-sm-12':'col-sm-10'}>
                   {
                     employee.length>0?
                     <div className="container pt-5 mt-5 px-5 bg-light" >
                     <h6 className="text-primary text-center pt-5 mt-5">Employee Found against Query</h6>
                         <div className="row">
                          
                         {
                             isLoading?
                             <>
                                <div className="col-md-12 text-center">
                                  <img src="loading.gif" className='img-fluid'  alt="" />
                                </div>
                             </>:
                                employee.map(emp=>{
                                  return (
                                      
                                      <div className="col-md-4">
                                      <div className="card my-5 mx-1 my-border">
                                          <div className="card-img-top text-center">
                                              <img src={emp.profileImage} alt="" className="img-top" />
                                          </div>
                                          <div className="card-body">
                                              <h6 className='text-center'>{emp.firstName} {emp.lastName}</h6>
                                              <p className='text-center' style={{color:"rgb(0,92,69)"}} >{emp.designation}</p>
                                              <p className='text-center'><i className="fa fa-envelope"></i>{emp.email}</p>
                                              <p className='text-center'><i className="fa fa-phone"></i>{emp.phone}</p>
                                          </div>
      
                                          <div className="d-flex justify-content-center">
                                              
                                          </div>
                                          <div className="text-center py-5">
                                              
                                              <a href={`/viewid/${emp._id}`} className="btn btn-primary">View Profile</a>
              
                                          </div>
                                      </div>
                                 </div>
                                  )
                                  
                             
                          })
                          }
                     
                        
                         </div>
                     </div>
                     :
                     <div className="container-fluid pt-5 mt-5" style={{backgroundColor:"rgb(248,249,253)"}}>
                      <SearchEmployee/>
                         
                         

                        

                         <div className="row">
                             <div className="col-sm-12 pt-5">
                                <Table/>
                             </div>
                      
                            
                             
                         </div>
                         
                        
                    </div>
                   }

                  
                 </div> 
                  }
                  {isError ? <div className="alert alert-danger">{error}</div>:
                  
                  <></>}
                  {isSuccess ? <div className="alert alert-success">Employee found</div>:<></>}
                 
                    
              </div>
            </div>
      </div>
;
}

export default Dashbaord;
