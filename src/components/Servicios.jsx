
export default function Servicios() {
    return (
        <section className="w-full justify-center bg-base-200 p-3 overflow-x-hidden" id="servicios">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-100 z-10 transform-gpu overflow-hidden blur-3xl sm:top-220"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-30rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#b79ff8] to-[#fc3f97] opacity-35 sm:left-[calc(50%-5rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="max-w-7xl z-20 my-10">
                <h2 className="text-4xl font-bold pb-7 text-center">Servicios</h2>
                <div className="w-[100%] lg:w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg" data-aos="fade-down">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/electricidad.png" className="max-w-30" alt="infraestructura eléctrica crítica" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2 text-center">Diseño e instalación de infraestructura eléctrica crítica</h3>
                            <p>Incluye la implementación de Plantas de Emergencia, UPS y PDU, garantizando continuidad operativa incluso ante fallos eléctricos.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg" data-aos="fade-down">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/mantenimiento.png" className="max-w-30" alt="Mantenimiento preventivo y correctivo" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2 text-center">Mantenimiento preventivo y correctivo especializado</h3>
                            <p>Servicios programados para asegurar el funcionamiento óptimo de sistemas como aires acondicionados, tierras físicas, pararrayos y cableado estructurado.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg" data-aos="fade-down">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/vigilancia.png" className="max-w-30" alt="monitoreo de sistemas contra incendios" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2 text-center">Implementación y monitoreo de sistemas contra incendios</h3>
                            <p>Soluciones integrales para la detección, alarma y supresión de incendios, incluyendo mantenimiento continuo para garantizar su operatividad.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg" data-aos="fade-down">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/proteger.png" className="max-w-30" alt="seguridad electrónica" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2 text-center">Sistemas de seguridad electrónica y control de accesos</h3>
                            <p>Integración de CCTV, control de accesos físicos y digitales, con soporte técnico y mantenimiento continuo.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg" data-aos="fade-down">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/infraestructura.png" className="max-w-30" alt="infraestructura tecnológica" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2 text-center">Consultoría y mejora de infraestructura tecnológica</h3>
                            <p>Asesoramiento personalizado para optimizar cableado estructurado, fibra óptica y redes de comunicación.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg" data-aos="fade-down">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/auditoria.png" className="max-w-30" alt="Auditorías técnicas y reportes de confiabilidad operativa" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2 text-center">Auditorías técnicas y reportes de confiabilidad operativa</h3>
                            <p>Evaluaciones técnicas periódicas para identificar riesgos y oportunidades de mejora en los sistemas implementados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
