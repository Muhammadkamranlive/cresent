import React from 'react'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import AddProfile from '../Commponents/Admin/AddProfile'
import CLientSideOcr from '../Commponents/Admin/CLientSideOcr'
import Dashbaord from '../Commponents/Admin/Dashbaord'


import SearchEmployee from '../Commponents/Admin/SearchEmployee'
import UpdateAllDoc from '../Commponents/Admin/UpdateAllDoc'
import Register from '../Commponents/Auth/Register'
import Authentication from '../Commponents/Authentication'
import Employee from '../Commponents/Employee'

import Footer from '../Commponents/Footer'
import Home from '../Commponents/Home'
import PasswordRest from '../Commponents/Pages/PasswordRest'
import Profilecard from '../Commponents/Profilecard'
import ProfileDetail from '../Commponents/ProfileDetail'
import ProtectedRoute from '../utils/ProtectedRoute'
import SuperAdmin from '../utils/SuperAdmin'

function Routing() {
    return (
        <div>
   
        
         <Switch>
          
            <Route exact path="/"  >
              <Home/>
              <Footer/>
            </Route>
             <SuperAdmin exact path="/search"  component={SearchEmployee
           
              } />
              
            <ProtectedRoute exact path="/employee"  component={Employee}/>
            <Route exact path="/login" >
              <Authentication/>
            </Route>
           
            <Route exact path="/register"  >
             <Register/>
            </Route>
            <SuperAdmin exact path="/admin" component={Dashbaord}   />
              
            
            <Route exact path="/reset"  >
             <PasswordRest/>
            </Route>
            <SuperAdmin exact path='/viewall' component={Profilecard} />
            <SuperAdmin exact path='/addemp' component={AddProfile}/>
            <SuperAdmin exact path='/updateAlldoc'component={UpdateAllDoc} />
               
            
            <SuperAdmin exact path='/client-search' component={ CLientSideOcr}/>
             <Route exact path='/viewid/:id' component={ ProfileDetail} />
            
            <Redirect to="/"/>
            
           </Switch> 
       
          
        </div>
    )
}

export default Routing


