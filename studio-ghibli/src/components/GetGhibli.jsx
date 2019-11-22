import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

const Container = styled.section`

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