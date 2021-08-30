export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchPokemon = (pokeID) => (
  $.ajax({
    method: "GET",
    url : `/api/pokemon/${pokeID}`, 
  })
)

