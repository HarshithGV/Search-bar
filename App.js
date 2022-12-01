import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [datas, setDatas] = useState([]);
  const [userid, setUserid] = useState('');
  
  const inputChanged = (event) => {
    setUserid(event.target.value)
  }

  const searchBar = () => {

  }

  useEffect(() => {

    fetch('https://api.github.com/search/repositories?q=react')
    .then(response => response.json())
    .then(data => {
      setDatas(data.items)
    })
  },[])

  

  return (
    <div className="App">
      <h1>Repositories</h1>
        <input id="searchInput"type="text" placeholder="search" name="search" value={userid} onChange={inputChanged}/>
        <button onClick={searchBar}>Search</button>
      <table>
        <tbody>
          <tr>
           <th>Name</th>
           <th>URL</th>
          </tr>
          {
          datas.map((data, index) => 
           <tr key={index}>
             <td>{data.full_name}</td>
             <td><a href={data.html_url}>{data.html_url}</a></td>
           </tr>
          )
        
          }
        </tbody>
      </table>
    </div>
  );
}

export default App; 