import React from 'react';
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...props  }) => {
  //props.setRedirect(true)

  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect
        to={{
          pathname: "/",
          state: { referrer: true }
        }}
      /> 
      }
    </Route>
)}

export default ProtectedRoute;

//<Redirect to="./" redirect={true} />