import { useEffect, useState } from "react";
import { doc, getDoc,query,collection } from "firebase/firestore";
import {storage,db} from "../../config.js";
function Users() {
    const [users, setUsers] = useState([]);
    const getData = async () =>{
      const data = await query(db,'users');
      setUsers(data);
    }
    
    console.log("users"+users);
    useEffect(() => {
        getData();
    },[])
   
    return ( 
        <>
  <div className='card table-responsive'>
 <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">Sr#</th>
      <th scope="col">Profile</th>
      <th scope="col">Name</th>
 
   
      <th scope="col">email</th>
      <th scope="col">Employee#</th>
  
    </tr>
  </thead>
  <tbody>

     
    {
      users.map((list,index)=>{
        return(
          <tr>
          <th scope="row">{index+1}</th>
           <td>
               <img src={list.url} alt="" className="avatar" />
           </td>
           <td>
               {
                   list.firstName
               }

               {
                   list.lastName
               }
           </td>
              <td>{list.phone}</td>
               
                <td>{list.userType}</td>
                <td>{list.employeeNumber}</td>
          
        </tr>
        )
      })
    }
   
    
  </tbody>
     </table>
  </div>
        </>
     );
}

export default Users;