import React from "react";
import image from "./sci.png";
import {NavLink} from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
    return(
        <>
         <section id="header" className="d-flex align-items-center">
            <div className="container-fluid ">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            
                            <h1>
                               Join to Make <strong className="brand-name">Fantasy</strong> Into <strong className="brand-name">Reality</strong> 
                            </h1>
                            <h2 className="my-3">
                                Change the Flow Of Future
                            </h2>
                            <div className="mt-3">
                                <NavLink to="/Service" className="btn-get-started ">
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                                <br/>
                                <br/>
                                
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={image} className="img-fluid animated" alt="home img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br />
        <Footer />
        </>
    );
};


export default Home;
