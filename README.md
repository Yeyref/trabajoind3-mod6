//Como desarrollador al menos a mi estos comentarios
//me sirven para un futuro o inclusive para otros devs

// Importar la biblioteca axios para realizar solicitudes HTTP
import axios from 'axios';

// Función asíncrona para obtener un Pokémon aleatorio
export const getPokemonRandom = async () => {
    // Generar un número aleatorio entre 1 y 151 (número total de Pokémon en la primera generación)
    const numRandom = Math.floor(Math.random() * 151 + 1);
    
    // Realizar una solicitud GET a la API de PokeAPI para obtener información del Pokémon aleatorio
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numRandom}`);
    
    // Crear un objeto que contenga el nombre y el ID del Pokémon obtenido
    const pokemon = {
        name: respuesta.data.name, // Nombre del Pokémon
        id: respuesta.data.id       // ID del Pokémon
    };

    // Devolver el objeto del Pokémon
    return pokemon;
}

// Importar Express para crear el servidor web
import express from 'express';
// Importar la función getPokemonRandom desde el archivo pokemonReq.mjs
import { getPokemonRandom } from './pokemonReq.mjs';

// Crear una instancia de la aplicación Express
const app = express();
// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());
// Definir el puerto en el que se ejecutará el servidor
const port = 3000;

// Ruta para manejar solicitudes GET a "/pokemon"
app.get('/pokemon', async (req, res) => {
    try {
        // Llamar a la función para obtener un Pokémon aleatorio
        const pokemon = await getPokemonRandom();
        
        // Si la respuesta es válida, enviar el Pokémon como respuesta en formato JSON
        res.status(200).json(pokemon);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta con código de estado 500
        res.status(500).json({ error: 'Error fetching Pokemon' });
    }
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Mensaje de confirmación en la consola
}); 