import React from 'react';
import styled from 'styled-components';


const Container = styled.section`

    background: hotpink;

    h2 {

        text-align: center;
        font-weight: bold;
        font-size: 125%
        margin-bottom: 2%;
        background: hotpink;
    }

    h4 {

        text-align: center;
        text-decoration: underline;
        font-size: 110%;
        margin-bottom: 2%;
        background: hotpink;
    }

    p {

        background: hotpink;
    }

`;

const Movie = props => {

    return (
        <Container>
            <h2>{props.movie.title}</h2>
            <h4>{props.movie.director}</h4>
            <p>{props.movie.description}</p>
        </Container>
    );
}

 
export default Movie;