
import Navbar from './component/Navbar';
// import About from './Components/About';
import './App.css';
import Textform from './component/Textform';
import React,{useState} from 'react';
import Alert from './component/Alert';
function App() {
  
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState("");
  let toggleMode=()=>{
    setmode(mode==='light'?'dark':'light');
    document.body.style.backgroundColor=(mode==='light'?'#343a40':'white');
    if(mode==='light'){
      showAlert("dark mode is enable","success")
      document.title="TextUtils-darkMode"
    }else{
      showAlert("light mode is enable","success")
      document.title="TextUtils-lightMode"
    }  
  }
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setalert(null)},2000);
  }
 
  return (
    <>

<Navbar title="Textutils" mode={mode} toggle={toggleMode}/>
{/* <Navbar about="Aboutus"/> */}
<Alert alert={alert}/>
<Textform mode={mode} showAlert={showAlert} />
{/* <About/> */}
    </>

  );
}

export default App;
