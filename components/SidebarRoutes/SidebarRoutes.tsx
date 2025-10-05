"use client"

import SidebarItem from "../SidebarItem"
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "./SidebarRoutes.data"
import UserButton from "../UserButton"

export default function SidebarRoutes() {

    return (

        <div className="h-full flex flex-col">
            <div className="w-full flex justify-start mx-1 sm:mx-5 mb-2 sm:mb-0">
                <img src="/logo-full.webp" className="h-14 object-contain mt-2 sm:mt-5 dark:invert" />
            </div>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="p-2 pr-0 sm:pr-2 md:p-5 md:pb-0">
                        <p className="font-semibold mb-2">General</p>
                        {dataGeneralSidebar.map((item) => (
                            <SidebarItem key={item.label} item={item} />
                        ))}
                    </div>
                    <div className="p-2 pr-0  md:p-5 md:pb-0">
                        <p className="font-semibold mb-2">Administrar</p>
                        {dataSupportSidebar.map((item) => (
                            <SidebarItem key={item.label} item={item} />
                        ))}
                    </div>
                    <div className="p-2 pr-0  md:p-5 md:pb-0">
                        <p className="font-semibold mb-2">Historial</p>
                        {dataToolsSidebar.map((item) => (
                            <SidebarItem key={item.label} item={item} />
                        ))}
                    </div>
                </div>
                <UserButton />
            </div>
        </div>
    )
}
