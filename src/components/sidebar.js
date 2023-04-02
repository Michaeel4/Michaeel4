import * as React from 'react';

import './sidebar.css';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import logo from './html1.png'; // with import
import vs from './icon.png'; // with import
import t from './t.png'; // with import
import json from './json-file.png';
import {VscFiles, VscGithub,VscFileCode, VscExtensions  } from "react-icons/vsc";
import  Me  from './me';


// sidebar navbar component


class SideBar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      activeLink: "Me",
      showSideBar2: true,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    this.setState((prevState) => ({
      sidebarVisible: !prevState.sidebarVisible
    }));
  }
  generateLineNumbers(content) {
    let lines = 0;
  
    if (typeof content === 'string') {
      lines = content.split('\n').length;
    } else if (React.isValidElement(content)) {
      // Set the default number of lines for non-string content
      lines = 43;
    } else {
      return '';
    }
  
    let lineNumbers = '';
    for (let i = 1; i <= lines; i++) {
      lineNumbers += i + '\n';
    }
    return lineNumbers;
  }
  
  
  
  render(){
    let content;
    if (this.state.activeLink === "Me") {
      content = Me();
    } else if (this.state.activeLink === "Projects") {
      content = <h1>Projects</h1>;
    } else if (this.state.activeLink === "Contact") {
      content = <h1>Contact Me</h1>;
    
    }

    const lineNumbers = this.generateLineNumbers(content);


    
    const { sidebarVisible } = this.state;
    const containerClass = this.state.sidebarVisible ? "container with-sidebar" : "container without-sidebar";
    return(
      
      <div className={containerClass}>
        <nav id="navbar" class="">
  <div class="nav-wrapper">
    <div class="logo">

    <a href="#home"><i class="fas fa-chess-knight"></i>
      <img src={vs} alt="" className='img3' /> </a>
      <a href="#home"><i class="fas fa-chess-knight"></i> File</a>
      <a href="#home"><i class="fas fa-chess-knight"></i> Edit</a>
      <a href="#home"><i class="fas fa-chess-knight"></i> View</a>
      <a href="#home"><i class="fas fa-chess-knight"></i> Go</a>
      <a href="#home"><i class="fas fa-chess-knight"></i> Run</a>
      <a href="#home"><i class="fas fa-chess-knight"></i> Window</a>
    </div>
   
    <ul id="menu">
      <li><a href="#home">Michael Lenort | VSCode Portfolio 2023</a></li>
    </ul>
  </div>
</nav>



                  
      <ul className="sidebar">
      <li><span onClick={() => this.toggleSidebar()}><h2><VscFiles /></h2></span></li>  
            <li><span> <a href="https://github.com/Michaeel4/"></a>     <h2><VscGithub /> </h2></span></li>
       <li><span>      <h2><VscFileCode /> </h2></span></li>
       <li><span>      <h2><VscExtensions /> </h2></span></li>
      </ul>
      {this.state.sidebarVisible ?           
      <ul className="sidebar2">
       <h3>Explorer</h3>
       <a href="#" onClick={() => this.setState({ activeLink: "Me" })}> <li > <span><img src={logo} className="img2"></img> me.html</span></li></a>
       <a href="#" onClick={() => this.setState({ activeLink: "Projects" })}> <li > <span><img src={t} className="img2"></img> projects.js</span></li></a>
       <a href="#" onClick={() => this.setState({ activeLink: "Contact" })}> <li > <span><img src={json} className="img2"></img> contacts.json</span></li></a>
       <li><span>github</span></li>
      </ul>

      :
      <span></span>
  }
      <div className="content">
      <div className="editor-container">
      
      <pre className="line-numbers">
            {lineNumbers}
          </pre>
          <pre className="code-content">
            {content}
          </pre>


       


      </div>
      </div>





      <div id="navbar1" class="">
      <div class="left">
        <div className="green">
    <a href="#">Home</a>
    </div>
    <a href="#">master</a>
    
  </div>
  <div class="right">
    <a href="#">Line 42, Col 25</a>
    <a href="#">Spaces: 2</a>
    <a href="#">UTF-8</a>
    <a href="#">LF</a>
    <a href="#">{} C++</a>



  </div>
        

      </div>
     
     
</div>


    );
  }
}


export default SideBar;