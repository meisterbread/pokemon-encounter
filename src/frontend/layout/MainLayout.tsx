interface MenuProps {
    children : React.ReactNode
}

const MainLayout = ({children} : MenuProps) => {
    return(
        <>
            <div className='flex flex-col justify-center items-center h-screen overflow-auto gap-36 w-full bg-menu bg-cover bg-center'>
                {children}
            </div>
        </>
    )
}

export default MainLayout;