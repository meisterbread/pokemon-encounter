interface StartersProps {
    children : React.ReactNode
}

const Starters = ({children} : StartersProps) => {
    return(
        <>
            <div className=" flex flex-row gap-10 justify-center items-center">
                {children}
            </div>
        </>
    )
}

export default Starters;