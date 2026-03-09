import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className='flex flex-col gap-4 items-center pt-28 md:pt-32 px-4 xl:px-0 z-0 mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]'>

            <h1 className='font-bebas-neue text-4xl md:text-5xl max-w-lg text-center font-black motion-preset-fade-md motion-delay-150'>
                El Sistema Hotelero que <span className='text-blue-600 dark:text-blue-400 italic'>soñabas</span> tener
            </h1>
            <h2 className='text-muted-foreground text-center text-base md:text-lg max-w-lg md:max-w-xl motion-preset-fade-md motion-delay-200'>
                Centraliza reservas, habitaciones y huéspedes en un solo lugar, reduce errores operativos y libera tiempo para enfocarte en lo que realmente importa: aumentar tu ocupación y mejorar tu servicio.
            </h2>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto mt-2 z-100 motion-preset-fade-md motion-delay-250'>
                <Link href="/login">
                    <Button className='w-full sm:w-auto cursor-pointer'>Comienza Ahora</Button>
                </Link>
                <a href="#how-it-works">
                    <Button variant="outline" className='w-full sm:w-auto cursor-pointer'>Conoce más</Button>
                </a>
            </div>
            <div className='relative w-full flex flex-col items-center'>
                <img src="/hero-light.png" className='w-full max-w-4xl object-cover rounded-xl mt-8 dark:hidden z-2 motion-preset-slide-up-sm motion-delay-200' alt="" />
                <img src="/hero-dark.png" className='w-full max-w-4xl object-cover rounded-xl mt-8 dark:block hidden z-2' alt="" />

                <img src="/test-2.png" alt="" className='z-1 absolute bottom-15 left-0 w-full h-auto dark:grayscale-40 max-lg:hidden motion-preset-slide-up-sm' />
                <img src="/bottom.png" alt="" className='z-3 absolute -bottom-5 left-0 w-full h-auto dark:grayscale-40 max-lg:hidden motion-preset-slide-up-sm' />
            </div>
        </div>
    )
}
