import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import { TabsTrigger } from '@radix-ui/react-tabs'
import React from 'react'

export default function pricing() {
    return (
        <section className="py-16 md:py-20 bg-card scroll-my-20 px-4 xl:px-0" id="pricing">
            <div className="max-w-6xl mx-auto text-center flex flex-col gap-9">
                <div className="max-w-2xl mx-auto gap-2 flex flex-col">
                    <h2 className='font-bebas-neue text-3xl font-black'>Planes flexibles para tu hotel</h2>
                    <p className='text-muted-foreground text-sm md:text-base'>Precios que se adaptan a tus necesidades</p>

                </div>
                <Tabs defaultValue="mensual">
                    <TabsList className='place-self-center px-1 py-5 gap-1'>
                        <TabsTrigger value='mensual' className='px-4 py-1 transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md'>Mensual</TabsTrigger>
                        <TabsTrigger value='anual' className='px-4 py-1 transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md'>Anual</TabsTrigger>
                    </TabsList>
                    <TabsContent value='mensual'>
                        <div className='flex flex-col lg:flex-row justify-center mt-7.5 gap-6 lg:gap-0'>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0'>
                                <h3 className='lg:border-r p-2.5 text-lg font-medium bg-muted/50 lg:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Demo</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-2xl font-bold border-b lg:border-b-0'>14 días gratis</h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col lg:border-r h-full'>
                                    <li>Hasta 5 trabajadores</li>
                                    <li>Gestión de reservas</li>
                                    <li>Check-in / Check-out</li>
                                    <li>Soporte básico</li>
                                    <Button className='mt-6 lg:mt-auto'>Probar demo</Button>
                                </ul>
                            </div>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0'>
                                <h3 className='lg:border-r p-2.5 text-lg font-medium bg-muted/50 lg:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Básico</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-3xl font-bold border-b lg:border-b-0'>$49 <span className='text-base text-muted-foreground font-medium'>/mes</span></h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col lg:border-r h-full'>
                                    <li>Hasta 15 trabajadores</li>
                                    <li>Gestión de reservas</li>
                                    <li>Check-in / Check-out</li>
                                    <li>Soporte básico</li>
                                    <Button className='mt-6 lg:mt-auto'>Elegir plan básico</Button>
                                </ul>
                            </div>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0 relative shadow-lg lg:shadow-none'>
                                <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center lg:hidden">
                                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</span>
                                </div>
                                <h3 className='lg:border-r p-2.5 text-lg font-medium bg-blue-50 lg:bg-transparent dark:bg-blue-950/30 lg:dark:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Profesional</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-2xl font-bold border-b lg:border-b-0'>$99 <span className='text-base text-muted-foreground font-medium'>/mes</span></h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col lg:border-r h-full'>
                                    <li>Hasta 50 trabajadores</li>
                                    <li>Todo lo del plan básico</li>
                                    <li>Reportes avanzados</li>
                                    <li>Gestión de limpieza</li>
                                    <li>Soporte prioritario</li>
                                    <Button className='mt-6 lg:mt-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white'>Elegir plan profesional</Button>
                                </ul>
                            </div>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0'>
                                <h3 className='p-2.5 text-lg font-medium bg-muted/50 lg:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Multi-Sede</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-2xl font-bold border-b lg:border-b-0 lg:border-r-0'>$199 <span className='text-base text-muted-foreground font-medium'>/mes</span></h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col h-full'>
                                    <li>Trabajadores ilimitados</li>
                                    <li>Todo lo del plan profesional</li>
                                    <li>Múltiples propiedades</li>
                                    <li>Soporte dedicado 24/7</li>
                                    <Button className='mt-6 lg:mt-auto'>Elegir plan multi-sede</Button>
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value='anual'>
                        <div className='flex flex-col lg:flex-row justify-center mt-7.5 gap-6 lg:gap-0'>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0'>
                                <h3 className='lg:border-r p-2.5 text-lg font-medium bg-muted/50 lg:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Demo</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-2xl font-bold border-b lg:border-b-0'>14 días gratis</h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col lg:border-r h-full'>
                                    <li>Hasta 5 trabajadores</li>
                                    <li>Gestión de reservas</li>
                                    <li>Check-in / Check-out</li>
                                    <li>Soporte básico</li>
                                    <Button className='mt-6 lg:mt-auto'>Probar demo</Button>
                                </ul>
                            </div>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0'>
                                <h3 className='lg:border-r p-2.5 text-lg font-medium bg-muted/50 lg:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Básico</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-3xl font-bold border-b lg:border-b-0'>$490 <span className='text-base text-muted-foreground font-medium'>/año</span></h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col lg:border-r h-full'>
                                    <li>Hasta 15 trabajadores</li>
                                    <li>Gestión de reservas</li>
                                    <li>Check-in / Check-out</li>
                                    <li>Soporte básico</li>
                                    <Button className='mt-6 lg:mt-auto'>Elegir plan básico</Button>
                                </ul>
                            </div>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0 relative shadow-lg lg:shadow-none'>
                                <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center lg:hidden">
                                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</span>
                                </div>
                                <h3 className='lg:border-r p-2.5 text-lg font-medium bg-blue-50 lg:bg-transparent dark:bg-blue-950/30 lg:dark:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Profesional</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-2xl font-bold border-b lg:border-b-0'>$990 <span className='text-base text-muted-foreground font-medium'>/año</span></h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col lg:border-r h-full'>
                                    <li>Hasta 50 trabajadores</li>
                                    <li>Todo lo del plan básico</li>
                                    <li>Reportes avanzados</li>
                                    <li>Gestión de limpieza</li>
                                    <li>Soporte prioritario</li>
                                    <Button className='mt-6 lg:mt-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white'>Elegir plan profesional</Button>
                                </ul>
                            </div>
                            <div className='flex flex-col border rounded-xl lg:rounded-none lg:border-0'>
                                <h3 className='p-2.5 text-lg font-medium bg-muted/50 lg:bg-transparent rounded-t-xl lg:rounded-none border-b lg:border-b-0'>Multi-Sede</h3>
                                <h2 className='lg:border lg:border-l-0 py-5 px-8 text-2xl font-bold border-b lg:border-b-0 lg:border-r-0'>$1990 <span className='text-base text-muted-foreground font-medium'>/año</span></h2>
                                <ul className='text-sm py-5 px-8 gap-2 flex flex-col h-full'>
                                    <li>Trabajadores ilimitados</li>
                                    <li>Todo lo del plan profesional</li>
                                    <li>Múltiples propiedades</li>
                                    <li>Soporte dedicado 24/7</li>
                                    <Button className='mt-6 lg:mt-auto'>Elegir plan multi-sede</Button>
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
                <p className='text-sm text-muted-foreground'>* Los precios mostrados no incluyen IGV</p>
            </div>
        </section>
    )
}
