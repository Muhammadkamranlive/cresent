import AddJoiningDoc from "./AddjoningDocuments";
import AddPersonal from "./Addpersonal";
import AddPrejoiningDocuments from "./AddPreJoiningDocumetns";
import Addworkhistory from "./AddworkHistroy";
import SideNav from "./SideNav";
import React,{useState} from 'react';
function AddProfile() {
    const [close,setClose]=useState(false);
    const [classes,setclass]=useState('');
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


     <div className="container-fluid ">
         <div className="row">
         <div className="d-flex justify-content-between">
          <button onClick={side} className="btn btn-default mb-3"><i className="fa fa-bars"></i></button>
        
            <h6 className="text-primary text-center py-4 ">Add Employees</h6>
            </div>
             <div className={close?'d-none':'col-sm-2'}>
                 <SideNav add="act"/>
             </div>
             <div className={close?'col-sm-12':'col-sm-10'}>
            <div className="container px-5 bg-light">
                <div className="row">
                    
                    <div className="col-sm-12">
                    <nav className="justify-content-center">
                    <div class="nav nav-tabs nav-pills" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Employee Profile</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Pre-Joining Documents</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Joining Documents</button>
                        <button class="nav-link" id="nav-service-tab" data-bs-toggle="tab" data-bs-target="#nav-service" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Service History Documents</button>
                    </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                     <AddPersonal/>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <AddPrejoiningDocuments/>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <AddJoiningDoc/>
                    </div>
                    <div class="tab-pane fade" id="nav-service" role="tabpanel" aria-labelledby="nav-service-tab">
                      <Addworkhistory/>
                    </div>
                    </div>
                      
                    </div>
                </div>
            </div>
             </div>
         </div>
     </div>


    
    

    );
}

export default AddProfile;
