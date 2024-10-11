import { Pokemon } from "../../backend/models/PokemonModel";

interface CardProps {
    sprite : string,
    name : string,
    attack? : number,
    health? : number,
    setSelected : () => void
}

const PokemonCard = ({sprite, name, attack, health, setSelected} : CardProps) => {
    return(
        <>
            <div className="h-80 w-56 bg-gray-300 rounded-lg flex flex-col gap-5 shadow-lg justify-center items-center cursor-pointer" onClick={setSelected}>
                <img className="h-[150px] w-[150px]" src={sprite} alt="Pokemon Sprite"/>
                <h1 className="text-xl font-bold">{name}</h1>
                <div>
                    <h2 className="">Health: {health}</h2>
                    <h2 className="">Attack: {attack}</h2>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;