export default function Footer() {
    return (
        <div className="w-full py-10 border-t bg-card">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-2">
                            <span className="font-bebas-neue text-3xl font-black">FoxRooms</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            El PMS que convierte tu operación en precisión. Optimiza la gestión de reservas, limpieza y facturación de tu hotel.
                        </p>
                    </div>

                    <div className="flex gap-16 md:gap-24">
                        <div className="flex flex-col gap-3">
                            <h4 className="font-semibold text-foreground">Producto</h4>
                            <a href="#features" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Características</a>
                            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Cómo funciona</a>
                            <a href="#modules" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Módulos</a>
                            <a href="#pricing" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Precios</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-semibold text-foreground">Soporte</h4>
                            <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Centro de ayuda</a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Contacto</a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Estado del sistema</a>
                        </div>
                    </div>
                </div>

                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} FoxCode. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-foreground transition-colors">Políticas de Privacidad</a>
                        <a href="#" className="hover:text-foreground transition-colors">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
