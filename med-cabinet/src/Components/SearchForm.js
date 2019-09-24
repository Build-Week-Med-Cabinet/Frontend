import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Button } from 'semantic-ui-react';

// component styling

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SearchContainerDiv = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        padding: 0.5em;
    }

    Button {
        width: 100%;
    }
`

export default function SearchForm() {

    const [strainQuery, setQuery] = useState({
        search: "",
    });

    const handleChange = event => {
        setQuery({...strainQuery, search: event.target.value});
    }

    const handleSubmit = () => {
        axios
            .post("https://reqres.in/api/users", strainQuery)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <SearchContainerDiv>
         <Form onSubmit={() => handleSubmit()}>
            <Form.Field>
                <label>
                    Search Strains 
                </label>
                <input type="text" onChange={event => handleChange(event)}/> 
            </Form.Field>
        <ButtonContainer>
            <Button >Search</Button>
        </ButtonContainer>
        </Form>
        </SearchContainerDiv>
    )
}