export default function Nosotros() {
    return (
        <section className="w-full flex justify-center bg-base-200 p-3" id="nosotros">
            <div className="max-w-7xl flex justify-center items-center gap-4 flex-col sm:flex-col lg:flex-row z-20 my-10">
                <div className="w-[100%] lg:w-[50%] lg:p-5 p-1 pb-5 flex justify-center items-center" data-aos="fade-up-right">
                    <img src="/img/logo.webp" alt="logo" className="w-80" />
                </div>
                <div className="w-[100%] lg:w-[50%] p-5" data-aos="fade-up-left">
                    <h2 className="pb-2 text-4xl font-bold">Nosotros</h2> <br />
                    <p className="text-justify"><span className="font-bold">RONMAR</span> proporciona una amplia gama de servicios de mantenimiento
                        para Centros de Datos y Tecnologías de la información a nivel nacional. <br /><br />
                        Enfocados principalmente cubrir las necesidades de las empresas, para
                        otorgar soluciones eficientes de alta calidad y profesionalismo. <br /><br />
                        Con mas de 14 años de experiencia en el mercado de Infraestructura Critica
                        de tecnologías de la información hemos ayudado a las empresas a concretar
                        Proyectos y Sistemas Operativos, siendo un aliado de confianza, a través de
                        nuestros servicios de manera eficiente y manteniendo altos márgenes
                        de cumplimiento de los niveles de servicio requeridos.</p>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(50%-1rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-85rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-40rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#1d6577] to-[rgb(43,58,141)] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </section>
    )
}
