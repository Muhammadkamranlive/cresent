import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
function Table() {
  
  const [employee, setEmployee] = useState([]);
  const [error, setError] = useState('');

 
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const user=useSelector(state=>state.auth.value);
 //write function to find the employee by employee number first name or last name or email or phone number
  const findEmployee = async () => {
    
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      
      const url = 'http://localhost:5000/api/employees/';   
      try {
          const response = await axios.get(url,  {
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
    return <div className='card table-responsive'>
 <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">Sr#</th>
      <th scope="col">Profile</th>
      <th scope="col">Name</th>
 
      <th scope="col">Phone</th>
      <th scope="col">CNIC</th>
      <th scope="col">Employee#</th>
      <th scope="col">Joing Date</th>
    </tr>
  </thead>
  <tbody>
    {
      employee.map((list,index)=>{
        const now= new Date(list.joiningDate);
        return(
          <tr>
          <th scope="row">{index+1}</th>
          <td><img src={list.profileImage} alt="" className='avatar' /></td>
          <td>{list.firstName} {list.lastName}</td>
          <td>{list.phone}</td>
          <td>{list.Cnic}</td>
          <td>{list.employeeNumber}</td>
          <td>{now.toDateString()}</td>
        </tr>
        )
      })
    }
   
    
  </tbody>
     </table>
  </div>;
}

export default Table;
