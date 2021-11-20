import React from "react";
import amirtha from "./ami.jpeg";





const Ami = () => {
    return(
        <>
           <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>Amirthavarshini S</h1>
                    <h5>Web Developer & Content Writer</h5>
				</div>
                <br/>
                <br/>
				<div class="content">
                <div class="col-md-8 pl-5 about-info">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                   
                    <div class="hpna">       
                <div class="row">
                                        <div class="col-md-6">
                                            <p class="qwe">User ID:</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p>CIS0007</p>
                                        </div>
                </div>
                <div class="row">
                                        <div class="col-md-6">
                                            <p class="qwe">Email:</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p> sivaamirthaa.sv@gmail.com</p>
                                        </div>
                </div>
               
            <div class="row">
                                        <div class="col-md-6">
                                            <p class="qwe">Skills:</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p>HTML, CSS<br/>VBA, Python<br/> Networking</p>
                                        </div>
            </div>
            <div class="row">
                                        <div class="col-md-6">
                                            <p class="qwe">Profession:</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Networking Engineer <br/> Frontend Web Developer<br/>Content Writer<br/> AI Engineer <br/> UI/UX designer</p>
                                        </div>
            </div>
            <div class="row">
                                        <div class="col-md-6">
                                            <p class="qwe">Social Media:</p>
                                        </div>
                                        <div class="col-md-6" id="sd">
                                            <p><a href="https://www.linkedin.com/in/amirtha-varshini-458531223">LinkedIn</a> <br/><a href="https://instagram.com/amirtha_shankar_?utm_medium=copy_link">Instagram</a></p>
                                        </div>
            </div>
            </div>

            
			
					
				</div>
                
				
                </div>
                </div>
                </div>
			</div>
            <br />
			<div class="image-section">
				<img src={amirtha} /><br/>
                <br/>
                <br/>
                <div class="cars">
                    <p>To obtain an entry level position as AI engineer with Cognitive technology allowing me to utilise my education to explore more about artificial intelligence by seeking innovation.</p>
                </div>
            </div>
		</div>
	</div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

        </>
    );
};

export default Ami;
