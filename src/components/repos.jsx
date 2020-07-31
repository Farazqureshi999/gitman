import React from 'react'
import Repo from '../components/repo'
import {GithubContext} from '../context/context'
function Repos() {
    const {githubRepos} = React.useContext(GithubContext);
    // console.log(githubRepos)
    return (
        <div className="repo-card">
            <div className="info-card-header">
                <h4>Repositories</h4>
               
            </div>
            <div className="info-card-body">
              <div className="repo-scroll">
              {githubRepos.map((item,index)=>{
                  return(
                    <Repo key={index} {...item}/>
                  )
              })}

              </div>
            </div>
        </div>
    )
}

export default Repos
