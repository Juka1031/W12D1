import { RECEIVE_POKEMON } from "../actions/pokemon_actions";


export const itemsReducer = (state = {}, action) => {

    switch(action.type){
    case RECEIVE_POKEMON:
        return {...state,  ...action.pokemon.items}
    default:
        return state
}
}