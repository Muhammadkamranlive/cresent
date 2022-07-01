import {useState, useEffect} from "react";
import axios from 'axios';
import {storage,db} from "../../config.js";
import { ref,uploadBytes, getDownloadURL, } from "firebase/storage";
import {v4 } from 'uuid';
import {useSelector} from 'react-redux';
function AddPersonal() {
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [Cnic, setCnic] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [designation,setDesignation] = useState('');
    const [salary,setSalary]=useState('')
    const [activeStatus,setActiveStatus]=useState('active');
    const [joiningDate,setJoiningDate]=useState('')
    const [remark,setremark]=useState('');
    const [profile,setprofile]=useState(null);
    const [loading,setLoading]=useState(false);
    const [prejoiningDocuments,setprejoiningDocuments]=useState([]);
    const [joiningDocuments,setjoiningDocuments]=useState([]);
    const [serviceHistory,setserviceHistory]=useState([]);
    const [consfirmationReprotloading, setconsfirmationReprotLoading] = useState(false);
    const [consfirmationReprotMessage, setconsfirmationReprotMessage] = useState(false);
    const [errMessage,setErrMessage]=useState('');
  
    const [successMessage,setSuccessMessage]=useState('');
    const [userType,setUserType]=useState('');
  
    const handleProfile = (e) => {
        e.preventDefault();
        if(e.target.files[0]){
            setprofile(e.target.files[0]);
        }
   }
   
  
   const user = useSelector((state) => state.user.value);
   const token=useSelector((state) => state.auth.value);

//  handle submit
const handleSubmit = (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        axios.post('http://localhost:5000/api/personal/add', 
        {
            employeeNumber,
            firstName,
            lastName,
            email,
            phone,
            Cnic,
            fatherName,
            designation,
            salary,
            activeStatus,
            joiningDate,
            remark,
            profile,
            prejoiningDocuments,
            joiningDocuments,
            serviceHistory,
            uid:user.uid,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        }
        )
            .then(res => {
                
                setLoading(false);
                setSuccessMessage(res.data.message);
                setprofile(null);
                window.location.reload();
            })
            .catch(err => {
                
                setErrMessage(err.response.data.message);
                setLoading(false);
            });
    } catch (error) {
        console.log(error);
        setErrMessage(error)
        setLoading(false);
    }
}


const uploadImage=(e)=>{
    e.preventDefault();
    try {
        setconsfirmationReprotLoading(true);
        const imgageRef=ref(storage,`images/${profile.name+v4()}`);
        uploadBytes(imgageRef,profile)
        .then(()=>{
          getDownloadURL(imgageRef)
          .then((url)=>{
             setprofile(url);
             setconsfirmationReprotLoading(false);
             setconsfirmationReprotMessage('Image Uploaded Successfully');
           }).catch((error)=>{
            console.log(error);
          })
    
        }).catch((error)=>{
          console.log(error.message);
        })
        
        .catch((err)=>{
          console.error(err.message);
        });
        
      
      }
      catch (e) {
        console.error("Error adding document: ", e.message);
      }
    }
    



    return ( 
        <>
       
         { 
             successMessage && 
                <div className="alert alert-success">
                    {successMessage}
                </div>   
            }

             <>
                {
                    errMessage ? 
                    <div className="alert alert-danger">
                          <strong>{errMessage} !</strong>  Please Try Again.
                    </div>:
                    null
                }
             </>
         
          {

           
            loading ? <div className="text-center py-5 my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> :
                <div className="card px-5 py-5">
                
                <div class="mb-5">
                    <h6>Profile Information</h6>
                </div>

                
                {
                        consfirmationReprotloading?
                        <div className="text-center mb-4">
                            <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                Uploading...
                            </button>
                        </div>
                        :
                        <>
                            {
                                consfirmationReprotMessage?
                                    <div className="text-center">
                                        <div className="alert alert-success">
                                            <strong>Success!</strong> Profile Image Uploaded Successfully.
                                        </div>
                                        </div>
                                    :
                                    <div class="row mb-3">
                                    <label for="resumeCVCareersForm" class="col-sm-4 col-form-label">Profile Picture</label>
                                    <div class="col-sm-5">
                                    <input type="file" class=" form-control"  onChange={handleProfile}  disabled={consfirmationReprotMessage?true:false} />
                                    </div>
                                    <div className="col-sm-2">
                                        <button class="btn btn-primary" type="button" onClick={uploadImage} disabled={consfirmationReprotMessage?true:false}>Upload Image</button>
                                    </div>
                                    </div>
                            }
                        </>
                    
                }
                <div class="row mb-3">
                    <label for="fullNameCareersForm" class="col-sm-4 col-form-label">First Name</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="fullNameCareersForm" value={firstName}  onChange={(e)=>setFirstName(e.target.value)}  placeholder="Jacob Williams" aria-label="Jacob Williams" />
                    </div>
                    
                </div>
                <div className="row mb-3">
                <label for="fullNameCareersForm" class="col-sm-4 col-form-label">Last Name</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control"  value={lastName}  onChange={(e)=>setLastName(e.target.value)}  placeholder="Jacob Williams" aria-label="Jacob Williams" required />
                    </div>
                </div>
                <div className="row mb-3">
                <label  class="col-sm-4 col-form-label">Father Name</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control"  value={fatherName}  onChange={(e)=>setFatherName(e.target.value)} placeholder="father name" required  />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="emailCareersForm" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8">
                    <input type="email"  value={email}  onChange={(e)=>setEmail(e.target.value)} class="form-control" id="emailCareersForm" name="emailCareersFormName" placeholder="example@site.com" aria-label="example@site.com" required />
                    </div>
                </div>
               

                <div class="row mb-3">
                    <label for="phoneCareersForm" class="col-sm-4 col-form-label">Phone</label>
                    <div class="col-sm-8">
                    <input type="number"  value={phone}  onChange={(e)=>setPhone(e.target.value)} class="form-control" id="phoneCareersForm" name="phoneCareersFormName" placeholder="+1 (062) 109-9222" aria-label="+1 (062) 109-9222" required />
                    </div>
                </div>


                
                <div class="row mb-3">
                    <label for="currentCompanyCareersForm" class="col-sm-4 col-form-label">CNIC Number</label>
                    <div class="col-sm-8">
                    <input type="number" class="form-control"  value={Cnic}  onChange={(e)=>setCnic(e.target.value)} id="currentCompanyCareersForm" name="currentCompanyCareersFormName" placeholder="33201210109797" aria-label="33201210109797"  required />
                    </div>
                </div>
                
                <hr class="my-5 my-sm-10"></hr>

                <div class="mb-5">
                    <h6>Company Profile</h6>
                </div>
                <div class="row mb-3">
                    <label for="currentCompanyCareersForm" class="col-sm-4 col-form-label">Employee #</label>
                    <div class="col-sm-8">
                    <select  class="form-control" id="currentCompanyCareersForm"  value={userType}  onChange={(e)=>setUserType(e.target.value)}  placeholder="3494"  required >
                        <option value="">Select Employee #</option>
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                    </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="currentCompanyCareersForm" class="col-sm-4 col-form-label">Employee #</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="currentCompanyCareersForm"  value={employeeNumber}  onChange={(e)=>setEmployeeNumber(e.target.value)}  placeholder="3494"  />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="currentCompanyCareersForm" class="col-sm-4 col-form-label">Designation</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" value={designation}  onChange={(e)=>setDesignation(e.target.value)} id="currentCompanyCareersForm" placeholder="Designation" />
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="currentCompanyCareersForm" class="col-sm-4 col-form-label">Joining Date</label>
                    <div class="col-sm-8">
                    <input type="date" class="form-control"  value={joiningDate}  onChange={(e)=>setJoiningDate(e.target.value)}  placeholder="crestex"     />
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="otherWebsiteCareersForm" class="col-sm-4 col-form-label">Salary</label>
                    <div class="col-sm-8">
                    <input type="number" class="form-control" value={salary}  onChange={(e)=>setSalary(e.target.value)}  placeholder="34403/-" aria-label="304040" required />
                    </div>
                </div>
                
                

                <hr class="my-5 my-sm-10"></hr>

                <div class="mb-5">
                    <h6>Additional Remarks</h6>
                </div>

                
                <div class="mb-3">
                    <label for="additionalInfoCareersForm" class="form-label visually-hidden">Additional Remarks</label>
                    <textarea class="form-control" value={remark}  onChange={(e)=>setremark(e.target.value)} name="additionalInfoCareersFormName" id="additionalInfoCareersForm" placeholder="Add a cover letter or anything else you want to share." aria-label="Add a cover letter or anything else you want to share." rows="5"></textarea>
                </div>
                

                <div class="d-grid text-center mt-7">
                    <button class="btn btn-primary btn-lg"  onClick={handleSubmit} >Save Profile</button>
                </div>
                
            </div>
          }
        </>
     );
}

export default AddPersonal;