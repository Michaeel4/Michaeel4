import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Me from './components/me';
import Projects from './components/ProjectCard';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<Router>
  <SideBar />
  <Routes>
    <Route exact path="/" component={Me} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Routes>
</Router>


    </div>
  );
}

export default App;
