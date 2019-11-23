import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

const Container = styled.section`

    padding: 4% 5%;
    display: flex;
    justify-content: center
    border: 2px solid pink;
    background: lightgreen;

    button {

        background: teal;
        color: white;
        outline: none;
        border: none;
        padding: 2% 4%;
        border: 2px solid lightgreen;

        &:hover {

            background: lightgreen;
            border: 2px solid orange;
        }
    }

`;

const GetGhibli = props => {

    const getMoviesHandler = event => {

        console.log("here");
        props.getMovies();
        console.log(props.state);
    }

    return (
        <Container>
            <button
            onClick={getMoviesHandler}>Get Studio Ghibli Film</button>
        </Container>
    );
}

const mapStateToProps = state => {

    return {
        state: state
    };

} 

export default connect(mapStateToProps, { getMovies })(GetGhibli);