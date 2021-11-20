import React from "react";
import "./style.css";

const Mental = () => {
  return(
      <>
         <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="images/blog logo2.png" alt="responsive" width="100" height="auto" />
        </a>         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li class="nav-item">
                <a class="nav-link active"  href="#">blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active"  href="https://confluenceinfotechsolutions.in/service">Our Services</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 More
                </a>
                </li>
                </ul>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">SCIENCE</a></li>
                  <li><a class="dropdown-item" href="#">NOVEL</a></li>
              </ul>
          </div>
        </div>
      </nav>

   

      </>
  );
}
export default Mental;