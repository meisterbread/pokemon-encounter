import { Request,Response } from "express";
import { Pokemon } from "./models/PokemonModel";
import { EncounterModel } from "./models/RouteModel";

const starters: Pokemon[] = []
const encounters: Pokemon[] = []

const randomPokemon =  async(req: Request, res: Response) => {
    
    if(starters.length != 0){
        starters.splice(0, starters.length)
    }

    try{
        const num : number = Number(req.query.number) || 3;

        //will empty array if there is a pokemon inside

        for(let i = 1; i <= num; i++){
            const id : Number = Math.floor(Math.random() * 1025) + 1;

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = (await response.json()) as Pokemon;

            const pokemon : Pokemon = {
                name : data.name,
                sprites : {
                    front_default: data.sprites.front_default,
                    back_default: data.sprites.back_default
                },
                stats : data.stats.map((stat : any) => ({
                    base_stat: stat.base_stat,
                    stat: stat.stat
                }))
            }
            
            console.log(`Got ${data.name}`);
            starters.push(pokemon);
        }
        
        res.json(starters);
    } catch(error) {
        console.log(error);
    }
}

const pokemonEncounter = async(req : Request, res: Response) => {
    try{
        const id : String = req.params.id;

        const response = await fetch(`https://pokeapi.co/api/v2/location-area/${id}`);

        const data = (await response.json()) as EncounterModel;

        res.json(data)
    }catch(error){
        console.log(error);
    }
}

export {randomPokemon,pokemonEncounter}