
import { useState } from 'react';
import './App.css';
import Main from './componants/Main';

import Navbar from './componants/Navbar';

function App(props) {

  const [darkmode, setdarkmode] = useState("light")
  const toggleMode = () => {
    if (darkmode === 'light') {
      setdarkmode("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"

    } else {
      setdarkmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"



    }
  }
  return (

    <div className="app">
      <Navbar title="TextUtils" home="set this navbar using props" mode="Reactjs" effect="Learn" bg={darkmode} togglemode={toggleMode} />
      <Main />
    </div>


  );
}

export default App;
