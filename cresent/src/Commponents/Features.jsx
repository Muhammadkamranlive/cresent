import React from 'react'

const Feature = () => {
    return (  
        <>
        
        <div class="container-fluid mb-5">
            <div class="row" >
            <div class=" col-md-6   " >
            <div class=" mb-1 mt-5 mb-md-0">
             <img  src='side.png'  className='img-fluid animate12' alt="Image Description"/> 
            </div>
            </div>
            

            <div class="col-md-6">
              <div class="p-md-5 p-lg-7">
               
                <div class="mb-4 mb-sm-7">
                  
                  <h3>Hard backlog data processor </h3>
                  <p>Key features of this software</p>
                </div>
              

                <div class="row mb-sm-5">
                  <div class="col-sm-6 col-md-12 col-lg-6">
                   
                    <ul class="list-checked list-checked-primary mb-0">
                      <li class="list-checked-item">Authentication</li>
                      <li class="list-checked-item">User role Management</li>
                      <li class="list-checked-item">Employ Profile managment </li>
                     
                    </ul>
                   
                  </div>
             

                  <div class="col-sm-6 col-md-12 col-lg-6">
                 
                    <ul class="list-checked list-checked-primary mb-0">
                      <li class="list-checked-item">Employ Profile Management in smart way</li>
                      <li class="list-checked-item">Prevention of missing documents </li>
                      <li class="list-checked-item">Document Detection</li>
                      <li class="list-checked-item">Batch Processing</li>
                    </ul>
                   
                  </div>
                 
                </div>
               

                <a class="btn btn-primary shadow-lg" href="#">Explore all Services </a>
              </div>
            </div>
           
          </div>
      
        </div>
      
        </>
    );
}
 
export default Feature;