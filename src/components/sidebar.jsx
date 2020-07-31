import React from 'react'
import SideHeader from '../components/sideheader'
import Search from '../components/search'
import {FaFacebookSquare,FaLinkedin,FaGithubSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function sidebar() {
    return (
        <div className="sidebar-outer">
            <div className="sidebar-inner">
                
                    <SideHeader/>
                
                <Search/>
                <div className="sidebar-footer">
                    <h2>About Developer</h2>
                    <p>I’m <span>FARAZ QURESHI</span> ,WordPress | Front End Developer with 2 + years of functional experience designing and managing business websites. Skilled in front-end development and implementing themes and plugins. Successfully creates attractive and user-friendly websites to meet the client's expectations. </p>
                    <div className="social-block">
                        <ul className="social-links">
                            <li className="social-links-item"><a target="_blank" href="https://www.facebook.com/farazqureshi999" rel="noopener noreferrer"><FaFacebookSquare className="social-icons"/></a></li>
                            <li className="social-links-item"><a  href="mailto:farazqureshi311@gmail.com" rel="noopener noreferrer"><MdEmail className="social-icons"/></a></li>
                            <li className="social-links-item"><a target="_blank" href="https://www.linkedin.com/in/faraz-qureshi999" rel="noopener noreferrer"><FaLinkedin className="social-icons"/></a></li>
                            <li className="social-links-item"><a target="_blank" href="https://github.com/Farazqureshi999" rel="noopener noreferrer"><FaGithubSquare className="social-icons"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sidebar
