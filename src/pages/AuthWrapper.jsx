import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/loading.gif';
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <img src={loadingGif} alt='spinner' />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return <>{children}</>;
}



export default AuthWrapper;