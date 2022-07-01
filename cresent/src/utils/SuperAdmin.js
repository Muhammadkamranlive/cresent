import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

const SuperAdmin = ({ component: Component }) => {
  const userObject = useSelector((state) => state.user.value);
  console.log("user###########", userObject);
  return (
    <Route
      render={(props) => {
        if (userObject && userObject.displayName==="admin") {
          return <Component {...props} />;
        } 
        
        else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default SuperAdmin;
