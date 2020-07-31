import React from 'react'
import {GithubContext} from '../context/context'
const Search = () => {
    const [user,setUser] = React.useState("");
    const {searchUser,request,error,isLoading} =React.useContext(GithubContext);
  
    const handRequest =(e)=>{
        e.preventDefault();
        console.log(request);
       if(user){
        searchUser(user);
       }
    }
    return (
        <div className="search-block">
            {error.show && 
          <p className="text-light">{error.msg}</p>
        }
            <form onSubmit={handRequest}>
                <input type="text" className="form-control custom-input" placeholder="Enter Github Username" value={user}  onChange={(e)=>{setUser(e.target.value)}}/>
                {request > 0 && !isLoading && <button type="submit" className="btn btn-primary btn-custom-block" >Search</button>}
            </form>
            <p className="request-label">Requests: {request} / 60</p>
        </div>
    )
};

export default Search
