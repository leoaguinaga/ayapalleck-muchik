import { Button } from '@/components/ui/button'
import React from 'react'

export default function CTA() {
    return (
        <section className='bg-background max-w-5xl rounded-2xl w-full mx-auto flex flex-col gap-6 items-center py-16 mb-20 md:py-20 px-4 scroll-my-20' id="cta">
            <div className="gap-2 flex flex-col w-full text-center">
                <h2 className='font-bebas-neue text-3xl md:text-45xl font-black max-w-lg mx-auto'>¿Listo para <span className='text-blue-600 dark:text-blue-400 italic'>transformar</span> el futuro de tu hotel?</h2>
                <p className='text-muted-foreground dark:text-white/80 text-sm md:text-base max-w-2xl mx-auto mt-1'>Empieza la prueba gratuita de <span className='text-black dark:text-white font-bebas-neue font-black'>FoxRooms</span> y únete a cientos de emprendedores que ya han simplificado la gestión de sus propiedades.</p>
            </div>
            <div className='flex flex-col sm:flex-row w-full sm:w-auto items-center gap-3 md:gap-4 mt-2'>
                <Button className='w-full sm:w-auto bg-blue-500 hover:bg-blue-600 font-semibold dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white'>Comienza una prueba gratis</Button>
                <Button variant="outline" className='w-full sm:w-auto font-semibold dark:text-white dark:border-white'>Habla con un asesor</Button>
            </div>
        </section>
    )
}