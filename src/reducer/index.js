const initialState = {
    artista: [],
    musicas: [],
    url:[]
    
};


export default function reducer(state = initialState, action) {
    if (action.type === "GET_ARTISTA") {

        return {
            ...state, artista: action.payload
        }
    }
    if (action.type === "GET_MUSICA") {
        return {
            ...state, musicas: action.payload
        }
    }
    if (action.type === "GET_INDICE") {
        return {
            ...state, url: action.payload
        }
    }
   
    else {
        return state
    }
}