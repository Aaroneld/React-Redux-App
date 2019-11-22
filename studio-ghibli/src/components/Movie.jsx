import React from 'react';
import styled from 'styled-components';


const Container = styled.section`

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