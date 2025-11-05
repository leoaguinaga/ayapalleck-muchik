"use client"

import SidebarItem from "../SidebarItem"
import { dataAdminSidebar, dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "./SidebarRoutes.data"
import UserButton from "../UserButton"
import SidebarCollapsableItem from "../SidebarCollapsableItem/SidebarCollapsableItem"
// import BranchSelector from "../BranchSelector"

export default function SidebarRoutes() {
    return (
        <div className="h-full flex flex-col">
            {/* <BranchSelector /> */}
            <div className="w-full flex justify-start mx-5">
                <img src="/logo-full.webp" className="h-14 object-contain mt-5 dark:invert" />
            </div>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="p-3">
                        {dataAdminSidebar.map((item) => (
                            <SidebarItem key={item.label} item={item} />
                        ))}
                        {dataGeneralSidebar.map((item) => (
                            <SidebarItem key={item.label} item={item} />
                        ))}
                        {dataToolsSidebar.map((item) => (
                            <SidebarCollapsableItem key={item.label} item={item} />
                        ))}
                        {dataSupportSidebar.map((item) => (
                            <SidebarItem key={item.label} item={item} />
                        ))}
                    </div>
                </div>
                <UserButton />
            </div>
        </div>
    )
}
