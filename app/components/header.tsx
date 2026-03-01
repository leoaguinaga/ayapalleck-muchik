import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='w-full fixed top-0 z-50 backdrop-blur-2xl bg-card/80'>
            <section className='max-w-6xl mx-auto flex justify-between py-2 px-4 xl:px-0 font-medium'>
                <nav className='flex gap-6 items-center'>
                    <Link href="/" className='flex gap-2 items-center'>
                        <p className='font-bebas-neue text-2xl font-black'>FoxRooms</p>
                    </Link>
                    <div className='hidden lg:flex gap-6 items-center'>
                        <a href="/#features" className='hover:underline underline-offset-4'>Características</a>
                        <a href="/#how-it-works" className='hover:underline underline-offset-4'>Cómo funciona</a>
                        <a href="/#modules" className='hover:underline underline-offset-4'>Módulos</a>
                        <a href="/#pricing" className='hover:underline underline-offset-4'>Precios</a>
                        <a href="/#testimonials" className='hover:underline underline-offset-4'>Testimonios</a>
                    </div>
                </nav>
                <div className='gap-4 flex items-center'>
                    <Link href="/demo" className='hidden sm:flex hover:underline underline-offset-4'>Prueba gratis</Link>
                    <Link href="/login"><Button className='font-bold'>Inicia sesión</Button></Link>
                </div>
            </section>
        </div>
    )
}