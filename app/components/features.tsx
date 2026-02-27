import { ChartArea, CircleDollarSign, Clock, Grid, Grid2X2, ShieldCheck, Users2 } from "lucide-react";

export default function Features() {
    return (
        <section className="py-20 bg-background scroll-my-20" id="features">
            <div className="max-w-6xl mx-auto text-center flex flex-col gap-10">
                <div className="max-w-2xl mx-auto gap-2 flex flex-col">
                    <h2 className='font-bebas-neue text-3xl font-black'>Todo lo que necesitas para operar sin estrés</h2>
                    <p className='text-muted-foreground'>Herramientas diseñadas específicamente para resolver los problemas reales de la hotelería moderna en una sola plataforma integrada.</p>
                </div>
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <div className="col-span-2 p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <Grid2X2 className="bg-blue-100 text-blue-500 p-2 rounded-lg size-9" />
                        <h3 className="font-bebas-neue text-lg font-bold mt-1">Centralización Operativa</h3>
                        <p className="text-muted-foreground">Gestiona reservas, check-ins y limpieza desde un solo panel de control unificado y accesible desde cualquier dispositivo.</p>
                    </div>
                    <div className="col-start-3 p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <ShieldCheck className="bg-blue-100 text-blue-500 p-2 rounded-lg size-9" />
                        <h3 className="font-bebas-neue text-lg font-bold mt-1">Cero Errores</h3>
                        <p className="text-muted-foreground">Automatiza asignaciones y facturación para eliminar fallos humanos críticos.</p>
                    </div>
                    <div className="col-start-4 p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <Users2 className="bg-blue-100 text-blue-500 p-2 rounded-lg size-9" />
                        <h3 className="font-bebas-neue text-lg font-bold mt-1">Gestión de Personal</h3>
                        <p className="text-muted-foreground">Sincronización total entre recepción y limpieza en tiempo real.</p>
                    </div>
                    <div className="row-start-2 p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <ChartArea className="bg-blue-100 text-blue-500 p-2 rounded-lg size-9" />
                        <h3 className="font-bebas-neue text-lg font-bold mt-1">Trazabilidad</h3>
                        <p className="text-muted-foreground">Auditoría completa de cada cambio de tarifa o cancelación.</p>
                    </div>
                    <div className="col-span-2 row-start-2 p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <Clock className="bg-blue-100 text-blue-500 p-2 rounded-lg size-9" />
                        <h3 className="font-bebas-neue text-lg font-bold mt-1">Atención Ágil</h3>
                        <p className="text-muted-foreground">Optimiza los tiempos de espera con flujos de trabajo diseñados para la máxima rapidez en el mostrador.</p>
                    </div>
                    <div className="col-start-4 row-start-2 p-4 border rounded-2xl bg-card flex flex-col gap-1 text-left">
                        <CircleDollarSign className="bg-blue-100 text-blue-500 p-2 rounded-lg size-9" />
                        <h3 className="font-bebas-neue text-lg font-bold mt-1">Control Caja</h3>
                        <p className="text-muted-foreground">Cierres diarios sin descuadres y gestión de gastos inteligente.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
