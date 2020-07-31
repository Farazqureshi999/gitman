import React from 'react'
// import Img from '../images/avatar-img3.png'

function follower({login,avatar_url,html_url}) {
    // console.log(prop)
    return (
        <div className="follower-box">
            <img src={avatar_url} alt="avatar3" className="img-fluid"/>
                <div className="ml-2">
                    <h4>{login}</h4>
                    <p>{html_url}</p>
                </div>
        </div>
    )
}

export default follower
