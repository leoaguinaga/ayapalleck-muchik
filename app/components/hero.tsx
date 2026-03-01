import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <div className='flex flex-col gap-4 items-center pt-28 md:pt-32 pb-12 md:pb-20 px-4 xl:px-0 relative z-0'>
            <div className="absolute inset-0 -z-10 bg-card bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] bg-size-[16px_16px]"></div>

            <h1 className='font-bebas-neue text-4xl md:text-5xl max-w-2xl text-center font-black'>
                El PMS que convierte tu operación en <span className='text-blue-600 dark:text-blue-400 italic'>precisión</span>
            </h1>
            <h2 className='text-muted-foreground text-center text-base md:text-lg max-w-xl'>
                Optimiza la gestión hotelera con nuestra plataforma de alta fidelidad. Control total de reservas, habitaciones y housekeeping en una interfaz diseñada para el rendimiento extremo.
            </h2>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto mt-2'>
                <Button className='w-full sm:w-auto'>Comienza Ahora</Button>
                <Button variant="outline" className='w-full sm:w-auto'>Conoce más</Button>
            </div>
            <img src="/hero-light.png" className='w-full max-w-5xl object-cover rounded-xl mt-8 dark:hidden' alt="" />
            <img src="/hero-dark.png" className='w-full max-w-5xl object-cover rounded-xl mt-8 dark:block hidden' alt="" />
        </div>
    )
}
