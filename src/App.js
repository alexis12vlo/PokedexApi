import './App.css';
import Search from './Search.jsx'
import './Search.css'
import React ,{useEffect,useState} from 'react';  
import './Portada/Portada.css'

import Portada from './Portada/Portada.jsx';
export default function App() {
const [visible,setVisible]=useState([{none:'none',block:'block'}])
  return (

    <div className="App">
        <div >
          <div style={{display:visible[0].block}} >
          <Portada visible={visible} setVisible={setVisible} />

          </div>
          <div style={{display:visible[0].none}} >
          <Search  />


          </div>
        </div>
     
    </div>
  );
}


