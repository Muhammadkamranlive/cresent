import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SideNav from './Admin/SideNav';
import Navbar from './Navbar';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
function Profilecard() {

    const [employee,setemployee]=useState([]);
    const [loading,setLoading]=useState(false);
    const [close,setClose]=useState(false);
    const [classes,setclass]=useState('');
    const [error,setError]=useState(false);
    //fetch employees
    const user=useSelector(state=>state.auth.value);
    console.log(user);
    useEffect(()=>{
        const fetchEmployee=()=>{
            try {
             setLoading(true);
              axios.get('http://localhost:5000/api/employees/',{
                 headers:{
                     'authorization':user
                 }
             }).then(res=>{
                 setemployee(res.data);
                 setLoading(false);
             }).catch(err=>{
                 setError(err.response.data.message);
                 setLoading(false);
             });
            
            } catch (error) {
                 setError(true);
            }
     }
        fetchEmployee()
       
    },[user]);
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

    return <>
          <Navbar/>
            <div className="container-fluid " >
               
               <div className="row">
               <div className="d-flex justify-content-between">
                      <button onClick={side} className="btn btn-default mb-3"><i className="fa fa-bars"></i></button>
        
                       <h3 className="text-primary text-center ">Employees</h3>
                      </div>
                <div className={close?'d-none':'col-sm-2'}>
                  <SideNav view="act" />
                </div>
                <div className={close?'col-sm-12':'col-sm-10'}>
               
                  <div className="row bg-light">
                    
                   {
                       loading?
                       <>
                          <div className="col-md-12 text-center">
                            <img src="loading.gif" className='img-fluid'  alt="" />
                          </div>
                       </>:
                          employee.map(emp=>{
                            return (
                                
                                <div className="col-md-4 p-3">
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
                                        
                                        <Link to={`/viewid/${emp._id}`} className="btn btn-primary">View Profile</Link>
        
                                    </div>
                                </div>
                           </div>
                            )
                            
                       
                    })
                    }
               
                  
                   </div>
                </div>
               </div>
               </div>
              
            </>
       
}

export default Profilecard;
