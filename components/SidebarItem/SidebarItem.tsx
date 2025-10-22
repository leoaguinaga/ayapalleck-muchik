"use client"

import React from 'react'
import { SidebarItemProps } from './SidebarItem.types'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function SidebarItem(props: SidebarItemProps) {
    const { item } = props;
    const { label, icon: Icon, href } = item;

    const pathname = usePathname();
    const activePath = pathname === href;

    return (
        <Link href={href} className={cn(`flex gap-x-2 mt-1 light:text-slate-700 dark:text-white text-md items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`, activePath && 'bg-slate-400/20')}>
            <Icon className='size-5'/>
            <p>{label}</p>
        </Link>
    )
}
