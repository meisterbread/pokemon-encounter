import PokemonCard from "../frontend/components/PokemonCard";
import Starters from '../frontend/layout/Starters'

const SelectPokemon = () => {
    return(
        <>
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">Choose your starter pokemon:</h1>
                <Starters>
                    <PokemonCard attack={70} name="Pokemon" sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" health={100}/>
                    <PokemonCard attack={70} name="Pokemon" sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" health={100}/>
                    <PokemonCard attack={70} name="Pokemon" sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" health={100}/>
                </Starters>
            </div>
        </>
    )
}

export default SelectPokemon;