import Axios from "axios";

export const GET_MOVIES = 'GET_MOVIES';
export const MOVIES_ERROR = 'MOVIES_ERROR';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';

export const getMovies = () => dispatch => {

    dispatch({type: GET_MOVIES});
    Axios.get('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        dispatch({ type: MOVIES_SUCCESS, payload: response.data})
    })
    .catch( error => {
        dispatch({ type: MOVIES_ERROR, payload: error})
    });
};

