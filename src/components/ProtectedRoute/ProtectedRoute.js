import React from 'react';
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...props  }) => {

  React.useEffect(() => {
    console.log(props.loggedIn)
    if (!props.loggedIn) {
      props.handleLoginPopupClick();
    }
  });

  return (
    <Route>
    {
      props.loggedIn ? <Component {...props} /> : <Redirect to="./" />
    }
  </Route>
)}

export default ProtectedRoute;