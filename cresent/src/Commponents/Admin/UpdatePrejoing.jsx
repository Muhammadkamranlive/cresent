import {useState} from 'react';
import axios from 'axios';
import {storage} from "../../config";
import { ref,uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";
import {v4 } from 'uuid';
import {useSelector} from 'react-redux';
function UpdatePrejoiningDocuments({list,id}) {
   
    const [misClaniusDocument, setMisClaniusDocument] = useState(list.misClaniusDocument);
    const [misClaniusDocumentloading, setMisClaniusDocumentLoading] = useState(false);
    const [misClaniusDocumentMessage, setMisClaniusDocumentMessage] = useState(false);
    const [personalRequirement,setPerosnalRequirement]=useState(list.personalRequirement);
    const [personalRequirementloading,setPersonalRequirementLoading]=useState(false);
    const [personalRequirementMessage,setPersonalRequirementMessage]=useState(false);
    const [backgroundCheck,setBackgroundCheck]=useState(list.backgroundCheck);
    const [backgroundCheckloading,setBackgroundCheckLoading]=useState(false);
    const [backgroundCheckMessage,setBackgroundCheckMessage]=useState(false);
    const [CV,setCV]=useState(list.CV);
    const [CVloading,setCVLoading]=useState(false);
    const [CVMessage,setCVMessage]=useState(false);
    const [writtenTest,setWrittenTest]=useState(list.writtenTest);
    const [writtenTestloading,setWrittenTestLoading]=useState(false);
    const [writtenTestMessage,setWrittenTestMessage]=useState(false);
    const [interviewAssesmentForm,setInterviewAssesmentForm]=useState(list.interviewAssesmentForm);
    const [interviewAssesmentFormloading,setInterviewAssesmentFormLoading]=useState(false);
    const [interviewAssesmentFormMessage,setInterviewAssesmentFormMessage]=useState(false);

    const [finalApproval,setFinalApproval]=useState(list.finalApproval);
    const [finalApprovalloading,setFinalApprovalLoading]=useState(false);
    const [finalApprovalMessage,setFinalApprovalMessage]=useState(false);
  
    const [managmentForm,setManagmentForm]=useState(list.managmentForm);
    const [managmentFormloading,setManagmentFormLoading]=useState(false);
    const [managmentFormMessage,setManagmentFormMessage]=useState(false);

    const [officerEmploymentAgreementLetter,setOfficerEmploymentAgreementLetter]=useState(list.officerEmploymentAgreementLetter);
    const [officerEmploymentAgreementLetterloading,setOfficerEmploymentAgreementLetterLoading]=useState(false);
    const [officerEmploymentAgreementLetterMessage,setOfficerEmploymentAgreementLetterMessage]=useState(false);
    const [subid,setSubid]=useState('');
    const [otherDocuments,setOtherDocuments]=useState(list.otherDocuments);;
    const [otherDocumentsloading,setOtherDocumentsLoading]=useState(false);
    const [otherDocumentsMessage,setOtherDocumentsMessage]=useState(false);
    const [errMessage,setErrMessage]=useState('');
    const [loading,setLoading]=useState(false);
    const [successMessage,setSuccessMessage]=useState('');
   const user=useSelector(state=>state.auth.value);

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
            //create the  reference to the file 
            setMisClaniusDocumentLoading(true);
            const delref=ref(storage,list.misClaniusDocument);
           
              const imgageRef=ref(storage,`images/${misClaniusDocument.name+v4()}`);
              uploadBytes(imgageRef,misClaniusDocument)
              .then(()=>{
                getDownloadURL(imgageRef)
                .then((url)=>{
                   setMisClaniusDocument(url);
                   setMisClaniusDocumentMessage(true);
                   setMisClaniusDocumentLoading(false);
                  
                 }).catch((error)=>{
                  console.log(error);
                })
          
              }).catch((error)=>{
                console.log(error.message);
              })
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
        
      };
// const personalRequirement
const uploadPersonalRequirement = (e) => {
          e.preventDefault();
           
          try {
            
            setPersonalRequirementLoading(true);
            const delref=ref(storage,list.personalRequirement);
          
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
            const delref=ref(storage,list.backgroundCheck);
           
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
            }
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          }
           
         }
// const CV
const uploadCV = (e) => {
          e.preventDefault();
          try {
            
            setCVLoading(true);
            const delref=ref(storage,list.CV);
            
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
            }
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          }
           
          
}
// const writtenTest
const uploadWrittenTest = (e) => {
          e.preventDefault();
          try {
            
            setWrittenTestLoading(true);
            const delref=ref(storage,list.writtenTest);
           
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
            }
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          }
         
}
// const interviewAssesmentForm
const uploadInterviewAssesmentForm = (e) => {
          e.preventDefault();
          try {
            
            setInterviewAssesmentFormLoading(true);
            const delref=ref(storage,list.interviewAssesmentForm);
            
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
            }
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          }   
         
}
// const finalApproval
const uploadFinalApproval = (e) => {
          e.preventDefault();
          try {
            
            setFinalApprovalLoading(true);
            const delref=ref(storage,list.finalApproval);
            
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
            }
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          }  

}
// const managment  const [managmentForm,setManagmentForm]=useState(null);
const uploadManagmentForm = (e) => {
          e.preventDefault();
          try {
            
            setManagmentFormLoading(true);
            const delref=ref(storage,list.managmentForm);
           
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
            }
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          }  
          
  }

const uploadOtherDocuments = (e) => {
          e.preventDefault();
          try {
            
            setOtherDocumentsLoading(true);
            const delref=ref(storage,list.otherDocuments);
            
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
            }
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
}


// officerEmploymentAgreementLetter
const uploadOfficerEmploymentAgreementLetter = (e) => {
          e.preventDefault();
          try {
            
            setOfficerEmploymentAgreementLetterLoading(true);
            const delref=ref(storage,list.officerEmploymentAgreementLetter);
           
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
            }
            
          
           catch (e) {
            console.error("Error adding document: ", e.message);
          } 
}




const handleSubmit=(e) =>{
  e.preventDefault();
 try{

  setLoading(true);
  axios.post('http://localhost:5000/api/prejoining/update',
  {
     misClaniusDocument,
     backgroundCheck,
     personalRequirement,
     managmentForm,
     otherDocuments,
     finalApproval,
     CV,
     interviewAssesmentForm,
     officerEmploymentAgreementLetter,
      

  },{
    headers:{
      'Content-Type':'application/json',
      'id':id,
      'subid':list._id,
      'authorization':user
    }
  })
  .then((res)=>{
    console.log(res);
    setSuccessMessage(res.data.message);
    setLoading(false);
    
  }).catch((err)=>{
    setErrMessage(err.response.data.message);
    setLoading(false);
  })

  }catch(err){
       
  };
}




    return (

         <>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl">Update Pre-Joining Documents</button>

<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
     <div class="modal-content">

       <div class="modal-header">
         <h5 class="modal-title h4" id="myExtraLargeModalLabel">Update Pre-Joining Documents</h5>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body px-5">
         <>
         {
          successMessage?
          <div class="alert alert-success" role="alert">
            {successMessage}
          </div>
          :null
         }
         <div className="row mb-4">
           {
             misClaniusDocumentloading?
             <>
              <button class="btn btn-primary" type="button" disabled>
               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
               Loading...
             </button>
             </>:
             <>
               <label htmlFor="" class="col-sm-5 col-form-label">{list.misClaniusDocument?<p>Misc Document is Already Uploaded you can update it</p>:<div className='badge bg-danger'>Misc Document is not found  you can update it</div>}</label>
             <div className="col-sm-5">
             <div className="form-group">
                 
                 <input type="hidden" className="form-control"   value={list._id} />
                 
                 <input type="file" className="form-control"   onChange={handleImage} disabled={misClaniusDocumentMessage?true:false} />
                 
               </div>
             
             </div>

         <div className="col-sm-2">
           <button className='btn btn-primary' onClick={uploadFile}>Upload Documents</button>
           </div>
             </>
           }
         </div>
         <div className="row mb-4">
         {
           personalRequirementloading?
           <>
            <button class="btn btn-primary" type="button" disabled>
               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
               Loading...
             </button>
           </>:
           <>
           <label htmlFor="" class="col-sm-5 col-form-label">{list.personalRequirement?<p >Personal Rquirnment Document is Already Uploaded you can update it</p>:<><p className='badge bg-danger'>Personal Rquirnment Document is Already Uploaded you can update it</p></>}</label>
         <div className="col-sm-5">
         <div className="form-group">
          
           <input type="file" className="form-control" onChange={handlePersonalRequirement} disabled={personalRequirementMessage?true:false} /> 
           </div>
         </div>

         <div className="col-sm-2">
           <button className='btn btn-primary' onClick={uploadPersonalRequirement}>Upload Documents</button>
           </div>
           </>
         }
         </div>
         <div className="row mb-4">
           {
             backgroundCheckloading?<><button class="btn btn-primary" type="button" disabled>
             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
             uploading...
         </button></>
             :<>
              <label htmlFor="" class="col-sm-5 col-form-label">{list.backgroundCheck?<p>Background Check  is already Uploaded you can update it</p>:<div className='badge bg-danger'>Background Check is not found  you can update it</div>}</label>
         <div className="col-sm-5">
         <div className="form-group">
             
             <input type="hidden" className="form-control"   value={list._id} />
             
             <input type="file" className="form-control" onChange={handleBackgroundCheck} disabled={backgroundCheckMessage?true:false}  />
             
           </div>
         
         </div>

         <div className="col-sm-2">            
           <button className='btn btn-primary' onClick={uploadBackgroundCheck}>Upload Documents</button>
           </div>
             </>
           }
         </div>
         <div className="row mb-4">
         {
           CVloading?<><button class="btn btn-primary" type="button" disabled>
           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           uploading...
       </button></>:
           <>
            <label htmlFor="" class="col-sm-5 col-form-label">{list.CV?<p>CV  is Already Uploaded you can update it</p>:<div className='badge bg-danger'>CV document is not found  you can update it</div>}</label>
         <div className="col-sm-5">
         <div className="form-group">
             
             <input type="hidden" className="form-control"   value={list._id} />
             
             <input type="file" className="form-control" onChange={handleCV} disabled={CVMessage?true:false} />
             
           </div>
         
         </div>

         <div className="col-sm-2">            
           <button className='btn btn-primary' onClick={uploadCV}>Upload Documents</button>
           </div>
           </>
         }
         </div>
         <div className="row mb-4">
            {
              officerEmploymentAgreementLetterloading?<><button class="btn btn-primary" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              uploading...
          </button></>:
              <>
            <label htmlFor="" class="col-sm-5 col-form-label">{list.officerEmploymentAgreementLetter?<p>Employee Agreement Document is Already Uploaded you can update it</p>:<div className='badge bg-danger'>Employee Agrement Document is not found  you can update it</div>}</label>
         <div className="col-sm-5">
         <div className="form-group">
             
             <input type="hidden" className="form-control"   value={list._id} />
             
             <input type="file" className="form-control"  onChange={handleOfficerEmploymentAgreementLetter}  disabled={officerEmploymentAgreementLetterMessage?true:false} />
             
           </div>
         
         </div>

         <div className="col-sm-2">             
           <button className='btn btn-primary' onClick={uploadOfficerEmploymentAgreementLetter}>Upload Documents</button>
           </div>
              </>
            }
         </div>
         <div className="row mb-4">
             {
               managmentFormloading?<><button class="btn btn-primary" type="button" disabled>
               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
               uploading...
           </button></>:
               <>
                   <label htmlFor="" class="col-sm-5 col-form-label">{list.managmentForm?<p>Management Document is Already Uploaded you can update it</p>:<div className='badge bg-danger'>Managment form  is not found  you can update it</div>}</label>
                 <div className="col-sm-5">
                 <div className="form-group">
                     
                     <input type="hidden" className="form-control"   value={list._id} />
                     
                     <input type="file" className="form-control" onChange={handleManagmentForm} disabled={managmentFormMessage?true:false} />
                     
                   </div>
                 
                 </div>
       
                 <div className="col-sm-2">      
                   <button className='btn btn-primary' onClick={uploadManagmentForm} >Upload Documents</button>
                   </div>
               </>
             }
         </div>
         <div className="row mb-4">
          {
            writtenTestloading?<><button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            uploading...
        </button></>:
            <>
              <label htmlFor="" class="col-sm-5 col-form-label">{list.writtenTest?<p>Written test Document  found you can update it</p>:<div className='badge bg-danger'>Written test Document is not found  you can update it</div>}</label>

               <div className="col-sm-5">
             <div className="form-group">
                 
                 <input type="hidden" className="form-control"   value={list._id} />
                 
                 <input type="file" className="form-control" onChange={ handleWrittenTest }  disabled={writtenTestMessage?true:false} /> 
                 
               </div>

             </div>

             <div className="col-sm-2">        
               <button className='btn btn-primary' onClick={uploadWrittenTest} >Upload Documents</button>
               </div>
            </>
          }
         </div>
         <div className="row mb-4">
             {
               interviewAssesmentFormloading?<><button class="btn btn-primary" type="button" disabled>
               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
               uploading...
           </button></>:
               <>
                    
             <label htmlFor="" class="col-sm-5 col-form-label">{list.interviewAssesmentForm?<p>Interview Assessment not found  you can update it</p>:<div className='badge bg-danger'>Interview Assessment form is not found  you can update it</div>}</label>
             
                     
             <div className="col-sm-5">
             <div className="form-group">
 
                 <input type="file" className="form-control" onChange={handleInterviewAssesmentForm}  disabled={interviewAssesmentFormMessage?true:false} />
                 
               </div>
             
             </div>

             <div className="col-sm-2">         
               <button className='btn btn-primary' onClick={uploadInterviewAssesmentForm} >Upload Documents</button>
               </div>
               </>
             }
         </div>
         <div className="row mb-4">
         
         {
           finalApprovalloading?<> <button class="btn btn-primary" type="button" disabled>
           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           uploading...
       </button></>:
           <>
              <label htmlFor="" class="col-sm-5 col-form-label">{list.finalApproval?<p>Final Aproval Document not found you can update it</p>:<div className='badge bg-danger'>Final Aproval Document is not found  you can update it</div>}</label>
          <div className="col-sm-5">
         <div className="form-group">
            <input type="file" className="form-control" onChange={handleFinalApproval}  disabled={finalApprovalMessage?true:false} /> 
             
           </div>
         
         </div>

         <div className="col-sm-2">                
           <button className='btn btn-primary' onClick={uploadFinalApproval}>Upload Documents</button>
           </div>
           </>
         }
         </div>


         <div className="row mb-4">
           {
             otherDocumentsloading?<><button class="btn btn-primary" type="button" disabled>
             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
             uploading...
         </button></>:
             <>
                  
             <label htmlFor="" class="col-sm-5 col-form-label">{list.otherDocuments?<p>Other Documents not found  you can update it</p>:<div className='badge bg-danger'>Other Document is not found  you can update it</div>}</label>
         
         <div className="col-sm-5">
         <div className="form-group">
             <input type="file" className="form-control" onChange={handleOtherDocuments }  disabled={otherDocumentsMessage?true:false}  />
           </div>
         
         </div>

         <div className="col-sm-2">            
           <button className='btn btn-primary' onClick={uploadOtherDocuments}>Upload Documents</button>
           </div>
      
             </>
           }
         </div>
          </>
         </div>
         <div class="modal-footer">
         <button type="button" class="btn btn-white" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save changes</button>
       </div>
     </div>
   </div>
 </div>

         </>
      );
}

export default UpdatePrejoiningDocuments;