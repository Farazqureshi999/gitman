import React from 'react'
import Img from '../images/404.png';
import {Link} from 'react-router-dom'
function Error() {
    return (
        <div className="Error-main">
            <img src={Img} alt="404" className="img-fluid"/>
            <p>Sorry, The Page You Tried Cannot Be Found</p>
            <Link className="btn btn-primary btn-custom-lg" to="/">Back to Home</Link>
        </div>
    )
}

export default Error
