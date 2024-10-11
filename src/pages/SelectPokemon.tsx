import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../frontend/components/PokemonCard";
import Starters from '../frontend/layout/Starters'
import { Pokemon } from "../backend/models/PokemonModel";
import Button from "../frontend/components/Button";

const SelectPokemon = () => {

    const [starters,setStarters] = useState<Pokemon[]>([])
    const [selected, setSelected] = useState<Pokemon | null>(null)

    const handleSelected = (pokemon : Pokemon) => {
        setSelected(pokemon)
    }

    const startGame = () => {
        if(!selected){
            console.log("Select a pokemon first!")
        }else{ 
            nav('/area')
        }
    }

    const nav = useNavigate();

    const randomPokemon = async () => {
        try{
            const response = await fetch('http://localhost:3000/select')
            const data = (await response.json() as Pokemon[])

            console.log("random pockemon runs")

            setStarters(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        randomPokemon();
    },[])

    return(
        <>
            <div className="h-screen flex flex-col items-center justify-center gap-12">
                <h1 className="text-2xl font-press-start">Choose your starter pokemon</h1>
                <Starters>
                  {starters.map((pokemon, index) => (
                        <PokemonCard
                            key={index}
                            name={pokemon.name}
                            health={pokemon.stats.find(stat => stat.stat.name === "hp")?.base_stat}
                            attack={pokemon.stats.find(stat => stat.stat.name == "attack")?.base_stat}
                            sprite={pokemon.sprites.front_default}
                            setSelected={() => {handleSelected(pokemon)}}
                        />
                  ))}
                </Starters>
                { selected && (
                    <h1>You have selected {selected?.name}</h1>
                )}
                <Button onClick={startGame}>Start adventure</Button>
            </div>
        </>
    )
}

export default SelectPokemon;