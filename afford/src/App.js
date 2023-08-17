import logo from './logo.svg';
import './App.css';
import './component/numbers'

import React, {useEffect, useState} from 'react';
import axios from axios;
import { response } from 'express';

function number(){
  const [numbers, setNumbers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8008/numbers').then(response=>{
      setNumbers(response.data.numbers);
    }).then(data=>{
      SVGMetadataElement(data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

}
return (
  <div>
    numbers.map(number (key={number}));
  </div>
)
function App() {
  return (
    <div className="App">
      <number/>
    </div>
  );
}


export default App;