import React from 'react'
import Img from '../images/main1.png'
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="login-wrapper">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <div className="intro-wrapper">
                        <img src={Img} alt="main" />
                        <h1>Gitman</h1>
                        <p>Find information about Github User</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-wrapper">
                        <h1>About This 
                        Project</h1>
                        <p>A React Based Web Application used to search Github User profiles  and Repositories. </p>
                            <ul className="about-list mb-2">
                                <li>User can Search Popular Developer Repositories</li>
                                <li>User can check Repositories, Gist, Followers , Following counts.</li>
                                <li>User can View Repositories and sort by Stars and Forks</li>
                                <li>User Can View Popular Repositories and Languages in Beautiful Chart Illustrations</li>

                            </ul>
                            <p>Framework and Api Used in this project:</p>
                        <div className="row">
                            <div className="col-6">
                                <ul className="about-list">
                                    <li>React</li>
                                    <li>React Hooks</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Bootstrap</li>
                                    <li>Auth0</li>
                                </ul>
                            </div>
                            <div className="col-6">
                            <ul className="about-list">
                                    <li>Context APi</li>
                                    <li>github search API</li>
                                    <li>Fusion Charts</li>
                                    <li>Axios</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                    <button onClick={() => loginWithRedirect()} className="btn btn-primary btn-custom-lg">Login/ Signup</button>
                </div>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Login
