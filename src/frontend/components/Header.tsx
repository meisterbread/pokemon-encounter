interface HeaderProps {
    children : React.ReactNode,
}

const Header = ({children} : HeaderProps) => {
    return(
        <>
            <div>
                <h1 className="font-press-start text-3xl font-bold">{children}</h1>
            </div>
        </>
    )
}

export default Header;