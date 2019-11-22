import { MOVIES_SUCCESS, MOVIES_ERROR, GET_MOVIES} from '../actions/index';

const initialState = {

    isRendering: false,
    error: "",
    movies: [{
        description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: "Hayao Miyazaki",
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        locations: ["https://ghibliapi.herokuapp.com/locations/"],
        people: ["https://ghibliapi.herokuapp.com/people/"],
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
        species: ["https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"],
        title: "Castle in the Sky",
        url: "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
        vehicles: ["https://ghibliapi"]
    }]
};

function reducer (state = initialState, action) {

    switch(action.type) {

        case "GET_MOVIES":

            console.log("here1");

            return {...state,
                isRendering: true,
                error: " "
            };

        case "MOVIES_SUCCESS":

                console.log("here2");

            return {...state,
            isRendering: false,
            error: " ",
            movies: action.payload
        };

        case "MOVIES_ERROR": 

            return {...state,
            isRendering: false,
            error: action.payload}
        
        default: 
                return state;

    }

};

export default reducer;