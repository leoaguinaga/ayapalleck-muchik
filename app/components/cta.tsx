import { Button } from '@/components/ui/button'
import React from 'react'

export default function CTA() {
    return (
        <section className='bg-background relative max-w-5xl rounded-2xl w-full mx-auto flex flex-col gap-6 items-center py-16 lg:py-20 mb-20 px-4 md:px-8 scroll-my-20 overflow-hidden shadow-sm border' id="cta">
            {/* Elementos de Fondo Absolutos */}
            <img src="/cta-dark.png" className='absolute inset-0 w-full h-full object-cover hidden dark:block z-0 opacity-80' alt="" />
            <img src="/cta-light.png" className='absolute inset-0 w-full h-full object-cover dark:hidden z-0 opacity-80' alt="" />

            {/* Contenido (debe estar por encima usando z-index) */}
            <div className="gap-3 flex flex-col w-full text-center z-10 relative">
                <h2 className='font-bebas-neue text-3xl md:text-4xl font-black max-w-lg mx-auto tracking-normal'>
                    ¿Listo para <span className='text-blue-600 dark:text-blue-400 italic'>transformar</span> el futuro de tu hotel?
                </h2>
                <p className='text-muted-foreground dark:text-white/80 text-sm md:text-base max-w-2xl mx-auto mt-1'>
                    Empieza la prueba gratuita de <span className='text-black dark:text-white font-bebas-neue font-black text-lg'>FoxRooms</span> y únete a cientos de emprendedores que ya han simplificado la gestión de sus propiedades.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row w-full sm:w-auto items-center gap-3 md:gap-4 mt-2 z-10 relative'>
                <Button className='w-full sm:w-auto bg-blue-500 hover:bg-blue-600 font-semibold dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white'>Comienza una prueba gratis</Button>
                <Button variant="outline" className='w-full sm:w-auto font-semibold dark:text-white dark:border-white'>Habla con un asesor</Button>
            </div>
        </section>
    )
}