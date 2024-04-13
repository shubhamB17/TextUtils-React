 
import './App.css';
import Navbar from './Components/Navbar';
import IndexForm from './Components/IndexForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, 
  Route,
  Routes 
} from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null);
    },1000);
  }
  const toggleMode=()=>
  {
    if(mode==='light'){
    setMode("dark")
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode is enable","Success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("light mode is enable","Success");
    }
  }
  return (
    <>
    <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>
   <Alert alert={alert}/>
   <div className="container my-3" >
   <Routes>
          <Route exact path="/About"element={<About/>}/>
          <Route exact path='/'element={<IndexForm showAlert={showAlert} heading="Enter Your Text To Analyze " mode={mode}/>}/>
          <Route exact path="/Contact"element={<Contact/>}/>
   </Routes>
   </div>
   </Router>
   
   </>
    
  );
}

export default App;
