import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {Switch, Route, Redirect} from "react-router-dom";
import Monal from "./Monal"
import Abt from "./Abt";
import Employee from "./Employee";
import Ganesh from "./Ganesh";
import Ami from "./Ami";
import Kiruba from "./Kiruba";
import Selva from "./Selva";
import Kaviyan from "./Kaviyan";
import Sandhosh from "./Sandhosh";
import Kavin from "./Kavin";
import Gayathri from "./Gayathri"
import doubleh from "./doubleh";
import Shruthick from "./Shruthick";



const App= () =>{
  return (
    <>
    <Navbar />
    
   
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/Abt" component={Abt} />
    <Route exact path="/Employee" component={Employee} />
    <Route exact path="/Ganesh" component={Ganesh} />
    <Route exact path="/Ami" component={Ami} />
    <Route exact path="/Kiruba" component={Kiruba} />
    <Route exact path="/Monal" component={Monal} />
    <Route exact path="/Selva" component={Selva} />
    <Route exact path="/Kaviyan" component={Kaviyan} />
    <Route exact path="/Kavin" component={Kavin} />
    <Route exact path="/Gayathri" component={Gayathri} />
    
    <Route exact path="/Sandhosh" component={Sandhosh} />
    <Route exact path="/Doubleh" component={doubleh} />
    <Route exact path="/Shruthick" component={Shruthick}/>
    <Route exact path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />
    
    <Redirect to="/" />    
    </Switch> 
    
     
    
    
 
    </>
  );
}
export default App;
