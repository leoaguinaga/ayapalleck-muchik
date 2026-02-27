import { Button } from '@/components/ui/button'
import React from 'react'

export default function CTA() {
    return (
        <section className='bg-blue-950'>
            <div className='max-w-6xl mx-auto flex flex-col gap-6 items-center py-24 px-4 scroll-my-20' id="cta">
                <div className="gap-2 flex flex-col w-full text-center">
                    <h2 className='font-bebas-neue text-4xl font-black text-white'>¿Listo para transformar tu hotel?</h2>
                    <p className='text-muted'>Únete a los cientos de hoteleros que ya han simplificado su operación con FoxRooms.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <Button className='bg-blue-500 hover:bg-blue-600  font-semibold'>Comienza una prueba gratis</Button>
                    <Button variant="outline" className='font-semibold'>Habla con un asesor</Button>
                </div>
            </div>
        </section>
    )
}