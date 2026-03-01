import Tag from "@/components/Tag/Tag";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Modules() {
    return (
        <div className='relative w-full bg-background'>
            <div className='max-w-6xl mx-auto flex flex-col gap-8 items-center py-16 md:py-24 px-4 xl:px-0 scroll-my-20' id="modules">
                <div className="flex justify-between w-full items-end lg:items-center">
                    <div className="gap-2 flex flex-col w-full">
                        <h2 className='font-bebas-neue text-3xl font-black'>Módulos potentes</h2>
                        <p className='text-muted-foreground text-sm md:text-base'>Una suite completa de herramientas integradas.</p>
                    </div>
                    <div className="hidden lg:flex items-center gap-3">
                        <ChevronLeft className="size-10 rounded-full border p-2 cursor-pointer transition-colors hover:bg-muted" />
                        <ChevronRight className="size-10 rounded-full border p-2 cursor-pointer transition-colors hover:bg-muted" />
                    </div>
                </div>
                <div className="w-full flex lg:hidden items-center justify-end gap-3 -mt-4">
                    <ChevronLeft className="size-9 rounded-full border p-2 cursor-pointer transition-colors hover:bg-muted" />
                    <ChevronRight className="size-9 rounded-full border p-2 cursor-pointer transition-colors hover:bg-muted" />
                </div>
                <div className="w-full flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2 p-4 md:p-6 border rounded-2xl bg-card flex flex-col gap-2 text-left">
                        <h3 className="font-extrabold font-bebas-neue text-xl">Dashboard Ejecutivo</h3>
                        <p className="text-muted-foreground text-sm flex-1">Visualiza la ocupación actual, próximas llegadas y el estado de limpieza en una sola vista.</p>
                        <img src="/dashboard-light.png" alt="" className="mt-2 rounded-lg w-full h-auto object-cover max-h-[250px] dark:hidden" />
                        <img src="/dashboard-dark.png" alt="" className="mt-2 rounded-lg w-full h-auto object-cover max-h-[250px] dark:block hidden" />
                        <div className="flex flex-wrap gap-2 mt-3">
                            <Tag text="Indicadores clave" color="blue" />
                            <Tag text="Tiempo real" color="blue" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 md:p-6 border rounded-2xl bg-card flex flex-col gap-2 text-left">
                        <h3 className="font-extrabold font-bebas-neue text-xl">Gestión de Reservas</h3>
                        <p className="text-muted-foreground text-sm flex-1">Calendario interactivo tipo drag-and-drop para mover reservas y asignar habitaciones rápidamente.</p>
                        <img src="/check-in-light.png" alt="" className="mt-2 rounded-lg w-full h-auto object-cover max-h-[250px] dark:hidden" />
                        <img src="/check-in-dark.png" alt="" className="mt-2 rounded-lg w-full h-auto object-cover max-h-[250px] dark:block hidden" />
                        <div className="flex flex-wrap gap-2 mt-3">
                            <Tag text="Sistema de arrastre" color="blue" />
                            <Tag text="Calendario" color="blue" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
