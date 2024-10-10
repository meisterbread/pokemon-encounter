interface HeaderProps {
    children : React.ReactNode,
}

const Header = ({children} : HeaderProps) => {
    return(
        <>
            <div>
                <h1 className="font-press-start text-4xl text-white font-bold stroke-2">{children}</h1>
            </div>
        </>
    )
}

export default Header;