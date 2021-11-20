import React from "react";
import image from "./22.png";
import Footer from "./Footer";







const About = () => {
    return(
		
        <>
         <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					
					<p>We are Confluence Infotech Solution, a small but motivated company specializing in Web development, App development, Graphical Designing, UI/UX designing, Digital Marketing and Logo Making. We believe passionately in great bargains and excellent service, which is why we commit ourselves to giving you the best of both. If you’re looking for something new, you’re in the right place. We strive to be industrious and innovative, offering our customers something they want, putting their desires at the top of our priority list.</p>
					<div class="button">
						<a href="/Employee">Employers</a><br/><br/><br/>
                        <a href="">Projects</a>
					</div>
				</div>
				
			</div>
			<div class="image-section">
				<img src={image} />
			</div>
		</div>
	</div>
	<br />
	<br/>
	<br/>
	<br />
	<br/>
	<br/>
	<br />
	<br/>
	<br/>
	<br/>
	<Footer />
        </>
		 
		
        
    );
};

export default About;
