import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col gap-6 w-full text-foreground/90">
            <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">Política de Privacidad</h2>
                <p className="text-sm text-muted-foreground">Última actualización: Febrero 2026</p>
            </div>

            <div className="space-y-6 text-[15px] leading-relaxed">
                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">1. Introducción</h3>
                    <p>
                        En FoxRooms, valoramos enormemente su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestro sistema de gestión hotelera (PMS) y los servicios asociados.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">2. Información que Recopilamos</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong className="text-foreground">Datos de Cuenta:</strong> Nombre, correo electrónico, teléfono y credenciales de acceso.</li>
                        <li><strong className="text-foreground">Datos de Propiedad:</strong> Información sobre su hotel, incluyendo configuración de habitaciones y sedes.</li>
                        <li><strong className="text-foreground">Datos de Huéspedes:</strong> Información gestionada por usted a través de nuestra plataforma, procesada únicamente bajo sus instrucciones (nuestro rol como procesador de datos).</li>
                        <li><strong className="text-foreground">Datos de Uso:</strong> Información sobre cómo interactúa con nuestra interfaz para mejorar el rendimiento.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">3. Uso de la Información</h3>
                    <p>
                        Utilizamos la información recopilada para:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Proporcionar, mantener y mejorar nuestro PMS.</li>
                        <li>Procesar transacciones y enviar avisos relacionados.</li>
                        <li>Ofrecer soporte técnico y responder a sus consultas.</li>
                        <li>Garantizar la seguridad de la plataforma y prevenir actividades fraudulentas.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">4. Compartir Información</h3>
                    <p>
                        No vendemos su información personal. Podemos compartir datos exclusivamente con proveedores de servicios de terceros (por ejemplo, pasarelas de pago o servicios de hosting en la nube) que son estrictamente necesarios para operar la plataforma y bajo estrictos acuerdos de confidencialidad.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">5. Seguridad de los Datos</h3>
                    <p>
                        Implementamos medidas de seguridad líderes en la industria para proteger su información contra pérdida, robo y acceso no autorizado. Los datos en tránsito y en reposo se encuentran encriptados (SSL/AES).
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">6. MediacIones y Modificaciones</h3>
                    <p>
                        Nos reservamos el derecho de actualizar esta política. Los cambios sustanciales serán comunicados a través de la plataforma o vía correo electrónico. El uso continuado de FoxRooms después de dichas modificaciones implica la aceptación de la nueva política.
                    </p>
                </section>

                <section>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">7. Contacto</h3>
                    <p>
                        Para cualquier duda relacionada con la privacidad de sus datos, contáctenos en <a href="mailto:privacy@foxrooms.com" className="text-blue-600 hover:underline">privacy@foxrooms.com</a>.
                    </p>
                </section>
            </div>
        </div>
    )
}
