import { Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Elena Torres",
            role: "Recepcionista, Hostal Sol y Luna",
            content: "El proceso de check-in ahora es mucho más rápido. Puedo ver la disponibilidad de todas las habitaciones en una sola pantalla y asignar huéspedes en segundos. Nos ha cambiado la vida.",
            rating: 5,
        },
        {
            name: "Javier Vargas",
            role: "Dueño, EcoLodge Selva Alta",
            content: "Nuestra principal preocupación era el control de la caja y los cierres de turno descuadrados. Gracias a este sistema todo es transparente y puedo monitorear mis ingresos desde mi casa sin estrés.",
            rating: 5,
        },
        {
            name: "Valeria Ríos",
            role: "Jefa de Housekeeping, Hotel Plaza Central",
            content: "La sincronización instantánea con recepción nos permite saber exactamente qué habitaciones necesitan limpieza urgente. Ahora nuestro personal siempre está un paso adelante, lo cual ha subido nuestra calificación.",
            rating: 5,
        },
        {
            name: "Elena Torres",
            role: "Recepcionista, Hostal Sol y Luna",
            content: "El proceso de check-in ahora es mucho más rápido. Puedo ver la disponibilidad de todas las habitaciones en una sola pantalla y asignar huéspedes en segundos. Nos ha cambiado la vida.",
            rating: 5,
        },
        {
            name: "Ana Salazar",
            role: "Propietaria, Hotel Descanso del Inca",
            content: "Llevaba años buscando un PMS que no me costara una fortuna y que fuera moderno. FoxRooms superó todas mis expectativas. El control de caja y la vista de limpieza son mis funciones favoritas.",
            rating: 5,
        },
        {
            name: "Luis Quispe",
            role: "Administrador, Hotel Vista Mar",
            content: "Las actualizaciones en tiempo real nos han salvado de muchas confusiones. El soporte al cliente es fenomenal, siempre responden rápido a cualquier duda por WhatsApp. Totalmente recomendado.",
            rating: 5,
        },
    ];

    return (
        <section className='w-full py-16 md:py-24' id="testimonials">
            <div className='max-w-6xl mx-auto flex flex-col gap-10 px-4 xl:px-0 scroll-my-20'>
                <div className="gap-2 flex flex-col w-full text-center items-center">
                    <h2 className='font-bebas-neue text-3xl md:text-4xl font-black'>Lo que dicen nuestros clientes</h2>
                    <p className='text-muted-foreground text-sm md:text-base max-w-2xl'>Descubre cómo FoxRooms está ayudando a cientos de hoteles y hostales a optimizar su operación diaria y mejorar la experiencia de sus huéspedes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className={`flex flex-col gap-4 p-6 border rounded-2xl bg-card shadow-sm h-full w-full mx-auto max-w-sm md:max-w-none`}>
                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, idx) => (
                                    <Star key={idx} className="size-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground text-sm leading-relaxed flex-1 italic relative">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-3 mt-2 pt-4 border-t">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-bold text-sm shrink-0 text-blue-700 dark:text-blue-300">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-sm text-foreground">{testimonial.name}</h4>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
