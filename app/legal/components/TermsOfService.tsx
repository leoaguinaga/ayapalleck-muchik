import React from 'react'

export default function TermsOfService() {
    return (
        <div className="flex flex-col gap-6 w-full text-foreground/90">
            <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">Términos de Servicio</h2>
                <p className="text-sm text-muted-foreground">Última actualización: Febrero 2026</p>
            </div>

            <div className="space-y-6 text-[15px] leading-relaxed">
                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">1. Aceptación de Términos</h3>
                    <p>
                        Al registrarse o usar FoxRooms, usted acuerda estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte, no podrá utilizar la plataforma.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">2. Descripción del Servicio</h3>
                    <p>
                        FoxRooms proporciona un Software como Servicio (SaaS) diseñado para la gestión y operación hotelera. Incluye módulos para la visualización de habitaciones, recepción (check-in/check-out), facturación y reportes analíticos para propiedades.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">3. Uso Aceptable y Responsabilidad</h3>
                    <p>Usted se compromete a:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Mantener la confidencialidad de las credenciales de su cuenta.</li>
                        <li>No utilizar el servicio para fines ilícitos o transacciones fraudulentas.</li>
                        <li>Proveer detalles reales sobre su propiedad, ya que asume total responsabilidad sobre las reservas generadas.</li>
                    </ul>
                    <p className="mt-2">
                        FoxRooms no es responsable por overbookings originados por un mal manejo del calendario por parte del usuario.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">4. Propiedad Intelectual</h3>
                    <p>
                        Todo el diseño de la plataforma, código fuente, interfaz y la marca FoxRooms son propiedad exclusiva de FoxCode. Ningún derecho de copia o distribución se entrega como parte de la suscripción de su cuenta.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">5. Pagos y Suscripciones</h3>
                    <p>
                        Las tarifas y periodos de prueba están publicadas en nuestro portal. El acceso continuo exige un estado de pagos al día. Cuentas con 15 días continuos de pagos rechazados serán suspendidas hasta que la facturación sea regularizada, sin destrucción de datos en el primer mes de gracia.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">6. Limitación de Responsabilidad</h3>
                    <p>
                        En ningún caso FoxRooms y FoxCode responderán por la pérdida de beneficios, interrupción del negocio u otros daños indirectos relacionados o derivados de fallos del sistema o conectividad que estén fuera de nuestro control razonable, como interrupciones severas de AWS u otros proveedores Cloud.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">7. Interrupción del Servicio</h3>
                    <p>
                        Usted puede cancelar su suscripción en el panel de facturación en cualquier momento. Nos reservamos el derecho de cancelar o suspender acceso sin aviso en eventos donde estos términos han sido violados explícitamente y con intencionalidad maliciosa.
                    </p>
                </section>

            </div>
        </div>
    )
}
