import { useState, useEffect } from 'react';
import axios from "axios";
import "./styles.css";
import Card from './Card';

//const url = "https://swapi.dev/api/people/?page=1"



const App = () => {

  const apiUrL = "https://swapi.dev/api/people/";
  const [users, setUsers] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    getData(apiUrL);
  }, []);

  function getData(apiUrl) {
    axios.get(apiUrl).then(response => {
      setUsers(response.data.results);
      setNext(response.data.next);
      setPrev(response.data.previous);
    });
  }

  function clickHandlerNext(event) {
    getData(next);
  }

  function clickHandlerPrev(event) {
    getData(prev);
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div className='cardlist'>
        {users.map((person)=> {
          let {name, mass, url, gender, birth_year, hair_color, skin_color} = person;
          return <Card name={name} mass={mass} key={url} gender={gender} birth_year={birth_year} hair_color={hair_color} skin_color={skin_color}  />
        })}
      </div>
      <div className='contain_bt'>
        <button onClick={clickHandlerPrev} style={{textAlign:'left'}}>Prev</button>
        <button onClick={clickHandlerNext} style={{textAlign:'right'}}>Next</button>
      </div>
      
    </div>
  );
};

export default App;
