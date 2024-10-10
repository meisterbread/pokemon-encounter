interface CardProps {
    sprite : string,
    name : string,
    attack : number,
    health : number,
}

const PokemonCard = ({sprite, name, attack, health} : CardProps) => {
    return(
        <>
            <div className="h-80 w-56 bg-slate-300 rounded-lg flex flex-col shadow-lg justify-center items-center">
                <img className="h-[150px] w-[150px]" src={sprite} alt="Pokemon Sprite"/>
                <h1 className="font-bold">{name}</h1>
                <h2 className="font-bold">Health: {health}</h2>
                <h2 className="font-bold">Attack: {attack}</h2>
            </div>
        </>
    )
}

export default PokemonCard;