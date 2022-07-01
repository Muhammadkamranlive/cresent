import {useState,useEffect} from 'react';
import axios from 'axios';
import {storage} from "../../config.js";
import { ref,uploadBytes, getDownloadURL, } from "firebase/storage";
import {v4 } from 'uuid';
import {useSelector} from 'react-redux';
function AddJoiningDoc() {
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [medicalCertificate, setmedicalCertificate] = useState(null);
    const [medicalCertificateloading, setmedicalCertificateLoading] = useState(false);
    const [medicalCertificateMessage, setmedicalCertificateMessage] = useState(false);
    const [criminalRecordVerifcation,setPerosnalRequirement]=useState(null);
    const [criminalRecordVerifcationloading,setcriminalRecordVerifcationLoading]=useState(false);
    const [criminalRecordVerifcationMessage,setcriminalRecordVerifcationMessage]=useState(false);
    const [DomicileCertificate,setDomicileCertificate]=useState(null);
    const [DomicileCertificateloading,setDomicileCertificateLoading]=useState(false);
    const [DomicileCertificateMessage,setDomicileCertificateMessage]=useState(false);
    const [EducationalCertificate,setEducationalCertificate]=useState(null);
    const [EducationalCertificateloading,setEducationalCertificateLoading]=useState(false);
    const [EducationalCertificateMessage,setEducationalCertificateMessage]=useState(false);
    const [ExperienceCertificate,setExperienceCertificate]=useState(null);
    const [ExperienceCertificateloading,setExperienceCertificateLoading]=useState(false);
    const [ExperienceCertificateMessage,setExperienceCertificateMessage]=useState(false);
    const [NationalID,setNationalID]=useState(null);
    const [NationalIDloading,setNationalIDLoading]=useState(false);
    const [NationalIDMessage,setNationalIDMessage]=useState(false);

    const [joiningReport,setjoiningReport]=useState(null);
    const [joiningReportloading,setjoiningReportLoading]=useState(false);
    const [joiningReportMessage,setjoiningReportMessage]=useState(false);
  
    const [AppointmentLetterEmail,setAppointmentLetterEmail]=useState(null);
    const [AppointmentLetterEmailloading,setAppointmentLetterEmailLoading]=useState(false);
    const [AppointmentLetterEmailMessage,setAppointmentLetterEmailMessage]=useState(false);

    const [inductionLetter,setinductionLetter]=useState(null);
    const [inductionLetterloading,setinductionLetterLoading]=useState(false);
    const [inductionLetterMessage,setinductionLetterMessage]=useState(false);
   
    const [otherDocuments,setOtherDocuments]=useState(null);
    const [otherDocumentsloading,setOtherDocumentsLoading]=useState(false);
    const [otherDocumentsMessage,setOtherDocumentsMessage]=useState(false);
    const [errMessage,setErrMessage]=useState('');
    const [loading,setLoading]=useState(false);
    const [employee,setEmployee]=useState([]);
    const [success,setSuccess]=useState('');

const handleImage=(e)=>{
  if(e.target.files[0]){
  setmedicalCertificate(e.target.files[0]);
    
  }
   
}


 // const handele criminalRecordVerifcation 
 const handlecriminalRecordVerifcation=(e)=>{
        if(e.target.files[0]){
          setPerosnalRequirement(e.target.files[0]);
        }
     }
    
// const handele DomicileCertificate
    const handleDomicileCertificate=(e)=>{
        if(e.target.files[0]){
          setDomicileCertificate(e.target.files[0]);
        }
     }
// const handele EducationalCertificate
    const handleEducationalCertificate=(e)=>{
        if(e.target.files[0]){
          setEducationalCertificate(e.target.files[0]);
        }
     }
// const handele ExperienceCertificate
    const handleExperienceCertificate=(e)=>{
        if(e.target.files[0]){
          setExperienceCertificate(e.target.files[0]);
        }
     
    }
// const handele NationalID
    const handleNationalID=(e)=>{
        if(e.target.files[0]){
          setNationalID(e.target.files[0]);
        }
     }
// const handele joiningReport
    const handlejoiningReport=(e)=>{
        if(e.target.files[0]){
          setjoiningReport(e.target.files[0]);
        }
     }
// const handele AppointmentLetterEmail
    const handleAppointmentLetterEmail=(e)=>{
        if(e.target.files[0]){
          setAppointmentLetterEmail(e.target.files[0]);
        }
     }
// const handele inductionLetter
    const handleinductionLetter=(e)=>{
        if(e.target.files[0]){
          setinductionLetter(e.target.files[0]);
        }
     }
// const handele otherDocuments
    const handleOtherDocuments=(e)=>{
        if(e.target.files[0]){
          setOtherDocuments(e.target.files[0]);
        }
     }

const uploadFile = (e) => {
         e.preventDefault();
          try {
            setmedicalCertificateLoading(true);
            const imgageRef=ref(storage,`images/${medicalCertificate.name+v4()}`);
            uploadBytes(imgageRef,medicalCertificate)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setmedicalCertificate(url);
                 setmedicalCertificateMessage(true);
                
                 setmedicalCertificateLoading(false);
                
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          } 
        
      };
// const criminalRecordVerifcation
const uploadcriminalRecordVerifcation = (e) => {
          e.preventDefault();
           
          try {
            
            setcriminalRecordVerifcationLoading(true);
            const imgageRef=ref(storage,`images/${criminalRecordVerifcation.name+v4()}`);
            uploadBytes(imgageRef,criminalRecordVerifcation)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setPerosnalRequirement(url);
                 setcriminalRecordVerifcationMessage(true);
                 
                  setcriminalRecordVerifcationLoading(false);
               
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          }
}
// const DomicileCertificate
const uploadDomicileCertificate = (e) => {
          e.preventDefault();
           
          try {
            setDomicileCertificateLoading(true);
            const imgageRef=ref(storage,`images/${DomicileCertificate.name+v4()}`);
            uploadBytes(imgageRef,DomicileCertificate)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setDomicileCertificate(url);
                 axios.post('http://localhost:5000/api/joining/add',{
                  DomicileCertificate:url,
                },{
                  headers:{ 
                    'Content-Type':'application/json',
                    'id':employeeNumber
                  }
                })
                .then((res)=>{
                  setDomicileCertificateMessage(true);
                  setDomicileCertificate(null);
                  setDomicileCertificateLoading(false);
                })
                .catch((err)=>{
                  console.log(err);
                }) 
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          }
}
// const EducationalCertificate
const uploadEducationalCertificate = (e) => {
          e.preventDefault();
            
          try {
            setEducationalCertificateLoading(true);
            const imgageRef=ref(storage,`images/${EducationalCertificate.name+v4()}`);
            uploadBytes(imgageRef,EducationalCertificate)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setEducationalCertificate(url);
                 setEducationalCertificateMessage(true);
                 
                  setEducationalCertificateLoading(false);
                  
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          }
}
// const ExperienceCertificate
const uploadExperienceCertificate = (e) => {
          e.preventDefault();
           
          try {
            setExperienceCertificateLoading(true);
            const imgageRef=ref(storage,`images/${ExperienceCertificate.name+v4()}`);
            uploadBytes(imgageRef,ExperienceCertificate)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setExperienceCertificate(url);
                  setExperienceCertificateMessage(true);
                  
                  setExperienceCertificateLoading(false);
                
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          }
}
// const NationalID
const uploadNationalID = (e) => {
          e.preventDefault();
            
          try {
            setNationalIDLoading(true);
            const imgageRef=ref(storage,`images/${NationalID.name+v4()}`);
            uploadBytes(imgageRef,NationalID)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setNationalID(url);
                 setNationalIDMessage(true);
                 
                 setNationalIDLoading(false);
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          }
}
// const joiningReport
const uploadjoiningReport = (e) => {
          e.preventDefault();
            
          try {
            setjoiningReportLoading(true);
            const imgageRef=ref(storage,`images/${joiningReport.name+v4()}`);
            uploadBytes(imgageRef,joiningReport)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setjoiningReport(url);
                 setjoiningReportMessage(true);
                
                 setjoiningReportLoading(false);
                
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          }

}
// const managment  const [AppointmentLetterEmail,setAppointmentLetterEmail]=useState(null);
const uploadAppointmentLetterEmail = (e) => {
          e.preventDefault();
           
          try {
            setAppointmentLetterEmailLoading(true);
            const imgageRef=ref(storage,`images/${AppointmentLetterEmail.name+v4()}`);
            uploadBytes(imgageRef,AppointmentLetterEmail)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setAppointmentLetterEmail(url);
                 setAppointmentLetterEmailMessage(true);
                 setAppointmentLetterEmailLoading(false);
                
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
          }
  }

const uploadOtherDocuments = (e) => {
          e.preventDefault();
          try {
            setOtherDocumentsLoading(true);
            const imgageRef=ref(storage,`images/${otherDocuments.name+v4()}`);
            uploadBytes(imgageRef,otherDocuments)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setOtherDocuments(url);
                  setOtherDocumentsMessage(true);
                  
                  setOtherDocumentsLoading(false);
                 
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
         }
}


// inductionLetter
const uploadinductionLetter = (e) => {
          e.preventDefault();
          try {
            setinductionLetterLoading(true);
            setinductionLetterMessage(true);
            
            setinductionLetterLoading(false);
            const imgageRef=ref(storage,`images/${inductionLetter.name+v4()}`);
            uploadBytes(imgageRef,inductionLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setinductionLetter(url);
                 
                
               
               }).catch((error)=>{
                console.log(error);
              })
        
            }).catch((error)=>{
              console.log(error.message);
            })
            
            .catch((err)=>{
              console.error(err.message);
            });
            
          
          } catch (e) {
            console.error("Error adding document: ", e.message);
         }
}


const user=useSelector(state=>state.auth.value);
console.log(user);

// find employee by id 
const findEmployee = (e) => {
  e.preventDefault();
   try {
    setLoading(true);
    setErrMessage(null);
    setSuccess(null);
    setEmployee([]);
    axios.get('http://localhost:5000/api/joining/find/',{
      headers:{
        'Content-Type':'application/json',
        'id':employeeNumber,
        'authorization':user
      }
    })
    .then((res)=>{
      setEmployee(
        res.data
      );
      
      setLoading(false);
    })
    .catch((err)=>{
      setErrMessage(err.response.data.message);
      setLoading(false);
    }) 

   } catch (error) {
    setErrMessage(error.response.data.message);
   
     
   }
}

const handleSubmit=(e) =>{
  e.preventDefault();
 try{

  setLoading(true);
  setErrMessage(null);
  setSuccess(null);
  axios.post('http://localhost:5000/api/joining/add',{
   
    medicalCertificate,
    criminalRecordVerifcation,
    inductionLetter,
    otherDocuments,
    AppointmentLetterEmail,
    DomicileCertificate,
    joiningReport,
    EducationalCertificate,
    ExperienceCertificate,
    NationalID,
  


  },{
    headers:{
      'Content-Type':'application/json',
      'id':employeeNumber,
      'authorization':user
    } 
  })
  .then((res)=>{
    setSuccess(res.data.message)
    setLoading(false);
  }).catch((err)=>{
    setErrMessage(err.response.data.message);
    setLoading(false);
  })

  }catch(err){
    setErrMessage(err.respnose.data.message);
  };
}


 

    return (
        <>
  
            <div className="card px-5 py-5">
                <div class="row mb-3">
                    <label  class="col-sm-4 col-form-label">Employee ID</label>
                    <div class="col-sm-5">
                    <input type="text" class="form-control" value={employeeNumber} onChange={(e)=>setEmployeeNumber(e.target.value)}  />
                    </div>
                    <div class="col-sm-3">
                    <button class="btn btn-primary" onClick={findEmployee}>Search</button>
                    </div>
                   </div>
                       {
                        errMessage && <div class="alert alert-danger">{errMessage}</div>
                       }
                  
                        
                        {
                          loading ?
                          <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                          :
                          null
                          
                          
                          
                        }

                    
<>
                             {
                              employee.length>0?
                               <>
                              <div class="row mb-3">
                                       {
                                         medicalCertificateMessage?<div class="alert alert-success" role="alert"> medical Certificate document is uploaded successfully</div>:null
                                       }
                                       {
                                         medicalCertificateloading ?
                                         <button class="btn btn-primary" type="button" disabled>
                                         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                           uploading...
                                       </button>:
                                       
                                       <>
                                       <label    class="col-sm-4 col-form-label">Medical Certificate</label>
                                       <div class="col-sm-5">
                                       <input type="file" class="form-control"  onChange={handleImage}  disabled={medicalCertificateMessage?true:false} />
                                       </div>
                                       <div className="col-sm-3">
                                         {
                                           medicalCertificateMessage?
                                           null:
                                           <button onClick={uploadFile} className="btn btn-primary" >upload to cloud</button>
                                         }
                                       </div>
                                       </>
                                       }
                                      
                             </div>
                    
                             <div class="row mb-3">
                                       {
                                         criminalRecordVerifcationMessage?<div class="alert alert-success" role="alert">Criminal Verification document is uploaded successfully</div>:null
                                       }
                                       {
                                         criminalRecordVerifcationloading ?
                                         <button class="btn btn-primary" type="button" disabled>
                                         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                           uploading...
                                       </button>:
                                       
                                       <>
                                       <label    class="col-sm-4 col-form-label">Criminal Verification</label>
                                       <div class="col-sm-5">
                                       <input type="file" class="form-control"  onChange={handlecriminalRecordVerifcation}  disabled={criminalRecordVerifcationMessage?true:false} />
                                       </div>
                                       <div className="col-sm-3">
                                         {
                                           criminalRecordVerifcationMessage?
                                           null:
                                           <button onClick={uploadcriminalRecordVerifcation} className="btn btn-primary" >upload to cloud</button>
                                         }
                                       </div>
                                       </>
                                       }
                                      
                             </div>

                             <div class="row mb-3">
                                       {
                                         DomicileCertificateMessage?<div class="alert alert-success" role="alert"> Domicile Certificate is uploaded successfully</div>:null
                                       }
                      
                                        {
                                           DomicileCertificateloading ?
                                           <button class="btn btn-primary" type="button" disabled>
                                           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             uploading...
                                         </button>:
                                         <>
                                         <label class="col-sm-4 col-form-label">Domicile Certificate</label>
                                         <div class="col-sm-5">
                                         <input type="file" class="form-control"   onChange={handleDomicileCertificate}  disabled={DomicileCertificateMessage?true:false} />
                                         </div>
                                         <div className="col-sm-3">
                                           {
                                             DomicileCertificateMessage?
                                             null:
                                             <button onClick={uploadDomicileCertificate} className="btn btn-primary" >upload to cloud</button>
                                           }
                                         </div>
                                         </>
                                        }
                                         
                                     </div>


                                     <div class="row mb-3">
                                         {
                                           EducationalCertificateMessage?<div class="alert alert-success" role="alert">Educational Certificate  document is uploaded successfully</div>:null
                                         }
                                           
                                           {
                                             EducationalCertificateloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                           </button>:
                                           <>
                                            <label  class="col-sm-4 col-form-label">Educational Certificate</label>
                                           <div class="col-sm-5">
                                           <input type="file" class="form-control"  onChange={handleEducationalCertificate} disabled={EducationalCertificateMessage?true:false} />
                                           </div>
                                           <div className="col-sm-3">
                                            {
                                             EducationalCertificateMessage?
                                             null:
                                             <button onClick={uploadEducationalCertificate} className="btn btn-primary" >upload to cloud</button>
                                            }
                                             </div>
                                           </>
                                           }
                                       </div>
                                       <div class="row mb-3">
                                              {
                                                ExperienceCertificateMessage?<div class="alert alert-success" role="alert">Experience Certificate  document is uploaded successfully</div>:null
                                              }
                                              {
                                               ExperienceCertificateloading ?
                                               <button class="btn btn-primary" type="button" disabled>
                                               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                 uploading...
                                             </button>:
                                               <>
                                                 <label  class="col-sm-4 col-form-label">Experience Certificate</label>
                                             <div class="col-sm-5">
                                             <input type="file" class="form-control"  onChange={handleExperienceCertificate}  disabled={ExperienceCertificateMessage?true:false} />
                                             </div>
                                             <div className="col-sm-3">
                                              {
                                               ExperienceCertificateMessage?
                                               null:
                                               <button onClick={uploadExperienceCertificate} className="btn btn-primary" >upload to cloud</button>
                                              }
                                               </div>
                                               </>
                                              }
                                         </div>
                                         <div class="row mb-3">
                                         {
                                           NationalIDMessage?<div class="alert alert-success" role="alert">National Identity card  is uploaded successfully</div>:null
                                         }
                                           {
                                             NationalIDloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                              </button>:
                                              <>
                                               <label  class="col-sm-4 col-form-label">National Identity card </label>
                                               <div class="col-sm-5">
                                               <input type="file" class="form-control" onChange={handleNationalID}  disabled={NationalIDMessage?true:false} />
                                               </div>
                                               <div className="col-sm-3">
                                                 {
                                                   NationalIDMessage?
                                                   null:
                                                   <button onClick={uploadNationalID} className="btn btn-primary" >upload to cloud</button>
                                                 }
                                                 </div>
                                              </>
                                           }
                                       </div>
                                       <div class="row mb-3">
                                         {
                                           joiningReportMessage?<div class="alert alert-success" role="alert">joining Report  document is uploaded successfully</div>:null
                                         }
                                           {
                                             joiningReportloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                               </button>:
                                               <>
                                                <label for="resumeEducationalCertificateCareersForm" class="col-sm-4 col-form-label">Joining Report</label>
                                           <div class="col-sm-5">
                                           <input type="file" class="form-control"   onChange={handlejoiningReport}  disabled={joiningReportMessage?true:false} />
                                           </div>
                                           <div className="col-sm-3">
                                             {
                                               joiningReportMessage?
                                               null:
                                               <button onClick={uploadjoiningReport} className="btn btn-primary" >upload to cloud</button>
                                             }
                                             </div>
                                               </>
                                           }
                                       </div>

                                       <div class="row mb-3">
                                         {
                                           AppointmentLetterEmailMessage?<div class="alert alert-success" role="alert">Appointment LetterEmail  document is uploaded successfully</div>:null
                                         }
                                         {
                                           AppointmentLetterEmailloading ?
                                           <button class="btn btn-primary" type="button" disabled>
                                           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             uploading...
                                           </button>:
                                           <>
                                            <label  class="col-sm-4 col-form-label">Appointment LetterEmail</label>
                                           <div class="col-sm-5">
                                           <input type="file" class="form-control"  onChange={handleAppointmentLetterEmail}  disabled={AppointmentLetterEmailMessage?true:false} />
                                           </div>
                                           <div className="col-sm-3">
                                            {
                                             AppointmentLetterEmailMessage?
                                             null:
                                             <button onClick={uploadAppointmentLetterEmail} className="btn btn-primary" >upload to cloud</button>
                                            }
                                             </div>
                                           </>
                                         }
                                           
                                       </div>

                                       <div class="row mb-3">
                                         {
                                           inductionLetterMessage?<div class="alert alert-success" role="alert"> inductionLetter document is uploaded successfully</div>:null
                                         }
                                          {
                                            inductionLetterloading ?
                                            <button class="btn btn-primary" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                              uploading...
                                          </button>:
                                           <>
                                          <label  class="col-sm-4 col-form-label">inductionLetter Letter</label>
                                          <div class="col-sm-5">
                                          <input type="file" class="form-control"  onChange={handleinductionLetter}  disabled={inductionLetterMessage?true:false} />
                                          </div>
                                          <div className="col-sm-3">
                                            {
                                               inductionLetterMessage?
                                               null:
                                               <button onClick={uploadinductionLetter} className="btn btn-primary" >upload to cloud</button>
                                            }
                                          </div>
                                           </>
                                          }
                                      </div>
                                      
                                      <div class="row mb-3">
                                       {
                                         otherDocumentsMessage?<div class="alert alert-success" role="alert">Other document is uploaded successfully</div>:null
                                       }
                   
                                      {
                                        otherDocumentsloading ?
                                        <button class="btn btn-primary" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                          uploading...
                                        </button>:
                                      <> 
                                      <label class="col-sm-4 col-form-label">Other Documents</label>
                                      <div class="col-sm-5">
                                      <input type="file" class=" form-control" onChange={handleOtherDocuments} disabled={otherDocumentsMessage?true:false} />
                                      </div>
                                      <div className="col-sm-3">
                                        {
                                           otherDocumentsMessage?
                                           null:
                                           <button onClick={uploadOtherDocuments} className="btn btn-primary" >upload to cloud</button>
                                        }
                                      </div>
                                      </>
                                      }
                                  </div>
                                  
                                  <div className="row mb-4">
                                   <button className="btn btn-primary" onClick={handleSubmit}>
                                     Save Documents
                                   </button>
                                 </div>
                      

                               </>
                              :
                               null
                             }
                          </>
                     
                                 
                     
                
               
               
            </div>
         
        </>
      );
}

export default AddJoiningDoc;