import menu from '../../assets/menu-bg.png'

interface MenuProps {
    children : React.ReactNode
}

const MainLayout = ({children} : MenuProps) => {
    return(
        <>
            <div className="flex flex-col justify-center items-center h-screen overflow-auto gap-36 bg-menu">
                {children}
            </div>
        </>
    )
}

export default MainLayout;