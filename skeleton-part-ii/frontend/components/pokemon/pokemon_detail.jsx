import React from "react"
import { Route } from "react-router-dom"



class PokemonDetail extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchPokemon(this.props.match.params.id)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId){
          this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
      }

    render(){
        // const { items,moves,pokemon } = this.props;
        // debugger
        // const moveList = moves.map ((move) => {
        //         move.name
        // })
        if(!this.props.pokemon) return null
        // debugger
        return(
            <div>
                <figure>
                 <img src={this.props.pokemon.imgUrl} alt={this.props.pokemon.name}/>
                 </figure>
                 <h4>{this.props.pokemon.name}</h4>
                 <p>Type:{this.props.pokemon.pokeType}</p>
                 <p>Attack:{this.props.pokemon.attack}</p>
                 <p>Defense:{this.props.pokemon.defense}</p>
                 {/* <p>Moves:{moveList.join(', ')}</p> */}
                 
            </div>
        )

    }

}

export default PokemonDetail