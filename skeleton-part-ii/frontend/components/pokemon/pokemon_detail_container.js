import {connect} from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapSTP = (state, ownProps) => {
    // debugger
    // console.log(ownProps)
    return{
        pokemon: state.entities.pokemon[ownProps.match.params.id],
        moves: state.entities.moves,
        items:  state.entities.items //{items: items...}
    }
}

const mapDTP = (dispatch, ownProps) => ({
    
    fetchPokemon : (pokeID) => dispatch(requestPokemon(pokeID))
})


export default connect(mapSTP, mapDTP)(PokemonDetail)