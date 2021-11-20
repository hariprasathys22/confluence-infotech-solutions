import React from "react";
import { NavLink } from "react-bootstrap";
import hari from "./hp.png";



const Card1 = (props) => {
    return(
        <>
                      <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={hari} class="card-img-top" alt="Hariprasath Y S" />
                                    <div class="card-body">
                                        <h3 class="card-title font-weight-bold">Hariprasath Y S</h3>
                                            <h6 class="card-text">Full Stack Developer</h6>
                                                <NavLink to="Abt.jsx" class="btn btn-primary">
                                                    Details
                                                </NavLink>
                                    </div>
                            </div>
                        </div>
        </>
    );
};


export default Card1;
