import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";






const Cont = () => {
    
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_tf6g0vg', e.target, 'user_A622GsdQxsdLX8Ut35nTd')
      .then((result) => {
          console.log(result.text);
          alert("")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
};


    return(
        
        <form onSubmit={sendEmail} className="forms" >
            <br />
            <br />
            <h1>Contact Us 📲</h1>

            <label>Name</label>
            <input placeholder="Name" type="text" name="name" required/>

            <label>Email</label>
            <input placeholder="Email" type="email" name="email" required/>
            <label>Mobile Number</label>
            <input placeholder="Mobile No." type="number" name="subject" required/>


            <label>Message</label>
            <textarea placeholder="Message" name="message" required>
            </textarea>

            <button type="submit">Submit</button>
            <br/>
          

        </form>
        
    );
};



export default Cont;
