import React from 'react'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import {GithubContext} from '../context/context'
import load from '../images/loading.gif'
function Dashboard() {
    const {isLoading} = React.useContext(GithubContext);
    return (
       <div className="dashboard-outer">
           <div className="row no-gutters mob-navbar">
               <div className="col-xl-4 mob-nav col-12">
                <Sidebar/>
               </div>
             <div className="col-xl-8 col-12">
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
