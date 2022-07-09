import SideNav from "./SideNav";
import axios from 'axios';
import {useState} from 'react';
import {useSelector} from 'react-redux';

function UpdateAllDoc() {
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
    console.log(user);
   //write function to find the employee by employee number first name or last name or email or phone number
    const findEmployee = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);
        const url = 'http://localhost:5000/api/search/';   
        try {
            if(user){
                const response = await axios.get(url,{
                    params: {  
                        employeeNumber: employeeNumber,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        Cnic: Cnic,
    
                     },
                     headers:{
                        'authorization':user
                     }   
                });
                setEmployee(response.data);
                setIsLoading(false);
                setIsSuccess(true);
            }

          
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


    return ( 


     <div className="container-fluid">
         <button onClick={side} className="btn btn-default"><i className="fa fa-bars"></i></button>
         <div className="row">
             <div className={close?'d-none':'col-sm-2'}>

                 <SideNav up="act"/>
             </div>
             <div className={close?'col-sm-12':'col-sm-10'}>
            
            <div class="bg-primary-dark overflow-hidden">
            <div class="container position-relative content-space-1">
                <div class="w-lg-75 mx-lg-auto">
            
                <div class="input-card">
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
                            
                           
                            <select class="form-control " style={{width: "10.5rem"}} onChange={(e)=>setSelection(e.target.value)}>
                            <option value='email'>Email</option>
                            <option value='firstName'>First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value='Cnic'>CNIC</option>
                            <option value="employeeNumber">Employee ID</option>
                            
                            </select>
                           
                        </div>
                </div>
                
                </div>

                <div class="position-absolute" style={{top:" -6rem", left: "-6rem"}}>
                <img src="../assets/svg/components/shape-1-soft-light.svg" alt="SVG" width="500" style={{width: "12rem"}} />
                </div>
                <div class="position-absolute" style={{bottom: "-6rem", right: "-7rem"}}>
                <img src="../assets/svg/components/shape-7-soft-light.svg" alt="SVG" width="250" />
                </div>
            
            </div>
            </div>

         </div>

         {
                             isLoading?
                             <>
                                <div className="col-md-12 text-center">
                                  <img src="loading.gif" className='img-fluid'  alt="" />
                                </div>
                             </>:
                                <div className="container">
                                    <div className="row pt-5 mt-5">
                                        {
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

                          }

              </div>

</div>
</div>
    

    );
}

export default UpdateAllDoc;
