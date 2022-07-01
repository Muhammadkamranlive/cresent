import {useState,useEffect} from 'react';
import axios from 'axios';
import {storage} from "../../config.js";
import { ref,uploadBytes, getDownloadURL, } from "firebase/storage";
import {v4 } from 'uuid';
import {useSelector} from "react-redux"
function Addworkhistory() {

    const [employeeNumber, setEmployeeNumber] = useState('');
    const [consfirmationReprot, setconsfirmationReprot] = useState(null);
    const [consfirmationReprotloading, setconsfirmationReprotLoading] = useState(false);
    const [consfirmationReprotMessage, setconsfirmationReprotMessage] = useState(false);
    const [confirmationLetter,setPerosnalRequirement]=useState(null);
    const [confirmationLetterloading,setconfirmationLetterLoading]=useState(false);
    const [confirmationLetterMessage,setconfirmationLetterMessage]=useState(false);
    const [transferLetter,settransferLetter]=useState(null);
    const [transferLetterloading,settransferLetterLoading]=useState(false);
    const [transferLetterMessage,settransferLetterMessage]=useState(false);
    const [ExtensionOfProbationLetter,setExtensionOfProbationLetter]=useState(null);
    const [ExtensionOfProbationLetterloading,setExtensionOfProbationLetterLoading]=useState(false);
    const [ExtensionOfProbationLetterMessage,setExtensionOfProbationLetterMessage]=useState(false);
    const [warningLetter,setwarningLetter]=useState(null);
    const [warningLetterloading,setwarningLetterLoading]=useState(false);
    const [warningLetterMessage,setwarningLetterMessage]=useState(false);
    const [incrementLetter,setincrementLetter]=useState(null);
    const [incrementLetterloading,setincrementLetterLoading]=useState(false);
    const [incrementLetterMessage,setincrementLetterMessage]=useState(false);
    
    const [promotionLetter,setpromotionLetter]=useState(null);
    const [promotionLetterloading,setpromotionLetterLoading]=useState(false);
    const [promotionLetterMessage,setpromotionLetterMessage]=useState(false);
  
    const [chargeSheetLetter,setchargeSheetLetter]=useState(null);
    const [chargeSheetLetterloading,setchargeSheetLetterLoading]=useState(false);
    const [chargeSheetLetterMessage,setchargeSheetLetterMessage]=useState(false);

    const [SuspensionLetter,setSuspensionLetter]=useState(null);
    const [SuspensionLetterloading,setSuspensionLetterLoading]=useState(false);
    const [SuspensionLetterMessage,setSuspensionLetterMessage]=useState(false);
   
    const [SeparationDocument,setSeparationDocument]=useState(null);
    const [SeparationDocumentloading,setSeparationDocumentLoading]=useState(false);
    const [SeparationDocumentMessage,setSeparationDocumentMessage]=useState(false);
    const [errMessage,setErrMessage]=useState('');
    const [loading,setLoading]=useState(false);
    const [success,setSuccess]=useState('');
    const [employee,setEmployee]=useState([]);
    console.log(employee);

const handleImage=(e)=>{
  if(e.target.files[0]){
  setconsfirmationReprot(e.target.files[0]);
    
  }
   
}

const user=useSelector(state=>state.auth.value);

 // const handele confirmationLetter 
 const handleconfirmationLetter=(e)=>{
        if(e.target.files[0]){
          setPerosnalRequirement(e.target.files[0]);
        }
     }
    
// const handele transferLetter
    const handletransferLetter=(e)=>{
        if(e.target.files[0]){
          settransferLetter(e.target.files[0]);
        }
     }
// const handele ExtensionOfProbationLetter
    const handleExtensionOfProbationLetter=(e)=>{
        if(e.target.files[0]){
          setExtensionOfProbationLetter(e.target.files[0]);
        }
     }
// const handele warningLetter
    const handlewarningLetter=(e)=>{
        if(e.target.files[0]){
          setwarningLetter(e.target.files[0]);
        }
     
    }
// const handele incrementLetter
    const handleincrementLetter=(e)=>{
        if(e.target.files[0]){
          setincrementLetter(e.target.files[0]);
        }
     }
// const handele promotionLetter
    const handlepromotionLetter=(e)=>{
        if(e.target.files[0]){
          setpromotionLetter(e.target.files[0]);
        }
     }
// const handele chargeSheetLetter
    const handlechargeSheetLetter=(e)=>{
        if(e.target.files[0]){
          setchargeSheetLetter(e.target.files[0]);
        }
     }
// const handele SuspensionLetter
    const handleSuspensionLetter=(e)=>{
        if(e.target.files[0]){
          setSuspensionLetter(e.target.files[0]);
        }
     }
// const handele SeparationDocument
    const handleSeparationDocument=(e)=>{
        if(e.target.files[0]){
          setSeparationDocument(e.target.files[0]);
        }
     }

const uploadFile = (e) => {
         e.preventDefault();
          try {
            setconsfirmationReprotLoading(true);
            const imgageRef=ref(storage,`images/${consfirmationReprot.name+v4()}`);
            uploadBytes(imgageRef,consfirmationReprot)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setconsfirmationReprot(url);
                 setconsfirmationReprotMessage(true);
                 
                 setconsfirmationReprotLoading(false);
               
               
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
// const confirmationLetter
const uploadconfirmationLetter = (e) => {
          e.preventDefault();
           
          try {
            
            setconfirmationLetterLoading(true);
            const imgageRef=ref(storage,`images/${confirmationLetter.name+v4()}`);
            uploadBytes(imgageRef,confirmationLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setPerosnalRequirement(url);
                 setconfirmationLetterMessage(true);
                
                 setconfirmationLetterLoading(false);
                
               
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
// const transferLetter
const uploadtransferLetter = (e) => {
          e.preventDefault();
           
          try {
            settransferLetterLoading(true);
            const imgageRef=ref(storage,`images/${transferLetter.name+v4()}`);
            uploadBytes(imgageRef,transferLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 settransferLetter(url);
                 settransferLetterMessage(true);
                  
                  settransferLetterLoading(false);
                 
               
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
// const ExtensionOfProbationLetter
const uploadExtensionOfProbationLetter = (e) => {
          e.preventDefault();
            
          try {
            setExtensionOfProbationLetterLoading(true);
            const imgageRef=ref(storage,`images/${ExtensionOfProbationLetter.name+v4()}`);
            uploadBytes(imgageRef,ExtensionOfProbationLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setExtensionOfProbationLetter(url);
                 setExtensionOfProbationLetterMessage(true);
              
                 setExtensionOfProbationLetterLoading(false);
               
               
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
// const warningLetter
const uploadwarningLetter = (e) => {
          e.preventDefault();
           
          try {
            setwarningLetterLoading(true);
            const imgageRef=ref(storage,`images/${warningLetter.name+v4()}`);
            uploadBytes(imgageRef,warningLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setwarningLetter(url);
                 setwarningLetterMessage(true);
                  
                  setwarningLetterLoading(false);
               
               
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
// const incrementLetter
const uploadincrementLetter = (e) => {
          e.preventDefault();
            
          try {
            setincrementLetterLoading(true);
            const imgageRef=ref(storage,`images/${incrementLetter.name+v4()}`);
            uploadBytes(imgageRef,incrementLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setincrementLetter(url);
                 setincrementLetterMessage(true);
                 setincrementLetterLoading(false);
                
               
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
// const promotionLetter
const uploadpromotionLetter = (e) => {
          e.preventDefault();
            
          try {
            setpromotionLetterLoading(true);
            const imgageRef=ref(storage,`images/${promotionLetter.name+v4()}`);
            uploadBytes(imgageRef,promotionLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setpromotionLetter(url);
                 setpromotionLetterMessage(true);
                
                 setpromotionLetterLoading(false);
                
               
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
// const managment  const [chargeSheetLetter,setchargeSheetLetter]=useState(null);
const uploadchargeSheetLetter = (e) => {
          e.preventDefault();
           
          try {
            setchargeSheetLetterLoading(true);
            const imgageRef=ref(storage,`images/${chargeSheetLetter.name+v4()}`);
            uploadBytes(imgageRef,chargeSheetLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setchargeSheetLetter(url);
                 setchargeSheetLetterMessage(true);
                 
                  setchargeSheetLetterLoading(false);
                 
               
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

const uploadSeparationDocument = (e) => {
          e.preventDefault();
          try {
            setSeparationDocumentLoading(true);
            const imgageRef=ref(storage,`images/${SeparationDocument.name+v4()}`);
            uploadBytes(imgageRef,SeparationDocument)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setSeparationDocument(url);
                 setSeparationDocumentMessage(true);
           
                 setSeparationDocumentLoading(false);
                 
               
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


// SuspensionLetter
const uploadSuspensionLetter = (e) => {
          e.preventDefault();
          try {
            setSuspensionLetterLoading(true);
            const imgageRef=ref(storage,`images/${SuspensionLetter.name+v4()}`);
            uploadBytes(imgageRef,SuspensionLetter)
            .then(()=>{
              getDownloadURL(imgageRef)
              .then((url)=>{
                 setSuspensionLetter(url);
                 setSuspensionLetterMessage(true);
                 
                  setSuspensionLetterLoading(false);
                 
               
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
    setEmployee(null);
    axios.get('http://localhost:5000/api/history/find/',{
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
    axios.post('http://localhost:5000/addhistory',{
    consfirmationReprot,
    confirmationLetter,
    SuspensionLetter,
    SeparationDocument,
    chargeSheetLetter,
    warningLetter,
    transferLetter,
    promotionLetter,
    ExtensionOfProbationLetter,
    incrementLetter,
  
    },{
      headers:{
        'Content-Type':'application/json',
        'id':employeeNumber,
        'authorization':user
      }
    })
    .then((res)=>{

      setLoading(false);
      setSuccess(res.data.message);
      console.log(res.data.message);
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
                          loading ?
                          <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                          :null
                          }

                          {
                            success && <div class="alert alert-success" role="alert">{success}</div>
                          }
                         
                             {
                               errMessage ?
                                <div class="alert alert-danger" role="alert">
                                {errMessage}
                                </div>
                                :null}
                                
                             
                          
                          
                          
                               {
                                employee && employee.length>0 ?
                                <>
                                <div class="row mb-3">
                                         {
                                           consfirmationReprotMessage?<div class="alert alert-success" role="alert"> Confiramtion Report is uploaded successfully</div>:null
                                         }
                                         {
                                           consfirmationReprotloading ?
                                           <button class="btn btn-primary" type="button" disabled>
                                           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             uploading...
                                         </button>:
                                         
                                         <>
                                         <label    class="col-sm-4 col-form-label">Confiramtion Report</label>
                                         <div class="col-sm-5">
                                         <input type="file" class="form-control"  onChange={handleImage}  disabled={consfirmationReprotMessage?true:false} />
                                         </div>
                                         <div className="col-sm-3">
                                           {
                                             consfirmationReprotMessage?
                                             null:
                                             <button onClick={uploadFile} className="btn btn-primary" >upload to cloud</button>
                                           }
                                         </div>
                                         </>
                                         }
                                        
                               </div>
                      
                               <div class="row mb-3">
                                         {
                                           confirmationLetterMessage?<div class="alert alert-success" role="alert">Confiramtion Letter document is uploaded successfully</div>:null
                                         }
                                         {
                                           confirmationLetterloading ?
                                           <button class="btn btn-primary" type="button" disabled>
                                           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             uploading...
                                         </button>:
                                         
                                         <>
                                         <label    class="col-sm-4 col-form-label">Confiramtion Letter</label>
                                         <div class="col-sm-5">
                                         <input type="file" class="form-control"  onChange={handleconfirmationLetter}  disabled={confirmationLetterMessage?true:false} />
                                         </div>
                                         <div className="col-sm-3">
                                           {
                                             confirmationLetterMessage?
                                             null:
                                             <button onClick={uploadconfirmationLetter} className="btn btn-primary" >upload to cloud</button>
                                           }
                                         </div>
                                         </>
                                         }
                                        
                               </div>

                               <div class="row mb-3">
                                         {
                                           transferLetterMessage?<div class="alert alert-success" role="alert"> Transfer Letter is uploaded successfully</div>:null
                                         }
                        
                                          {
                                             transferLetterloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                           </button>:
                                           <>
                                           <label class="col-sm-4 col-form-label">Transfer Letter</label>
                                           <div class="col-sm-5">
                                           <input type="file" class="form-control"   onChange={handletransferLetter}  disabled={transferLetterMessage?true:false} />
                                           </div>
                                           <div className="col-sm-3">
                                             {
                                               transferLetterMessage?
                                               null:
                                               <button onClick={uploadtransferLetter} className="btn btn-primary" >upload to cloud</button>
                                             }
                                           </div>
                                           </>
                                          }
                                           
                                       </div>


                                       <div class="row mb-3">
                                           {
                                             ExtensionOfProbationLetterMessage?<div class="alert alert-success" role="alert">Extension Of Probation Letter  document is uploaded successfully</div>:null
                                           }
                                             
                                             {
                                               ExtensionOfProbationLetterloading ?
                                               <button class="btn btn-primary" type="button" disabled>
                                               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                 uploading...
                                             </button>:
                                             <>
                                              <label  class="col-sm-4 col-form-label">Extension Of Probation Letter</label>
                                             <div class="col-sm-5">
                                             <input type="file" class="form-control"  onChange={handleExtensionOfProbationLetter} disabled={ExtensionOfProbationLetterMessage?true:false} />
                                             </div>
                                             <div className="col-sm-3">
                                              {
                                               ExtensionOfProbationLetterMessage?
                                               null:
                                               <button onClick={uploadExtensionOfProbationLetter} className="btn btn-primary" >upload to cloud</button>
                                              }
                                               </div>
                                             </>
                                             }
                                         </div>
                                         <div class="row mb-3">
                                                {
                                                  warningLetterMessage?<div class="alert alert-success" role="alert"> Warining Letter is uploaded successfully</div>:null
                                                }
                                                {
                                                 warningLetterloading ?
                                                 <button class="btn btn-primary" type="button" disabled>
                                                 <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                   uploading...
                                               </button>:
                                                 <>
                                                   <label  class="col-sm-4 col-form-label"> Warining Letter</label>
                                               <div class="col-sm-5">
                                               <input type="file" class="form-control"  onChange={handlewarningLetter}  disabled={warningLetterMessage?true:false} />
                                               </div>
                                               <div className="col-sm-3">
                                                {
                                                 warningLetterMessage?
                                                 null:
                                                 <button onClick={uploadwarningLetter} className="btn btn-primary" >upload to cloud</button>
                                                }
                                                 </div>
                                                 </>
                                                }
                                           </div>
                                           <div class="row mb-3">
                                           {
                                             incrementLetterMessage?<div class="alert alert-success" role="alert"> Increment Letter  is uploaded successfully</div>:null
                                           }
                                             {
                                               incrementLetterloading ?
                                               <button class="btn btn-primary" type="button" disabled>
                                               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                 uploading...
                                                </button>:
                                                <>
                                                 <label  class="col-sm-4 col-form-label"> Increment Letter </label>
                                                 <div class="col-sm-5">
                                                 <input type="file" class="form-control" onChange={handleincrementLetter}  disabled={incrementLetterMessage?true:false} />
                                                 </div>
                                                 <div className="col-sm-3">
                                                   {
                                                     incrementLetterMessage?
                                                     null:
                                                     <button onClick={uploadincrementLetter} className="btn btn-primary" >upload to cloud</button>
                                                   }
                                                   </div>
                                                </>
                                             }
                                         </div>
                                         <div class="row mb-3">
                                           {
                                             promotionLetterMessage?<div class="alert alert-success" role="alert">Promotion Letter is uploaded successfully</div>:null
                                           }
                                             {
                                               promotionLetterloading ?
                                               <button class="btn btn-primary" type="button" disabled>
                                               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                 uploading...
                                                 </button>:
                                                 <>
                                                  <label for="resumeExtensionOfProbationLetterCareersForm" class="col-sm-4 col-form-label">Promotion Letter</label>
                                             <div class="col-sm-5">
                                             <input type="file" class="form-control"   onChange={handlepromotionLetter}  disabled={promotionLetterMessage?true:false} />
                                             </div>
                                             <div className="col-sm-3">
                                               {
                                                 promotionLetterMessage?
                                                 null:
                                                 <button onClick={uploadpromotionLetter} className="btn btn-primary" >upload to cloud</button>
                                               }
                                               </div>
                                                 </>
                                             }
                                         </div>

                                         <div class="row mb-3">
                                           {
                                             chargeSheetLetterMessage?<div class="alert alert-success" role="alert">Charge Sheet Letter  document is uploaded successfully</div>:null
                                           }
                                           {
                                             chargeSheetLetterloading ?
                                             <button class="btn btn-primary" type="button" disabled>
                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               uploading...
                                             </button>:
                                             <>
                                              <label  class="col-sm-4 col-form-label">Charge Sheet Letter</label>
                                             <div class="col-sm-5">
                                             <input type="file" class="form-control"  onChange={handlechargeSheetLetter}  disabled={chargeSheetLetterMessage?true:false} />
                                             </div>
                                             <div className="col-sm-3">
                                              {
                                               chargeSheetLetterMessage?
                                               null:
                                               <button onClick={uploadchargeSheetLetter} className="btn btn-primary" >upload to cloud</button>
                                              }
                                               </div>
                                             </>
                                           }
                                             
                                         </div>

                                         <div class="row mb-3">
                                           {
                                             SuspensionLetterMessage?<div class="alert alert-success" role="alert"> Suspension Letter document is uploaded successfully</div>:null
                                           }
                                            {
                                              SuspensionLetterloading ?
                                              <button class="btn btn-primary" type="button" disabled>
                                              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                uploading...
                                            </button>:
                                             <>
                                            <label  class="col-sm-4 col-form-label">Suspension Letter Letter</label>
                                            <div class="col-sm-5">
                                            <input type="file" class="form-control"  onChange={handleSuspensionLetter}  disabled={SuspensionLetterMessage?true:false} />
                                            </div>
                                            <div className="col-sm-3">
                                              {
                                                 SuspensionLetterMessage?
                                                 null:
                                                 <button onClick={uploadSuspensionLetter} className="btn btn-primary" >upload to cloud</button>
                                              }
                                            </div>
                                             </>
                                            }
                                        </div>
                                        
                                        <div class="row mb-3">
                                         {
                                           SeparationDocumentMessage?<div class="alert alert-success" role="alert">Separation Documents is uploaded successfully</div>:null
                                         }
                     
                                        {
                                          SeparationDocumentloading ?
                                          <button class="btn btn-primary" type="button" disabled>
                                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            uploading...
                                          </button>:
                                        <> 
                                        <label class="col-sm-4 col-form-label">Separation Documents</label>
                                        <div class="col-sm-5">
                                        <input type="file" class=" form-control" onChange={handleSeparationDocument} disabled={SeparationDocumentMessage?true:false} />
                                        </div>
                                        <div className="col-sm-3">
                                          {
                                             SeparationDocumentMessage?
                                             null:
                                             <button onClick={uploadSeparationDocument} className="btn btn-primary" >upload to cloud</button>
                                          }
                                        </div>
                                        </>
                                        }
                                    </div>
                                   
                          <div className="row mb-4">
                              <button className="btn btn-primary" onClick={handleSubmit}>
                                save Work history
                              </button>
                          </div>

                         </>
                         :null
                               }
                        
                    
                
                     
                      
                     
                
               
               
            </div>
         
        </>
      );
}

export default Addworkhistory;