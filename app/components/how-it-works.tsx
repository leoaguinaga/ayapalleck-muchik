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
            <div className='max-w-6xl mx-auto flex flex-col gap-8 items-center py-24 scroll-my-20' id="how-it-works">
                <div className="gap-2 flex flex-col w-full">
                    <h2 className='font-bebas-neue text-3xl font-black'>¿Cómo funciona FoxRooms?</h2>
                    <p className='text-muted-foreground'>Empieza a gestionar tu hotel en minutos, no en meses.</p>
                </div>
                <div className="h-full w-full flex flex-row gap-10">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Cómo funciona el onboarding"
                        className="rounded-2xl w-[50%] max-h-[600px] object-cover"
                    />
                    <div className="w-full flex flex-col">
                        <div className="flex flex-col">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 relative">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full border border-blue-100 text-blue-600 bg-transparent flex items-center justify-center font-medium text-xs z-10 shrink-0">
                                            {index + 1}
                                        </div>
                                        {index !== steps.length - 1 && (
                                            <div className="w-px h-full bg-blue-100" />
                                        )}
                                    </div>
                                    <div className="pb-8 pt-1.25 flex-1">
                                        <p className="text-foreground text-[15px] leading-relaxed">
                                            <strong className="font-semibold mr-1 text-blue-800">
                                                {step.title}:
                                            </strong>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex items-center gap-2 text-[15px] font-semibold text-foreground hover:text-blue-600 cursor-pointer transition-colors w-max">
                            <span className="underline underline-offset-4 decoration-border hover:decoration-blue-600 transition-colors">
                                Prueba una demo!
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
