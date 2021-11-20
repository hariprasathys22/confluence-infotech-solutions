import React from 'react';


const Footer = () =>{
    return(
        <>
        <footer>
        <div class="mummy">
       <div class="footer_info">
          <div class = "footer_width about">
              <h2>About Us</h2>
              <p>We are Confluence Infotech Solution, a small but motivated company specializing in Web development, App development, Graphical Designing, UI/UX designing, Digital Marketing and Logo Making. </p>
              
          </div>
          <div class = "footer_width link">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="/">Home</a> </li>
                <li><a href="/service">Services</a> </li>
                <li><a href="/about">About</a> </li>
                <li><a href="/contact">Contact</a> </li>
              </ul>
          </div>
          <div class = "footer_width contact">
              <h2>Contact</h2>
              <ul>
                <li>
                  <p>
                    Address:<br />
                    Sheebha Nagar, Sangothipalayam, Kaniyur, Coimbatore, 641 659.
                  </p>
                </li>
                <li>
                  <a href="mailto: confluenceinfotechsolutions@gmail.com">confluenceinfotechsolutions @gmail.com</a>
                </li>
                <li>
                  <a href="tel: +91 8754215198">+91 8754215198</a>
                </li>
              </ul>
          </div>
        </div>
        <div class="copy-right">
          <p>© COPYRIGHT 2021 CONFLUENCE INFOTECH SOLUTIONS ALL RIGHTS RESERVED</p>
        </div>
        </div>
</footer>

        </>
    );
};

export default Footer;