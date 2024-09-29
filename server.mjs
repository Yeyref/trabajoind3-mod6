import express from 'express';
import{getPokemonRandom} from './pokemonReq.mjs';
const app = express();
app.use(express.json());
const port = 3000;

app.get('/pokemon', async (req, res) => {
    try {
        const pokemon = await getPokemonRandom();
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Pokemon' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});