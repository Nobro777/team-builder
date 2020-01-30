import React, { useState } from 'react';
import styled from "styled-components";

const StyledLinks = styled.div`
margin: 1% 2%;
padding: 1%;
width: 100%;
border: 1px solid black;
border-radius: 1rem;
`
const DispFlex = styled.div`
display: flex;
justify-content: center;
margin: 0 0 3% 0;
`
const Button = styled.button`
margin: 1% 0;
border-radius: .2rem;
border: 3px solid black;
width: 15%;
opacity: .5;
&:hover {
    font-weight: bold;
    opacity: 1;
    cursor: pointer;
}
`


const TeamForm = props => {

const [card, setCard] = useState({
    name: "",
    email: "",
    role: ""
});

const handleChanges = e => {
    setCard({ ...card, [e.target.name]: e.target.value});
};
const submitForm = e => {
    e.preventDefault();
    props.addNewPlayer(card);
    setCard({name: "", email: "", role: ""})

}

    return (
        <form onSubmit={submitForm}>
        <DispFlex>
        <StyledLinks>
        <label htmlFor="name">Name : </label>
            <input
            id="name" 
            name="name"
            type="text"
            onChange={handleChanges}
            placeholder="Enter a name..."
            value={card.name}
            />
        </StyledLinks>
        <StyledLinks>
        <label htmlFor="email">Email : </label>
        <input
            id="email" 
            name="email"
            type="email"
            onChange={handleChanges}
            placeholder="Enter an email..."
            value={card.email}
            required/>
        </StyledLinks>
        <StyledLinks>
        <label htmlFor="role">Role : </label>
        <input
            id="role" 
            name="role"
            type="text"
            onChange={handleChanges}
            placeholder="Enter a role..."
            value={card.role}
            />
        </StyledLinks>
        </DispFlex>
            <Button type="submit">Add Player </Button>
            
        </form>
        
    )
}


export default TeamForm;