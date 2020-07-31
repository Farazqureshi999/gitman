import React from 'react'
import {FaExternalLinkAlt, FaLink, FaGlobe, FaBuilding} from 'react-icons/fa'
import {GithubContext} from '../context/context'

function Info() {
  const {githubUser} = React.useContext(GithubContext);
  const {html_url,bio,company,location,blog} = githubUser;
    return (
        <div className="info-card">
            <div className="info-card-header">
                <h4>USER INFO</h4>
                <a href={html_url}><FaExternalLinkAlt className="external-icon"/></a>
            </div>
            <div className="info-card-body">
    <p>{bio}</p>
                <ul className="info-list">
                    <li className="info-list-item">
                      <FaBuilding className="icon-list"/>
    <p>{company}</p>
                    </li>
                    <li className="info-list-item">
                      <FaGlobe className="icon-list"/>
                      <p>{location}</p>
                    </li>
                    <li className="info-list-item">
                      <FaLink className="icon-list"/>
                      <p><a href={`https://${blog}`}>{blog}</a></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info
