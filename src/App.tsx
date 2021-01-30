import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



export interface NomeId{
  id:number
  name:string
}
function App() {

  const [usuarios, setUsuarios] = useState([])
  const [pegaId , defId] = useState([])

  useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/users/")
         .then(resposta => setUsuarios(resposta.data))
        
         useEffect(() => {
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
              .then(resposta => defId(resposta.data))
              
  }, [])

 return (
   <ul className="App">
  <button onClick={() => setUsuarios(usuarios)}>Ver tempo</button>
      
     {
       usuarios !== null && 
       usuarios.map((usuario: NomeId) => (
         <li key={usuario.id}>
           <p>{usuario.name}({usuario.id})</p>
          
         </li>
       ))
     }
   </ul>
 );
}

export default App;
