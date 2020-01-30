import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './components/TeamForm';
import TeamMembers from './components/TeamMembers';
import styled from 'styled-components';

const StyledDiv = styled.div`
font-size:2.5rem;
font-family: 'Bangers', cursive;
margin: 2%;
`

function App() {

  const [players, setPlayers] = useState([
    {
      name: "Adam",
      email: "adam@gmail.com",
      role: "project lead",
    },{
      name: "Brandi",
      email: "brandi@gmail.com",
      role: "tech support",
    },{
      name: "Casey",
      email: "casey@gmail.com",
      role: "front-end-guy",
    },{
      name: "Danny",
      email: "danny@gmail.com",
      role: "engineer",
    },{
      name: "Elijah",
      email: "elijah@gmail.com",
      role: "developer"
    }
  ]);

  const addNewPlayer = player => {
    const newPlayer = {
      id: Date.now(),
      name: player.name,
      email: player.email,
      role: player.role
    };
    setPlayers([...players, newPlayer]);
  };


  return (
    <div className="Container">
    
    <div className="App">
      <StyledDiv> Add a Team Member! </StyledDiv>
      <TeamForm addNewPlayer={addNewPlayer}/>
      <TeamMembers players={players}/>
    </div>
    
    </div>
  );
}

export default App;
