import React from 'react'
import {GoRepo} from 'react-icons/go'
import {FaUserFriends} from 'react-icons/fa'
import {RiUserFollowLine,RiFileCodeLine} from 'react-icons/ri'
import {GithubContext} from '../context/context'

function Counter() {
    const {githubUser} = React.useContext(GithubContext);
    const {followers,public_gists,public_repos,following} = githubUser;
    return (
        <div className="counter-wrapper">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="counter-box">
                        <div>
                            <GoRepo className="icon-lg" />
                        </div>
                        <div>
    <h4>{public_repos}</h4>
                            <p>Repos</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                <div className="counter-box">
                        <div>
                            <FaUserFriends className="icon-lg"/>
                        </div>
                        <div>
                            <h4>{followers}</h4>
                            <p>Followers</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                    <div className="counter-box">
                        <div>
                            <RiUserFollowLine className="icon-lg"/>
                        </div>
                        <div>
                            <h4>{following}</h4>
                            <p>Following</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                    <div className="counter-box">
                        <div>
                            <RiFileCodeLine className="icon-lg"/>
                        </div>
                        <div>
                            <h4>{public_gists}</h4>
                            <p>Gists</p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Counter
