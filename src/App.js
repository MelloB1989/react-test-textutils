//import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [btntxt, setBtnText] = useState('Dark Mode')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      Navbar.border.style.color = 'white'
      setBtnText('Light Mode')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setBtnText('Dark Mode')
    }
  }

  return (
    <>
    <Navbar toggleMode={toggleMode} mode={mode} btntxt={btntxt}/>
    <Alert alert={alert}/>
    <div className="container my-2">
    <TextArea title="Enter Text" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
  /*

    <Routes>
        <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TextArea title="Enter Text" mode={mode} showAlert={showAlert}/>}>
          </Route>
    </Routes>
    
  */
}

export default App;
