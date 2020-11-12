import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {

  React.useEffect(() => {
    if  (localStorage.getItem('jwt')=== null) {
      console.log('frf')
      props.handleLoginPopupClick();
    } else {
      props.setMainPage(false)
    }
  });

  return (
    <Route>
    {
      ()=> localStorage.getItem('jwt') ? <Component {...props} /> : <Redirect to="./" />
    }
  </Route>
)}

export default ProtectedRoute;