import React from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'
function repo({description,html_url,name}) {
    return (
        <div className="repo-outer">
            <div className="repo-detail">
    <h4>{name}</h4>
    <p>{description}</p>
            </div>
            <a target="_blank" rel="noopener noreferrer"  href={html_url}><FaExternalLinkAlt className="external-icon"/></a>
        </div>
    )
}

export default repo
