import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // fa-solid fa-sun-bright text-dark
  const [starColor, setStarColor] = useState('fa-solid fa-moon text-primary');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleSwitch = () => {
    if(mode === 'light'){
      setMode('dark');
      setStarColor('fa-solid fa-moon text-light');
      document.body.style.backgroundColor = '#072239';
      showAlert("Light Mode is on", "success")
    } else {
      setMode('light');
      setStarColor('fa-solid fa-sun text-primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode is on", "success")

    }
  }



  return (
      <>
        <Router>
          <div className="App">
            <NavBar heading="ProPixel" mode={mode} toggle={toggleSwitch}  color={starColor} />
            <Alert alert={alert} />
            <Routes>
              <Route path="/about" element={<About mode={mode} />}>
              </Route>
              
              <Route path="/" element={<TextForm heading="Magic Form" mode={mode} showAlert={showAlert} />}>
              </Route>
            </Routes>

            
          </div>
        </Router>
      </>
  );
}

export default App;
