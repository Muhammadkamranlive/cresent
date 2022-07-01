import {useState, useEffect} from 'react';
import axios from 'axios';
import {storage} from "../../config.js";
import { ref,uploadBytes, getDownloadURL, } from "firebase/storage";
import {v4 } from 'uuid';
import { useSelector} from 'react-redux';
function AddPrejoiningDocuments() {
    const [employeeNumber, setEmployeeNumber] = useState('');
    const token=useSelector((state)=>state.auth.value);
    const [misClaniusDocument, setMisClaniusDocument] = useState(null);
    const [misClaniusDocumentloading, setMisClaniusDocumentLoading] = useState(false);
    const [misClaniusDocumentMessage, setMisClaniusDocumentMessage] = useState(false);
    const [personalRequirement,setPerosnalRequirement]=useState(null);
    const [personalRequirementloading,setPersonalRequirementLoading]=useState(false);
    const [personalRequirementMessage,setPersonalRequirementMessage]=useState(false);
    const [backgroundCheck,setBackgroundCheck]=useState(null);
    const [backgroundCheckloading,setBackgroundCheckLoading]=useState(false);
    const [backgroundCheckMessage,setBackgroundCheckMessage]=useState(false);
    const [CV,setCV]=useState(null);
    const [CVloading,setCVLoading]=useState(false);
    const [CVMessage,setCVMessage]=useState(false);
    const [writtenTest,setWrittenTest]=useState(null);
    const [writtenTestloading,setWrittenTestLoading]=useState(false);
    const [writtenTestMessage,setWrittenTestMessage]=useState(false);
    const [interviewAssesmentForm,setInterviewAssesmentForm]=useState(null);
    const [interviewAssesmentFormloading,setInterviewAssesmentFormLoading]=useState(false);
    const [interviewAssesmentFormMessage,setInterviewAssesmentFormMessage]=useState(false);

    const [finalApproval,setFinalApproval]=useState(null);
    const [finalApprovalloading,setFinalApprovalLoading]=useState(false);
    const [finalApprovalMessage,setFinalApprovalMessage]=useState(false);
  
    const [managmentForm,setManagmentForm]=useState(null);
    const [managmentFormloading,setManagmentFormLoading]=useState(false);
    const [managmentFormMessage,setManagmentFormMessage]=useState(false);

    const [officerEmploymentAgreementLetter,setOfficerEmploymentAgreementLetter]=useState(null);
    const [officerEmploymentAgreementLetterloading,setOfficerEmploymentAgreementLetterLoading]=useState(false);
    const [officerEmploymentAgreementLetterMessage,setOfficerEmploymentAgreementLetterMessage]=useState(false);
   
    const [otherDocuments,setOtherDocuments]=useState(null);;
    const [otherDocumentsloading,setOtherDocumentsLoading]=useState(false);
    const [otherDocumentsMessage,setOtherDocumentsMessage]=useState(false);
    const [errMessage,setErrMessage]=useState('');
    const [loading,setLoading]=useState(false);
    const [employee,setEmployee]=useState([]);
    const [success,setSuccess]=useState('');
    

const handleImage=(e)=>{
  if(e.target.files[0]){
  setMisClaniusDocument(e.target.files[0]);
    
  }
   
}


 // const handele personalRequirement 
 const handlePersonalRequirement=(e)=>{
        if(e.target.files[0]){
          setPerosnalRequirement(e.target.files[0]);
        }
     }
    
// const handele backgroundCheck
    const handleBackgroundCheck=(e)=>{
        if(e.target.files[0]){
          setBackgroundCheck(e.target.files[0]);
        }
     }
// const handele CV
    const handleCV=(e)=>{
        if(e.target.files[0]){
          setCV(e.target.files[0]);
        }
     }
// const handele writtenTest
    const handleWrittenTest=(e)=>{
        if(e.target.files[0]){
          setWrittenTest(e.target.files[0]);
        }
     
    }
// const handele interviewAssesmentForm
    const handleInterviewAssesmentForm=(e)=>{
        if(e.target.files[0]){
          setInterviewAssesmentForm(e.target.files[0]);
        }
     }
// const handele finalApproval
    const handleFinalApproval=(e)=>{
        if(e.target.files[0]){
          setFinalApproval(e.target.files[0]);
        }
     }
// const handele managmentForm
    const handleManagmentForm=(e)=>{
        if(e.target.files[0]){
          setManagmentForm(e.target.files[0]);
        }
     }
// const handele officerEmploymentAgreementLetter
    const handleOfficerEmploymentAgreementLetter=(e)=>{
        if(e.target.files[0]){
          setOfficerEmploymentAgreementLetter(e.target.files[0]);
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
            setMisClaniusDocumentLoading(true);
            const imgageRef=ref(storage,`images/${misClaniusDocument.name+v4()}`);
            uploadBytes(imgageRef,misClaniusDocument)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setMisClaniusDocument(url);
                 localStorage.setItem('misClaniusDocument',url);
                    setMisClaniusDocumentMessage(true);
                   
                    setMisClaniusDocumentLoading(false);
                
               
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
// const personalRequirement
const uploadPersonalRequirement = (e) => {
          e.preventDefault();
           
          try {
            
            setPersonalRequirementLoading(true);
            const imgageRef=ref(storage,`images/${personalRequirement.name+v4()}`);
            uploadBytes(imgageRef,personalRequirement)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setPerosnalRequirement(url);
                 setPersonalRequirementMessage(true);
                  setPersonalRequirementLoading(false);
               
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
// const backgroundCheck
const uploadBackgroundCheck = (e) => {
          e.preventDefault();
           
          try {
            setBackgroundCheckLoading(true);
            const imgageRef=ref(storage,`images/${backgroundCheck.name+v4()}`);
            uploadBytes(imgageRef,backgroundCheck)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setBackgroundCheck(url);
                  setBackgroundCheckMessage(true);
                 
                  setBackgroundCheckLoading(false);
               
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
// const CV
const uploadCV = (e) => {
          e.preventDefault();
            
          try {
            setCVLoading(true);
            const imgageRef=ref(storage,`images/${CV.name+v4()}`);
            uploadBytes(imgageRef,CV)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setCV(url);
                 setCVMessage(true);
                 setCVLoading(false);
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
// const writtenTest
const uploadWrittenTest = (e) => {
          e.preventDefault();
           
          try {
            setWrittenTestLoading(true);
            const imgageRef=ref(storage,`images/${writtenTest.name+v4()}`);
            uploadBytes(imgageRef,writtenTest)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setWrittenTest(url);
                 setWrittenTestMessage(true);
                 
                 setWrittenTestLoading(false);
                
               
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
// const interviewAssesmentForm
const uploadInterviewAssesmentForm = (e) => {
          e.preventDefault();
            
          try {
            setInterviewAssesmentFormLoading(true);
            const imgageRef=ref(storage,`images/${interviewAssesmentForm.name+v4()}`);
            uploadBytes(imgageRef,interviewAssesmentForm)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setInterviewAssesmentForm(url);
                 setInterviewAssesmentFormMessage(true);
                  
                  setInterviewAssesmentFormLoading(false);
               
               
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
// const finalApproval
const uploadFinalApproval = (e) => {
          e.preventDefault();
            
          try {
            setFinalApprovalLoading(true);
            const imgageRef=ref(storage,`images/${finalApproval.name+v4()}`);
            uploadBytes(imgageRef,finalApproval)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setFinalApproval(url);
                 setFinalApprovalMessage(true);
                 
                 setFinalApprovalLoading(false);
               
               
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
// const managment  const [managmentForm,setManagmentForm]=useState(null);
const uploadManagmentForm = (e) => {
          e.preventDefault();
           
          try {
            setManagmentFormLoading(true);
            const imgageRef=ref(storage,`images/${managmentForm.name+v4()}`);
            uploadBytes(imgageRef,managmentForm)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setManagmentForm(url);
                 setManagmentFormMessage(true);
                 
                  setManagmentFormLoading(false);
                
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


// officerEmploymentAgreementLetter
const uploadOfficerEmploymentAgreementLetter = (e) => {
          e.preventDefault();
          try {
            setOfficerEmploymentAgreementLetterLoading(true);
            const imgageRef=ref(storage,`images/${officerEmploymentAgreementLetter.name+v4()}`);
            uploadBytes(imgageRef,officerEmploymentAgreementLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setOfficerEmploymentAgreementLetter(url);
                 setOfficerEmploymentAgreementLetterMessage(true);
                 
                 setOfficerEmploymentAgreementLetterLoading(false);
                
               
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




// find employee by id 
const findEmployee = (e) => {
  e.preventDefault();
   try {
    setLoading(true);
    setErrMessage(null);
    setSuccess(null);
    setEmployee([]);
    axios.get('http://localhost:5000/api/prejoining/find/',{
      headers:{
        'Content-Type':'application/json',
        'id':employeeNumber,
        'authorization':token
      }
    })
    .then((res)=>{
      setEmployee(
        res.data
      );
      console.log(res.data);
      setLoading(false);
    })
    .catch((err)=>{
      setErrMessage(err.response.data.message);
      setLoading(false);
    }) 

   } catch (error) {
     console.error(error.response.data.message);
   
     
   }
}


const handleSubmit=(e) =>{
  e.preventDefault();
 try{

  setLoading(true);
  setErrMessage(null);
  setSuccess(null);
  axios.post('http://localhost:5000/api/prejoining/add',{
    misClaniusDocument,
    personalRequirement,
    interviewAssesmentForm,
    finalApproval,
    managmentForm,
    otherDocuments,
    officerEmploymentAgreementLetter,
    backgroundCheck,
    writtenTest,
    CV
   

  },{
    headers:{
      'Content-Type':'application/json',
      'id':employeeNumber,
      'authorization':token
    }
  })
  .then((res)=>{
    console.log(res);
    setSuccess(res.data.message);
    setLoading(false);
  }).catch((err)=>{
    setErrMessage(err.response.data.message);
    
    setLoading(false);
  })

  }catch(err){
    setErrMessage(err.response.data.message);
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
                  errMessage && <div class="alert alert-danger" role="alert">{errMessage}</div>
                 }
                 {
                  success? <div className="alert alert-success">{success}</div>:null
                 }
                        
                        {
                          loading ?
                          <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                          :null
                          
                          
                          
                          
                        }
                        <>
                            {
                              employee &&
                              employee.length > 0 ?
                              <>
                             
                               
                              <div class="row mb-3">
                                       {
                                         misClaniusDocumentMessage?<div class="alert alert-success" role="alert">misc document is uploaded successfully</div>:null
                                       }
                                       {
                                         misClaniusDocumentloading ?
                                         <button class="btn btn-primary" type="button" disabled>
                                         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                           uploading...
                                       </button>:
                                       
                                       <>
                                       <label    class="col-sm-4 col-form-label">misc Documents</label>
                                       <div class="col-sm-5">
                                       <input type="file" class="form-control"  onChange={handleImage}  disabled={misClaniusDocumentMessage?true:false} />
                                       </div>
                                       <div className="col-sm-3">
                                         {
                                           misClaniusDocumentMessage?
                                           null:
                                           <button onClick={uploadFile} className="btn btn-primary" >upload to cloud</button>
                                         }
                                       </div>
                                       </>
                                       }
                                      
                             </div>
                    
                             <div class="row mb-3">
                                       {
                                         personalRequirementMessage?<div class="alert alert-success" role="alert">Personnal Requirement/Replacement document is uploaded successfully</div>:null
                                       }
                                       {
                                         personalRequirementloading ?
                                         <button class="btn btn-primary" type="button" disabled>
                                         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                           uploading...
                                       </button>:
                                       
                                       <>
                                       <label    class="col-sm-4 col-form-label">Personnal Requirement/Replacement</label>
                                       <div class="col-sm-5">
                                       <input type="file" class="form-control"  onChange={handlePersonalRequirement}  disabled={personalRequirementMessage?true:false} />
                                       </div>
                                       <div className="col-sm-3">
                                         {
                                           personalRequirementMessage?
                                           null:
                                           <button onClick={uploadPersonalRequirement} className="btn btn-primary" >upload to cloud</button>
                                         }
                                       </div>
                                       </>
                                       }
                                      
                             </div>

                             <div class="row mb-3">
                                       {
                                         backgroundCheckMessage?<div class="alert alert-success" role="alert"> Background check document is uploaded successfully</div>:null
                                       }
                      
                                        {
                                           backgroundCheckloading ?
                                           <button class="btn btn-primary" type="button" disabled>
                                           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             uploading...
                                         </button>:
                                         <>
                                         <label class="col-sm-4 col-form-label">Background Check</label>
                                         <div class="col-sm-5">
                                         <input type="file" class="form-control"   onChange={handleBackgroundCheck}  disabled={backgroundCheckMessage?true:false} />
                                         </div>
                                         <div className="col-sm-3">
                                           {
                                             backgroundCheckMessage?
                                             null:
                                             <button onClick={uploadBackgroundCheck} className="btn btn-primary" >upload to cloud</button>
                                           }
                                         </div>
                                         </>
                                        }
                                         
                                     </div>


                                     <div class="row mb-3">
                                         {
                                           CVMessage?<div class="alert alert-success" role="alert">CV  document is uploaded successfully</div>:null
                                         }
                                           
                                           {
                                             CVloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                           </button>:
                                           <>
                                            <label  class="col-sm-4 col-form-label">Cv / Bio-Data / Application</label>
                                           <div class="col-sm-5">
                                           <input type="file" class="form-control"  onChange={handleCV} disabled={CVMessage?true:false} />
                                           </div>
                                           <div className="col-sm-3">
                                            {
                                             CVMessage?
                                             null:
                                             <button onClick={uploadCV} className="btn btn-primary" >upload to cloud</button>
                                            }
                                             </div>
                                           </>
                                           }
                                       </div>
                                       <div class="row mb-3">
                                              {
                                                writtenTestMessage?<div class="alert alert-success" role="alert">writtenTest  document is uploaded successfully</div>:null
                                              }
                                              {
                                               writtenTestloading ?
                                               <button class="btn btn-primary" type="button" disabled>
                                               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                 uploading...
                                             </button>:
                                               <>
                                                 <label  class="col-sm-4 col-form-label">Written Test</label>
                                             <div class="col-sm-5">
                                             <input type="file" class="form-control"  onChange={handleWrittenTest}  disabled={writtenTestMessage?true:false} />
                                             </div>
                                             <div className="col-sm-3">
                                              {
                                               writtenTestMessage?
                                               null:
                                               <button onClick={uploadWrittenTest} className="btn btn-primary" >upload to cloud</button>
                                              }
                                               </div>
                                               </>
                                              }
                                         </div>
                                         <div class="row mb-3">
                                         {
                                           interviewAssesmentFormMessage?<div class="alert alert-success" role="alert">Interview  document is uploaded successfully</div>:null
                                         }
                                           {
                                             interviewAssesmentFormloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                              </button>:
                                              <>
                                               <label  class="col-sm-4 col-form-label">Interview Assessment Form</label>
                                               <div class="col-sm-5">
                                               <input type="file" class="form-control" onChange={handleInterviewAssesmentForm}  disabled={interviewAssesmentFormMessage?true:false} />
                                               </div>
                                               <div className="col-sm-3">
                                                 {
                                                   interviewAssesmentFormMessage?
                                                   null:
                                                   <button onClick={uploadInterviewAssesmentForm} className="btn btn-primary" >upload to cloud</button>
                                                 }
                                                 </div>
                                              </>
                                           }
                                       </div>
                                       <div class="row mb-3">
                                         {
                                           finalApprovalMessage?<div class="alert alert-success" role="alert">finalApproval  document is uploaded successfully</div>:null
                                         }
                                           {
                                             finalApprovalloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                               </button>:
                                               <>
                                                <label for="resumeCVCareersForm" class="col-sm-4 col-form-label">Final Approval Form</label>
                                           <div class="col-sm-5">
                                           <input type="file" class="form-control"   onChange={handleFinalApproval}  disabled={finalApprovalMessage?true:false} />
                                           </div>
                                           <div className="col-sm-3">
                                             {
                                               finalApprovalMessage?
                                               null:
                                               <button onClick={uploadFinalApproval} className="btn btn-primary" >upload to cloud</button>
                                             }
                                             </div>
                                               </>
                                           }
                                       </div>

                                       <div class="row mb-3">
                                         {
                                           managmentFormMessage?<div class="alert alert-success" role="alert">managment Approval  document is uploaded successfully</div>:null
                                         }
                                         {
                                           managmentFormloading ?
                                           <button class="btn btn-primary" type="button" disabled>
                                           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             uploading...
                                           </button>:
                                           <>
                                            <label  class="col-sm-4 col-form-label">Management approval</label>
                                           <div class="col-sm-5">
                                           <input type="file" class="form-control"  onChange={handleManagmentForm}  disabled={managmentFormMessage?true:false} />
                                           </div>
                                           <div className="col-sm-3">
                                            {
                                             managmentFormMessage?
                                             null:
                                             <button onClick={uploadManagmentForm} className="btn btn-primary" >upload to cloud</button>
                                            }
                                             </div>
                                           </>
                                         }
                                           
                                       </div>

                                       <div class="row mb-3">
                                         {
                                           officerEmploymentAgreementLetterMessage?<div class="alert alert-success" role="alert">Offer /Employment Agreement document is uploaded successfully</div>:null
                                         }
                                          {
                                            officerEmploymentAgreementLetterloading ?
                                            <button class="btn btn-primary" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                              uploading...
                                          </button>:
                                           <>
                                          <label  class="col-sm-4 col-form-label">Offer /Employment Agreement Letter</label>
                                          <div class="col-sm-5">
                                          <input type="file" class="form-control"  onChange={handleOfficerEmploymentAgreementLetter}  disabled={officerEmploymentAgreementLetterMessage?true:false} />
                                          </div>
                                          <div className="col-sm-3">
                                            {
                                               officerEmploymentAgreementLetterMessage?
                                               null:
                                               <button onClick={uploadOfficerEmploymentAgreementLetter} className="btn btn-primary" >upload to cloud</button>
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
                                 
                    
                                  <div className="row mb-3">
                                 <button className="btn btn-primary btn-block " onClick={handleSubmit}>
                                    save
                                </button>
                                </div>
                               </>
                              
                              :null
                             

                            }
                          </>
                    
                
                     
                      
                     
                
               
               
            </div>
            
        </>
      );
}

export default AddPrejoiningDocuments;