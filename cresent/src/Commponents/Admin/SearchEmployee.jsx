import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
function SearchEmployee() {

    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState('');

   
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const user=useSelector(state=>state.auth.value);
    const auth=useSelector(state=>state.user.value);
   //write function to find the employee by employee number first name or last name or email or phone number
    const findEmployee = async () => {
      
        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);
        const url = 'http://localhost:5000/api/employees/';   
        try {
            const response = await axios.get(url,{
                headers:{
                    'authorization':user
                }
            });
            setEmployee(response.data);
            console.log(response.data);
            setIsLoading(false);
            setIsSuccess(true);

          
        } catch (error) {
            setError('Error occured');
            setIsLoading(false);
            setIsError(true);
        }
    }

useEffect(() => {
 findEmployee();
},[user])
    return ( 
        <>
          {
              isLoading?
              <><div className="alert alert-succes">Loading...</div></>:
              <div className="row">
              <div className="col-sm-3">
                <div className="card shadow-lg" style={{backgroundColor:"rgb(16,57,59)"}}>
                    <div className="d-flex justify-content-around py-2   my-3 ">
                       <h3 className='text-white'>{auth.displayName}</h3>
                       <div className="box text-center">
                           <i className="fa fa-users pt-2" ></i>
                       </div>
                       </div>
                       <div className="d-flex justify-content-around">
                       <p className='text-white' >{auth.email}</p>
                      
                      </div>
                   </div>
               </div>
               <div className="col-sm-3">
               <div className="card shadow-lg orange" >
                    <div className="d-flex justify-content-around py-2  my-3 ">
                       <h3 className='text-white'>{employee.length}</h3>
                       <div className="box text-center">
                           <i className="fa fa-shopping-bag pt-2" ></i>
                       </div>
                       </div>
                       <div className="d-flex justify-content-around">
                       <p className='text-white' >Total Employees</p>
                      </div>
                   </div>
               </div>
               <div className="col-sm-3">
               <div className="card shadow-lg yellow" >
                    <div className="d-flex justify-content-around py-2   my-3 ">
                       <h3 className='text-white'>{employee.length}</h3>
                       <div className="box text-center">
                           <i className="fa fa-gifts pt-2" ></i>
                       </div>
                       </div>
                       <div className="d-flex justify-content-around">
                       <p className='text-white text-align-left' >Active Employees</p>
                      </div>
                   </div>
               </div>
               <div className="col-sm-3">
               <div className="card shadow-lg" style={{backgroundColor:"rgb(53,151,102)"}}>
                    <div className="d-flex justify-content-around py-2   my-3 ">
                       <h3 className='text-white'>{employee.length}</h3>
                       <div className="box text-center">
                       <i class="fa-solid fa-square-person-confined text-white pt-2"></i>
                       </div>
                       </div>
                       <div className="d-flex justify-content-around">
                       <p className='text-white' >Total Database Users</p>
                      </div>
                   </div>
               </div>
               </div>
          }
        </>
     );
}

export default SearchEmployee;