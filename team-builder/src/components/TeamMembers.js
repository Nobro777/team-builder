import React from 'react';
import styled from "styled-components";

const StyledCard = styled.div`
border: 1px solid black;
margin: 1% 25%;
background-color: lightgray;
border-radius: 1rem;
`
const StyledH4 = styled.h4`
color: blue;
margin: 25% 0 1% 3%;
display: flex;
justify-content: start;
font-size: 2rem;
`
const StyledH2 = styled.h2`
color: white;
margin: 2% 0 2% 3%;
display: flex;
justify-content: center;
font-size: 2.75rem;
`
const StyledP = styled.p`
color: white;
display: flex;
justify-content: start;
margin: 0 0 1% 3%;
font-size: 1.5rem;
`

const TeamMembers = props => {
    
    return (
        <div>
        {props.players.map(player => (
        <div key={player.id}>
            <StyledCard>
            <StyledH2>{player.name}</StyledH2>
            <StyledH4>{player.role}</StyledH4>
            <StyledP>{player.email}</StyledP>
            </StyledCard>
        </div>
        ))}
        </div>
    );
};

export default TeamMembers;