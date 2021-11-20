import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return(
        <>
                      <div class="col-md-4 col-10 mx-auto">
                            <div class="card">
                                <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                                    <div class="card-body">
                                        <h5 class="card-title font-weight-bold"> {props.title} </h5>
                                            
                                                <NavLink to="#" class="btn btn-primary">
                                                    Click Here
                                                </NavLink>
                                    </div>
                            </div>
                        </div>
        </>
    );
};


export default Card;
