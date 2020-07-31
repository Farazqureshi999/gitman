import React from 'react'
import Img1 from '../images/avatar-img1.png'
import { useAuth0 } from "@auth0/auth0-react";
function Sideheader() {
    const { logout,user,isAuthenticated } = useAuth0();
    console.log(user);
    return (
        <div className="sidebar-header">
           <button onClick={() => logout({returnTo:window.location.origin})} className="btn btn-primary btn-custom-sm">Log out</button>
            {isAuthenticated && (
                 <div className="sidebar-header-detail">
                 <img src={user.picture} alt="avatar-user1" className="img-fluid"/>
                 <p>Welcome!</p>
                 <h4>{user.name}</h4>
             </div>
            )}
            {!isAuthenticated && (
                 <div className="sidebar-header-detail">
                 <img src={Img1} alt="avatar-user1" className="img-fluid"/>
                 <p>Welcome!</p>
                 <h4>FARAZ QURESHI</h4>
             </div>
            )}
        </div>
    )
}

export default Sideheader
