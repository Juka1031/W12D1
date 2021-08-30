import { RECEIVE_POKEMON } from "../actions/pokemon_actions";


export const movesReducer = (state = {}, action) => {

    switch(action.type){
    case RECEIVE_POKEMON:
        return {...state, ...action.pokemon.moves}
    default:
        return state
}
}