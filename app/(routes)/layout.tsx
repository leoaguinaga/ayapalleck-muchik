"use client"

import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Navbar/Navbar'

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex w-full h-screen overflow-hidden'>
            <div className='hidden xl:block w-70 h-full xl:fixed'>
                <Sidebar />
            </div>
            <div className="w-full xl:ml-70 h-full flex flex-col overflow-hidden">
                <Navbar />
                <div className='flex-1 p-5 bg-background overflow-hidden'>
                    {children}
                </div>
            </div>
        </div>
    )
}