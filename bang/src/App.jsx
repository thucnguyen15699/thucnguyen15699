
import React, {useState, useEffect} from 'react';
import Datatable from "./datatable";
require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [data, setData] = useState([])
  const [q, setQ] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => setData(json));
  }, []);

  function search(row){
    return row.filter(
      (row) => 
     
      row.title.toLowerCase().indexOf(q)> -1 ||
      row.body.toLowerCase().indexOf(q)> -1 
      
    );
    }

  return (
    <div >
      <div>
        <input type="text" value={q}  onChange={(e) => setQ(e.target.value)}/>
      </div>
      <div><Datatable data={search(data)}/></div>
    </div>
  );
}

export default App;
