import React, { Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Navbar from './components/CustomNavbar';
import Column from './components/Column';
import SampleProjects from './components/sampleProjects';
import Footer from './components/Footer';
import Card from './components/card';


function App() {

  const mystyle = {
    color: "forestgreen",
    padding: "10px",
    fontFamily: "Cambria"
  };
  return (
     <React.Fragment>
       <Navbar />
        <Home />
          <div>
            <h2 style={{color:"forestgreen", fontFamily:"Cambria"}} align="center"> Here's what we offer </h2>
          </div>
        <Column />
        
        <div className="paragraph">
            <h2 style={{color:"forestgreen", fontFamily:"Cambria"}} align="center"> Our Mission </h2>
               <p style={mystyle} align="center"> FaShCoP is here to try and bridge the gap between farmers and agro 
               stakeholders/investors. <br/> 
              Funding is a serious challenge to Cameroonian farmers. <br /> Our mission is to help farmers all around the country
               find investment/funding for their farm projects,<br /> by connecting them to people and organizations 
               willing to invest in agriculture.<br /> It is also our mission to ensure that investors find the right farm projects
               in which to invest their money <br/> 
               </p> 
               <h4 style={{color:"forestgreen", fontFamily:"Cambria"}} align="center"> Why FaShCoP?</h4>
               <p style={mystyle} align="center" > FaShCoP is the perfect platform for every Cameroonian farmer to find funding for 
               their projects; <br /> irrespective of their ethnic, educational or professional backgrounds.
               Even the least educated farmers<br /> 
               can conveniently make use of FaShCoP, to register their projects and attract investors from all over the country,<br /> 
               Beginning from Cameroon. Even Investors will enjoy FaShCoP, as we provide the simplest and most efficient way to <br />
               explore a good variety of farm projects from Cameroon, which could be really fertile grounds for their money.<br />
               <br />
               <br />
               </p>
         </div>
         <div>
         <h2 style={{color:"black", fontFamily:"Cambria", marginLeft: "20px"}} align="center"> 
         Explore hundreds of Farm projects from Camerooon 
         </h2>
         </div>
         <SampleProjects />
         <Footer />
     </React.Fragment>
  );
}

export default App;
