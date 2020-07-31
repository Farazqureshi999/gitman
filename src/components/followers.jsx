import React from 'react'
import Follower from '../components/follower'
import {GithubContext} from '../context/context'
function Followers() {
    const {githubFollowers} = React.useContext(GithubContext);
//    console.log(githubFollowers)
    return (
        <div className="info-card">
            <div className="info-card-header">
                <h4>Followers</h4>
               
            </div>
            <div className="info-card-body">
                <div className="followers-list">
                   {githubFollowers.map((item,index)=>{
                       return(
                        <Follower key={index} {...item}/>
                       )
                   })}
                </div>
         
            </div>
        </div>
    )
}

export default Followers
