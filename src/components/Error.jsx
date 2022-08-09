import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../images/errorpic.jpg';

const Error = () => {
    return (
        <>
            <div id='header' className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                                <h1 className='text-uppercase'><strong className='brand-name'>oops!</strong> page cann't found.</h1>
                                <h2 className='my-3'>
                                    Sorry! We cann't recognize this page. Please go back.
                                </h2>
                                <div className='mt-3'>
                                    <NavLink to="/" data-toggle="tooltip" data-placement="top" title="Go back to home page" className="btn-get-started text-uppercase">go back</NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header_img' style={{"textAlign":"right"}}>
                            <img src={photo} className="img-fluid animated" alt="photo1 not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error;
