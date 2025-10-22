"use client"

import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Navbar/Navbar'

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex w-full h-full'>
            <div className='hidden xl:block w-70 h-full xl:fixed'>
                <Sidebar />
            </div>
            <div className="w-full xl:ml-70">
                <Navbar />
                <div className='p-5 bg-background '>
                    {children}
                </div>
            </div>

        </div>
    )
}