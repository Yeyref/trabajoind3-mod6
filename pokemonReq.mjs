import axios from 'axios';

export const getPokemonRandom = async() =>{
    const numRandom = Math.floor(Math.random()*151 + 1);
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numRandom}`);
        const pokemon = {
            name: respuesta.data.name,
            id:respuesta.data.id
         } 
        return pokemon;
}