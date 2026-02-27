import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <div className='flex flex-col gap-4 items-center pt-32 pb-20 relative z-0'>
            <div className="absolute inset-0 -z-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>

            <h1 className='font-bebas-neue text-5xl max-w-2xl text-center font-black'>El PMS que convierte tu operación en <span className='text-blue-600 italic'>precisión</span></h1>
            <h2 className='text-muted-foreground text-center text-lg max-w-xl'>
                Optimiza la gestión hotelera con nuestra plataforma de alta fidelidad. Control total de reservas, habitaciones y housekeeping en una interfaz diseñada para el rendimiento extremo.
            </h2>
            <div className='flex items-center justify-center gap-2'>
                <Button>Comienza Ahora</Button>
                <Button variant="outline">Conoce más</Button>
            </div>
            <img src="/hero.png" className='w-full max-w-5xl object-cover rounded-xl mt-5' alt="" />
        </div>
    )
}
