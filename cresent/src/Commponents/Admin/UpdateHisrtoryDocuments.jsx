import {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import {storage} from "../../config.js";
import { ref,uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";
import {v4 } from 'uuid';
import {useSelector} from "react-redux"
function Updateworkhistory({list,id}) {
 
    const [consfirmationReprot, setconsfirmationReprot] = useState(list.consfirmationReprot);
    const [consfirmationReprotloading, setconsfirmationReprotLoading] = useState(false);
    const [consfirmationReprotMessage, setconsfirmationReprotMessage] = useState(false);
    const [confirmationLetter,setPerosnalRequirement]=useState(list.confirmationLetter);
    const [confirmationLetterloading,setconfirmationLetterLoading]=useState(false);
    const [confirmationLetterMessage,setconfirmationLetterMessage]=useState(false);
    const [transferLetter,settransferLetter]=useState(list.transferLetter);
    const [transferLetterloading,settransferLetterLoading]=useState(false);
    const [transferLetterMessage,settransferLetterMessage]=useState(false);
    const [ExtensionOfProbationLetter,setExtensionOfProbationLetter]=useState(list.ExtensionOfProbationLetter);
    const [ExtensionOfProbationLetterloading,setExtensionOfProbationLetterLoading]=useState(false);
    const [ExtensionOfProbationLetterMessage,setExtensionOfProbationLetterMessage]=useState(false);
    const [warningLetter,setwarningLetter]=useState(list.warningLetter);
    const [warningLetterloading,setwarningLetterLoading]=useState(false);
    const [warningLetterMessage,setwarningLetterMessage]=useState(false);
    const [incrementLetter,setincrementLetter]=useState(list.incrementLetter);
    const [incrementLetterloading,setincrementLetterLoading]=useState(false);
    const [incrementLetterMessage,setincrementLetterMessage]=useState(false);
    
    const [promotionLetter,setpromotionLetter]=useState(list.promotionLetter);
    const [promotionLetterloading,setpromotionLetterLoading]=useState(false);
    const [promotionLetterMessage,setpromotionLetterMessage]=useState(false);
  
    const [chargeSheetLetter,setchargeSheetLetter]=useState(list.chargeSheetLetter);
    const [chargeSheetLetterloading,setchargeSheetLetterLoading]=useState(false);
    const [chargeSheetLetterMessage,setchargeSheetLetterMessage]=useState(false);

    const [SuspensionLetter,setSuspensionLetter]=useState(list.SuspensionLetter);
    const [SuspensionLetterloading,setSuspensionLetterLoading]=useState(false);
    const [SuspensionLetterMessage,setSuspensionLetterMessage]=useState(false);
   
    const [SeparationDocument,setSeparationDocument]=useState(list.SeparationDocument);
    const [SeparationDocumentloading,setSeparationDocumentLoading]=useState(false);
    const [SeparationDocumentMessage,setSeparationDocumentMessage]=useState(false);
    const [errMessage,setErrMessage]=useState('');
    const [successMessage,setSuccessMessage]=useState('');
    const [loading,setLoading]=useState(false);
    const user=useSelector(state=>state.auth.value);

const handleImage=(e)=>{
  if(e.target.files[0]){
  setconsfirmationReprot(e.target.files[0]);
    
  }
   
}


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
            //create the  reference to the file 
            setconsfirmationReprotLoading(true);
            const delref=ref(storage,list.consfirmationReprot);
          
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
            }
            
            
          
           catch (e) {
            console.error("Error adding document: ", e.message);
          } 
        
         
 };
// const confirmationLetter
const uploadconfirmationLetter = (e) => {
          e.preventDefault();
          try {
            //create the  reference to the file 
            setconfirmationLetterLoading(true);
            const delref=ref(storage,list.confirmationLetter);
          
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
}
// const transferLetter
const uploadtransferLetter = (e) => {
          e.preventDefault();
          try {
            //create the  reference to the file 
            settransferLetterLoading(true);
            const delref=ref(storage,list.transferLetter);
           
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
}
// const ExtensionOfProbationLetter
const uploadExtensionOfProbationLetter = (e) => {
          e.preventDefault();
          try {
            setExtensionOfProbationLetterLoading(true);
            const delref=ref(storage,list.ExtensionOfProbationLetter);
        
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
          
}
// const warningLetter
const uploadwarningLetter = (e) => {
          e.preventDefault();
          try {
            setwarningLetterLoading(true);
            const delref=ref(storage,list.warningLetter);
          
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
           
        
}
// const incrementLetter
const uploadincrementLetter = (e) => {
          e.preventDefault();
          try {
            setincrementLetterLoading(true);
            const delref=ref(storage,list.incrementLetter);
            
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 

}
// const promotionLetter
const uploadpromotionLetter = (e) => {
          e.preventDefault();
          try {
            setpromotionLetterLoading(true);
            const delref=ref(storage,list.promotionLetter);
            
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 

}
// const managment  const [chargeSheetLetter,setchargeSheetLetter]=useState(null);
const uploadchargeSheetLetter = (e) => {
          e.preventDefault();
          try {
            setchargeSheetLetterLoading(true);
            const delref=ref(storage,list.chargeSheetLetter);
            
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
  }

const uploadSeparationDocument = (e) => {
          e.preventDefault();
          try {
            setSeparationDocumentLoading(true);
            const delref=ref(storage,list.SeparationDocument);
           
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
            }
            
            
          
          catch (e) {
            console.error("Error adding document: ", e.message);
          } 
}


// SuspensionLetter
const uploadSuspensionLetter = (e) => {
          e.preventDefault();
          try {
            setSuspensionLetterLoading(true);
            const delref=ref(storage,list.SuspensionLetter);
           
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
            }
            
            
          
         catch (e) {
            console.error("Error adding document: ", e.message);
          } 
}




  const handleSubmit=(e) =>{
    e.preventDefault();
   try{
  
    setLoading(true);
    axios.post('http://localhost:5000/api/history/update',{
     
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
        'id':id,
        'subid':list._id,
        'authorization':user
      }
    })
    .then((res)=>{
      setSuccessMessage(res.data.message);
      setLoading(false);
      swal({
        title: "Good job!",
        text: "Document submission successful!",
        icon: "success",
        button: "okay",
      });
    }).catch((err)=>{
      setErrMessage(err.response.data.message);
      setLoading(false);
    })
  
    }catch(err){
         
    };
  }
  



    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl2">Update work history Documents</button>
            <div class="modal fade bd-example-modal-xl2" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
                <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title h4" id="myExtraLargeModalLabel">Update work history Documents</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-5">
                   {
                       successMessage?
                       <>
                          <div className="alert alert-success">Documents submission scuccesfull</div>
                       </>
                       :
                       <div className=" px-5 py-5">
                        
                        {
                            loading ?
                            <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            :
                            <>
                                {
                                errMessage ?
                                <div class="alert alert-danger" role="alert">
                                    User not found
                                </div>
                                :
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
                                                <label    class="col-sm-4 col-form-label">{list.consfirmationReprot?<>Confiramtion Report is present you can update it.</>:<p className='badge bg-danger'>Confirmation report is not present but you can update it.</p>}</label>
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
                                                <label    class="col-sm-4 col-form-label">{list.confirmationLetter?<>Confiramtion Letter is present you can update it.</>:<p className='badge bg-danger'>confirmationLetter is not present but you can update it</p>}</label>
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
                                                    <label class="col-sm-4 col-form-label">{list.transferLetter?<>Transfer Letter</>:<p className='badge bg-danger'>Transfer letter is not present but you can update it</p>}</label>
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
                                                        <label  class="col-sm-4 col-form-label">{list.ExtensionOfProbationLetter?<>Extension Of Probation Letter found can be updated</>:<p className='badge bg-danger'>Extension Of Probation Letter not found but can be updated</p>}</label>
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
                                                            <label  class="col-sm-4 col-form-label"> {list.warningLetter?<>Warining Letter</>:<p className='badge bg-danger'>Warining Letter not present can be updated</p>}</label>
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
                                                        <label  class="col-sm-4 col-form-label">{list.incrementLetter?<> Increment Letter</>:<p className='badge bg-danger'> Increment Letter is not present already</p>} </label>
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
                                                    <label for="resumeExtensionOfProbationLetterCareersForm" class="col-sm-4 col-form-label">{list.promotionLetter?<>Promotion Letter</>:<p className='badge bg-danger'>Promotion Letter not found </p>}</label>
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
                                                        <label  class="col-sm-4 col-form-label">{list.chargeSheetLetter?<>Charge Sheet Letter</>:<p className='badge bg-danger'>Charge Sheet Letter not found</p>}</label>
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
                                                    <label  class="col-sm-4 col-form-label">{list.SuspensionLetter?<>Suspension Letter </>:<p className='badge bg-danger'>Suspension Letter not found</p>}</label>
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
                                                <label class="col-sm-4 col-form-label">{list.SeparationDocument?<>Separation Documents</>:<p className='badge bg-danger'>Separation Documents</p>}</label>
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
                                            
                                    

                            </>
                                }
                            </>
                            
                            
                            
                        }
                    
                
                        
                        
                        
                
                
                
                 </div>
                   }
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

export default Updateworkhistory;