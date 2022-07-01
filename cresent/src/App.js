import {useEffect } from 'react';
import Routing from './Routes/Routing';
import { myapp} from "./config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch } from "react-redux";
import { saveUser } from "./redux/slice/authSlice";
import {userObject} from "./redux/slice/userSlice";
function App() {
  const auth = getAuth(myapp);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        dispatch(userObject(user));
        user.getIdToken().then((token) => {
          dispatch(saveUser(token));
        }).catch((err) => {
          console.log(err);
        })
        
      } else {
        dispatch(saveUser(undefined));
        dispatch(userObject(undefined));
      }
    });
  }, [auth, dispatch]);
  
  return (
      <>
  
       
          <Routing/>
        

       
      </>
  );
}

export default App;
