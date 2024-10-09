import { Request,Response } from "express";
import { Root } from "./models/PokemonModel";
import { RouteModel } from "./models/RouteModel";

const randomPokemon = async(req: Request, res: Response) => {
    try{
        const id : Number = Math.floor(Math.random() * 1025) + 1;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
        const data = (await response.json()) as Root;

        console.log(`Got ${data.name}`)
    
        res.json(data);
    } catch(error) {
        console.log(error);
    }
}

const pokemonEncounter = async(req : Request, res: Response) => {
    try{
        const id : String = req.params.id;

        const response = await fetch(`https://pokeapi.co/api/v2/location-area/${id}`);

        const data = (await response.json()) as RouteModel;

        res.json(data)
    }catch(error){
        console.log(error);
    }
}

export {randomPokemon,pokemonEncounter}