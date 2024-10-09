import React from "react";

interface MenuProps {
    children : React.ReactNode
}

const MenuLayout = ({children} : MenuProps) => {
    return(
        <>
            <div className="flex gap-10">
                {children}
            </div>
        </>
    )
}

export default MenuLayout;