import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import UpdatePrejoiningDocuments from './UpdatePrejoing';
import UpdatejoiningDocuments from './UpdateJoining';
import Updateworkhistory from './UpdateHisrtoryDocuments';
import UpdatePersonal from './UpdatePersonal';
import SideNav from './SideNav';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import { DocumentViewer } from 'react-documents';
function CLientSideOcr() {
  const [ocr, setOcr] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employee,setEmployee] = useState([]);
 const user=useSelector(state=>state.auth.value);
  const worker = createWorker({
    logger: (m) => {
     
      setProgress(parseInt(m.progress * 100));
    },
  });


  const convertImageToText = async () => {
    setLoading(true);
    if (!imageData) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(imageData);
    setOcr(text.slice(13,20));
     const resonse=await axios.get("http://localhost:5000/api/empNo",{
        params:{
            employeeNumber:text.slice(13,20)
        },
        headers:{
          'authorization':user
      }
     });
    if(resonse.data.length>0){
        setEmployee(resonse.data);
        setLoading(false);
    }
  };

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if(!file)return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }
    
  return (
      <>
      <Navbar/>
     
      <div className="container-fluid py-5 my-5">
        <div className="row">
          <div className="col-sm-2">
            <SideNav title="act" />
          </div>
          <div className="col-sm-10">
          <div className="row">
           <div className="col-sm-12">
          <div class="bg-primary-dark overflow-hidden">
          <div class="container position-relative content-space-1">
            <div class="w-lg-75 mx-lg-auto">
              <div class="input-card">
                <div class="input-card-form">
                <input
                    type="file"
                    name=""
                    id=""
                    className='form-control'
                    onChange={handleImageChange}
                    accept="image/*"
                    />
                  
                </div>
               
              
              </div>
            </div>
             
          </div>
        </div>
         
            {/* showinloading  */}
              <div className="col-sm-12">
              {progress < 100 && progress > 0 && <div>
                <div className="progress-label">Progress ({progress}%)</div>
                <div className="progress-bar">
                  <div className="progress" style={{width: `${progress}%`}} ></div>
                </div>
              </div>}
              </div>
                
            <div className="col-sm-12">
                  {
                    ocr
                  }

                 {
              employee.length>0?
              <>
              <div className="col-lg-12 bg-light">
            {
                employee.map((employee)=>{
                  return(
                          <>
                      <div class="card card1 bg-white p-5 mb-5 mt-5 pt-5">
                      <div class="row align-items-md-center">
                        
                        <div class="col-md mb-5 mb-md-0">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 ">
                              <img class="avatar avatar-lg avatar-circle  " style={{border:"3px solid green"}}  src={employee.profileImage} alt={employee.firstName}/>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-0">{employee.firstName} {employee.lastName}</h6>
                              <span class="d-block">{employee.designation}</span>
                            </div>
                          </div>
                        
                        </div>
                      
          
                        <div class="col-sm mb-3 mb-sm-0">
                          <h6 class="mb-0"><i class="fa-solid fa-id-card-clip"></i> CNIC Number</h6>
                          <span class="d-block">{employee.Cnic}</span>
                        </div>
                      
          
                        <div class="col-sm">
                        <h6 class="mb-0"><i class="fa-solid fa-user-check"></i> Employee #</h6>
                          <span class="d-block">{employee.employeeNumber}</span>
                        </div>
                        
                        <div class="col-sm">
                          {
                            <UpdatePersonal list={employee}  />
                          }
                        </div>
                        
                      </div>
                      
                      <div class="row align-items-md-center">
                        <div class="col-md mb-5 mb-md-0">
                        
                          <div class="d-flex align-items-center">
                          
                            <div class="flex-grow-1 ms-3 mt-3">
                              <p class="mb-0">Father Name</p>
                              <span class="d-block">{employee.fatherName}</span>
                            </div>
                          </div>
                        
                        </div>
                      
          
                        <div class="col-sm mb-3 mb-sm-0">
                          <p class="mb-0"><i class="fa-solid fa-money-check"></i> Salary</p>
                          <span class="d-block">{employee.salary}</span>
                        </div>
                      
          
                        <div class="col-sm">
                        <p class="mb-0"><i className="fa fa-envelope"></i> Email</p>
                          <span class="d-block">{employee.email}</span>
                        </div>
                        
                        
          
          
                        
                      </div>
                      </div>   
                
                      <div className="col-md-12">
                    
                                        
                                          
                                      
                    <div className="card-body">
                    <h5 className='text-center'>Personal File, Check list (Staff+)</h5>
                    <table class="table table-align-middle">
                        <thead>
                          <tr>
                            <th scope="col">SR#</th>
                            <th scope="col"colSpan={2}>Name of Documents</th>
                            <th scope="col" >Found Status</th>
                            
                          </tr>
                        </thead>
                        <tbody>
          
                    <>
          
                  
          
                        
                  
                      <tr>
                      
                      
                      <td></td>
                      <td colSpan={2}>
                      <h6>Pre Joining documents</h6>
                      </td>
                          <td>
                            {
                                                employee.prejoiningDocuments.map((list)=>{
                                                return(
                                                <UpdatePrejoiningDocuments list={list} id={employee._id}/>
                                                )
                                  })
                            }   
                      
                          </td>
                      </tr>
                
          
                          <tr>
                            <th scope="row">1</th>
                            <td colSpan={2}>Misc. Documents</td>
                            <td>
                            { employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.backgroundCheck?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}
                            </td>
                          
                            
                            
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td colSpan={2}>Personnal Requirement/Replacement</td>
              
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.personalRequirement?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Background Check</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.backgroundCheck?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td colSpan={2}>Cv / Bio-Data / Application</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.CV?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td colSpan={2}>Written Test</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.writtenTest?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td colSpan={2}>Interview Assessment Form</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.interviewAssesmentForm?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td colSpan={2}>Final Approval Form</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.finalApproval?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td colSpan={2}>Management approval</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.managmentForm?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td colSpan={2}>Offer /Employment Agreement Letter</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.officerEmploymentAgreementLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}
                                
                            </td>
                          </tr>
          
                          <tr>
                            <th scope="row">10</th>
                            <td colSpan={2}>Other Documents</td>
                            <td>{ employee.prejoiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.otherDocuments?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}
                                
                            </td>
                          </tr>
          
                              </>
          
          
          
          
          
          
          
                        
                          
                          <tr >
                            <td></td>
                            <td colSpan={2} className='pt-5 mt-5'>
                            <h6>Joinig documents</h6>
                            </td>
                            <td className='pt-5 mt-5'>
                            { employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <UpdatejoiningDocuments list={prejoining} id={employee._id}/>
                                  )
                          })}
                            </td>
                          </tr>
          
                        
                          <tr>
                            <th scope="row">1</th>
                            <td colSpan={2}>Medical Certiflcate</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.medicalCertificate?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                        
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td colSpan={2}> Criminal Record Vorificatlon</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.criminalRecordVerifcation?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                            
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Domicile</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.DomicileCertificate?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td colspan="2">Educational Certificates</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.EducationalCertificate?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td colspan="2">Experience/Diploma' S Certificates</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.ExperienceCertificate?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td colspan="2">National Identity Card/Photograph</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.NationalID?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td colspan="2">Joining Report</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.joiningReport?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td colspan="2"> Appointment Letter/Mail</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.AppointmentLetterEmail?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td colspan="2">Induction/Orientation</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.inductionLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td colspan="2">Other Documents</td>
                            <td>{ employee.joiningDocuments.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.otherDocuments?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
          
                          <tr>
                            <td></td>
                            <td colSpan={2} className='pt-5 mt-5'>
                            <h5 >Service History</h5>
                          
                            </td>
                            <td className='pt-5 mt-5'>
                            {
                                    employee.serviceHistory.map((list)=>{
                                      return(
                                        <Updateworkhistory list={list} id={employee._id}/>
                                      )
                            })
                          } 
                            </td>  
                          </tr> 
                          
                          <tr>
                            <th scope="row">1</th>
                            <td colSpan={2}>Confiramtion Report</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.consfirmationReprot?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td colSpan={2}>Extension Of Probation Letter</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.ExtensionOfProbationLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Confiramtion Letter</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.confirmationLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td colspan="2">Transfer Letter</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.transferLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td colspan="2">Increment Letter</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.serviceHistory?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td colspan="2">Promotion Letter</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.promotionLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td colspan="2"> Charge Sheet/Show Cause</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.chargeSheetLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td colspan="2">Suspension</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.SuspensionLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td colspan="2">Warning</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.warningLetter?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td colspan="2">Separation Documents</td>
                            <td>{ employee.serviceHistory.map((prejoining,index)=>{
                                  return(
                                    <tr >
                                      <td key={prejoining._id}>
                                      {
                                          prejoining.SeparationDocument?<h6> <i class="fa-solid fa-circle-check text-success" ></i>  Yes</h6>:<h6><i class="fa-solid fa-xmark text-success"></i> No</h6>
                                      } 
                                      </td>
                                    </tr>
                                  )
                                })}</td>
                          </tr>
                        </tbody>
                      </table>
                    
                    <h5>
                    Documents
                    </h5>
                    <ul class="nav nav-tabs nav-pills" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"> <i class="fa-solid fa-file-circle-check"></i> Pre-Joining Documents</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"> <i class="fa-solid fa-file-circle-check"></i> Joining Documents</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"> <i class="fa-solid fa-file-circle-check"></i> Service History</button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="container">
                      <div className="row">
                      <div class="row my-5">
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">Misc. Documents</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.misClaniusDocument}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">personalRequirement</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.personalRequirement}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">backgroundCheck</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.backgroundCheck}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">CV</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.CV}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">interviewAssesmentForm</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.interviewAssesmentForm}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">finalApproval</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.finalApproval}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">managmentForm</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.managmentForm}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">officerEmploymentAgreementLetter</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.officerEmploymentAgreementLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">otherDocuments</h5>
                            {
                                    employee.prejoiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.otherDocuments}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      </div>
                      </div>
                    </div>
                  </div> 
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    Joining Documents
                    <div className="container">
                      <div className="row">
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">Medical Certificate</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.medicalCertificate}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">DomicileCertificate</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.DomicileCertificate}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">EducationalCertificate</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.EducationalCertificate}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">ExperienceCertificate</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.ExperienceCertificate}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">NationalID</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.NationalID}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">joiningReport</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.joiningReport}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">AppointmentLetterEmail</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.AppointmentLetterEmail}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">inductionLetter</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.inductionLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">criminalRecordVerifcation</h5>
                            {
                                    employee.joiningDocuments.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.criminalRecordVerifcation}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    Service History
                    <div className="container">
                      <div className="row">
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">ExtensionOfProbationLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.ExtensionOfProbationLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">confirmationLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.confirmationLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">transferLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.transferLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">incrementLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.incrementLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">chargeSheetLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.chargeSheetLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">promotionLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.promotionLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">SuspensionLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.SuspensionLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">warningLetter</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.warningLetter}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">SeparationDocument</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.SeparationDocument}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      <div class="col-sm-6 mb-5">
                        <a class="card card-transition" href="#">
                          <div class="card-body">
                            
                            <h5 class="card-title">consfirmationReprot</h5>
                            {
                                    employee.serviceHistory.map((prejoining,index)=>{
                                      return(
                                        <>
                                          <DocumentViewer
                                          url={prejoining.consfirmationReprot}
                                          viewer="url"
                                          style={{ width: '100%', height: '50vh' }}
                                          >
                                          </DocumentViewer>
                                        </>
                                      )
                                    })
                            }

                          </div>
                        </a>
                      
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
           </div>
                        
                        
            
                        
                  </>
                  )
                        
                        
              })
                                                    
            }
          
              </div>
                        </>:
                        <>
                        
                        </>
                      }
                          
                  </div>      
           
              </div>
             </div>
          </div>
        </div>
      </div>
    

   
      </>
  )
}

export default CLientSideOcr