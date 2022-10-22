
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [getInfo, setInfo] = useState(null);
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  axios.get(url)
  .then(response =>{setInfo(response.json)}) 
  // .then(json =>( console.log(json)))
  

  return (
   
   <div className="App">
      
      <div>
      <div>My name is {getInfo}</div>
      <button onClick={()=> setInfo()}>
        Alert Name
      </button>
      </div>
    </div>
  );
}

export default App;
