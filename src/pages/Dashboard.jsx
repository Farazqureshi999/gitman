import React from 'react'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import {GithubContext} from '../context/context'
import load from '../images/loading.gif'
function Dashboard() {
    const {isLoading} = React.useContext(GithubContext);
    return (
       <div className="dashboard-outer">
           <div className="row no-gutters">
               <div className="col-lg-4">
                <Sidebar/>
               </div>
             <div className="col-lg-8">
                 {isLoading && (
                     <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                          <img src={load} alt="laoding" className="img-fluid"/>
                    </div>
                 )}
                 {!isLoading && ( <Main/>)}

               
             </div>
           </div>
       </div>
    )
}

export default Dashboard
