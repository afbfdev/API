import './App.css';
import { useState } from 'react';
import axios from 'axios'
function App() {
  const [list, setList] = useState([])
const Data = () => {
  //fetch("https://jsonplaceholder.typicode.com/users")
 // .then(res => res.json())
  //.then(res => setList([...res]))
  
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setList(res.data))
    .catch(err => console.log(err))
}

  return (
    <div className="App">
      
      {
        list.map(el => 
       <p>{el.name}</p>
       )
        
      }
      <button onClick={() => Data()}>Show</button>


    </div>
  );
}

export default App;
