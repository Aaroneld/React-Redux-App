import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Movie from './Movie';

const Container = styled.section`

    ul {

        display: flex;
        flex-wrap: wrap;
        
        section {

            flex-basis: 26%;
            margin: 1%;
            border: 2px solid pink;
            padding: 2%;
        }

    }
`;

const DisplayGhibli = props => {

    return (
        <Container>
            <ul>
                {props.movies && props.movies.map( movie => {
                    return <Movie movie={movie} />
                })}
            </ul>
        </Container>
    );
}

const mapStateToProps = state => {

    console.log(state);

    return {
        movies: state.movies
    };
} 

export default connect(mapStateToProps, {})(DisplayGhibli);