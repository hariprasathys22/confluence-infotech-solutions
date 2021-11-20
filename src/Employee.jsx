import React from "react";
import hari from "../src/ms.jpg";
import Footer from "./Footer";
import ganesh from "./ganesan.jpeg";
import amirtha from "./ami.jpeg";
import monal from "./monals.jpeg";
import selvas from "./zxm.jpeg";
import kavi from "./kav.jpeg";
import kir from "./kir.jpg";
import kavis from "./ksx.jpg";
import gayath from "./gayathr.jpg";
import sand from "./sand.jpeg";
import s from "./s.jpeg";



const Employee = () => {
    return(
        <>
         
        <div className="my-5">
            <h1 className="text-center"> Employees </h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={hari} class="card-img-top" alt="Hariprasath Y S" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Hariprasath Y S</h3>
                                            <h6 class="card-text">CEO & full stack developer</h6>
                                                <a href="/Abt" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={selvas} class="card-img-top" alt="Selvamani M" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Selvamani M</h3>
                                            <h6 class="card-text">Co-founder & UI/ UX Designer</h6>
                                                <a href="/Selva" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={hari} class="card-img-top" alt="Hariharan Y S" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Hariharan Y S</h3>
                                            <h6 class="card-text">PRO & Web Developer</h6>
                                                <a href="/Doubleh" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={ganesh} class="card-img-top" alt="Ganesan N" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Ganesan N</h3>
                                            <h6 class="card-text">Graphical Designer</h6>
                                                <a href="/Ganesh" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={kavi} class="card-img-top" alt="Kaviyan P" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Kaviyan P</h3>
                                            <h6 class="card-text">Web Developer</h6>
                                                <a href="/Kaviyan" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={kavis} class="card-img-top" alt="Kavinkumar" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Kavinkumar D</h3>
                                            <h6 class="card-text">UI/UX Designer</h6>
                                                <a href="/Kavin" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={amirtha} class="card-img-top" alt="Amirthavarshini S" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Amirthavarshini S</h3>
                                            <h6 class="card-text">network engineer & Content Writer</h6>
                                                <a href="/Ami" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={gayath} class="card-img-top" alt="Gayathri A E" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Gayathri A E</h3>
                                            <h6 class="card-text">Web Developer & Content Writer</h6>
                                                <a href="/Gayathri" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={kir} class="card-img-top" alt="Kiruba G" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Kiruba G</h3>
                                            <h6 class="card-text">Web Developer & Content Writer</h6>
                                                <a href="/Kiruba" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={sand} class="card-img-top" alt="Santhosh N" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Santhosh N</h3>
                                            <h6 class="card-text">Digital Marketer</h6>
                                                <a href="/Sandhosh" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={monal} class="card-img-top" alt="Monal P" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Monal P</h3>
                                            <h6 class="card-text">Web developer</h6>
                                                <a href="/Monal" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={s} class="card-img-top" alt="Shruthick S" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Shruthick S</h3>
                                            <h6 class="card-text">Data Analyst</h6>
                                                <a href="/Shruthick" class="btn btn-primary">
                                                    Details
                                                </a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
        
    );
};

export default Employee;
