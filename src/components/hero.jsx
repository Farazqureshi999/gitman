import React from 'react'
import {FaCalendarAlt} from 'react-icons/fa'
import {GithubContext} from '../context/context'

function Hero() {
    const {githubUser} = React.useContext(GithubContext);
    const {name,avatar_url,twitter_username,created_at} = githubUser;
    return (
        <div className="wrapper">
 <div className="hero-outer">
            <div className="hero-inner">
                <img src={avatar_url} alt="avatar-img2" className="img-fluid"/>
    <h4>{name}</h4>
    <h6><a target="_blank" rel="noopener noreferrer" href="https://www.google.com">@{twitter_username}</a></h6>
                <div className="d-flex justify-content-centet align-items-center">
                    <p className="icon"><FaCalendarAlt className="icon-sm"/></p>
    <p>Joined: {created_at.slice(0,10)}</p>
                </div>
                
            </div>
            
        </div>
        
      
        </div>
       
    )
}

export default Hero;
