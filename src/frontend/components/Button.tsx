interface ButtonProps {
    children : React.ReactNode
    onClick : () => void;
}

const Button = ({children, onClick} : ButtonProps) => {
    return(
        <>
            <button onClick={onClick} className="w-72 h-12 bg-blue-900 rounded-lg text-center text-lg font-press-start">
                <label className="text-white ">{children}</label>
            </button>
        </>
    ) 
}

export default Button;