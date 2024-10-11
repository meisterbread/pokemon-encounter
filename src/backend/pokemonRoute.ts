import express from 'express';
import { pokemonEncounter, randomPokemon } from './pokemonController';

const pokemonRouter = express.Router();

pokemonRouter.use("/select", randomPokemon)
pokemonRouter.use("/route/:id", pokemonEncounter)

export default pokemonRouter