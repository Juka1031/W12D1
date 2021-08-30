import React from 'react'
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {

    return (
        <li>
            <Link to={`/pokemon/${props.pokemon.id}`}>
                <span>{props.pokemon.id}</span>
                <span>{props.pokemon.name}</span>
                <img src={props.pokemon.imageUrl}/>
            </Link>
        </li>
    )
}
export default PokemonIndexItem