interface ButtonProps {
    children : React.ReactNode
}

const Button = ({children} : ButtonProps) => {
    return(
        <>
            <button className="w-64 h-10 bg-blue-900 rounded-lg text-center text-sm font-press-start">
                <label className="text-white">{children}</label>
            </button>
        </>
    )
}

export default Button;