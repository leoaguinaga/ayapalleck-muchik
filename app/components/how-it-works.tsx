import { Phone } from 'lucide-react'

const steps = [
    {
        title: "Registra tu hotel",
        description: "Crea tu cuenta en segundos y configura los datos básicos de tu propiedad. Un proceso intuitivo para que empieces sin fricciones."
    },
    {
        title: "Configura sedes y habitaciones",
        description: "Define tus tipos de habitaciones, establece tarifas dinámicas y asigna las capacidades de cada sede de forma visual y sencilla."
    },
    {
        title: "Gestiona reservas",
        description: "Centraliza todas las reservas en un calendario interactivo. Arrastra y suelta para cambiar fechas o reasignar habitaciones al instante."
    },
    {
        title: "Check-in/out rápido",
        description: "Procesa la llegada y salida de tus huéspedes en tiempo récord. Escanea documentos automáticamente y agiliza el flujo de clientes."
    },
    {
        title: "Control total con KPIs",
        description: "Toma decisiones basadas en datos reales. Monitorea tu RevPAR, tasa de ocupación y rendimiento financiero desde un dashboard potente."
    }
];

export default function HowItWorks() {
    return (
        <section className='w-full'>
            <div className='max-w-6xl mx-auto flex flex-col gap-8 lg:gap-10 items-center lg:items-start py-16 md:py-24 px-4 xl:px-0' id="how-it-works">
                <div className="gap-2 flex flex-col w-full text-center lg:text-left">
                    <h2 className='font-bebas-neue text-3xl font-black'>¿Cómo funciona FoxRooms?</h2>
                    <h3 className='text-muted-foreground text-sm md:text-base max-w-lg'>
                        Descubre cómo en 5 simples pasos puedes tomar el control total de tu operación hotelera.
                    </h3>
                </div>
                <div className="h-full w-full flex flex-col lg:flex-row gap-8 lg:gap-10">
                    <img
                        src="https://images.pexels.com/photos/16376256/pexels-photo-16376256.jpeg"
                        alt="Cómo funciona el onboarding"
                        className="rounded-2xl w-full lg:w-[50%] h-[250px] sm:h-[350px] lg:h-auto lg:max-h-[600px] object-cover"
                    />
                    <div className="w-full flex flex-col justify-center">
                        <div className="flex flex-col">
                            {steps.map((step, index) => (
                                <div key={index} className={`flex gap-4 md:gap-6 relative`}>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full border border-blue-100 text-blue-600 dark:text-blue-100 dark:border-blue-700 bg-transparent flex items-center justify-center font-medium text-sm z-10 shrink-0">
                                            {index + 1}
                                        </div>
                                        {index !== steps.length - 1 && (
                                            <div className="w-px h-full bg-blue-100 dark:bg-blue-700" />
                                        )}
                                    </div>
                                    <div className="pb-8 pt-1 flex-1">
                                        <p className="text-foreground text-[14px] md:text-[15px] leading-relaxed dark:text-foreground">
                                            <strong className="font-semibold block sm:inline sm:mr-1 text-blue-800 dark:text-blue-300">
                                                {step.title}:
                                            </strong>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex items-center gap-2 text-[14px] md:text-[15px] font-semibold text-foreground hover:text-blue-600 cursor-pointer transition-colors w-max mt-2">
                            <span className="underline underline-offset-4 decoration-border hover:decoration-blue-600 transition-colors dark:text-blue-100">
                                Prueba una demo!
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
