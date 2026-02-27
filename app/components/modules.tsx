import Tag from "@/components/Tag/Tag";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Modules() {
    return (
        <div className='relative w-full'>
            <div className='max-w-6xl mx-auto flex flex-col gap-8 items-center py-24 scroll-my-20' id="modules">
                <div className="flex justify-between w-full">
                    <div className="gap-2 flex flex-col w-full">
                        <h2 className='font-bebas-neue text-3xl font-black'>Módulos potentes</h2>
                        <p className='text-muted-foreground'>Una suite completa de herramientas integradas.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <ChevronLeft className="size-10 rounded-full border p-2" />
                        <ChevronRight className="size-10 rounded-full border p-2" />
                    </div>
                </div>
                <div className="w-full flex gap-4">
                    <div className="p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <h3 className="font-extrabold font-bebas-neue text-xl">Dashboard Ejecutivo</h3>
                        <p className="text-muted-foreground">Visualiza la ocupación actual, próximas llegadas y el estado de limpieza en una sola vista.</p>
                        <img src="/hero.png" alt="" className="mt-1.5 rounded-lg" />
                        <div className="flex flex-wrap gap-2 mt-2">
                            <Tag text="KPIs" color="gray" />
                            <Tag text="Tiempo real" color="gray" />
                        </div>
                    </div>
                    <div className="p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <h3 className="font-extrabold font-bebas-neue text-xl">Gestión de Reservas</h3>
                        <p className="text-muted-foreground">Calendario interactivo tipo drag-and-drop para mover reservas y asignar habitaciones rápidamente.</p>
                        <img src="/hero.png" alt="" className="mt-1.5 rounded-lg" />
                        <div className="flex flex-wrap gap-2 mt-2">
                            <Tag text="Drag & Drop" color="gray" />
                            <Tag text="Calendario" color="gray" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
