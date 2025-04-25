export default function Contacto() {
    return (
        <section className="w-full flex justify-center bg-base-200 p-3 Z-50" id="contacto">
            <div className="w-full max-w-3xl rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg p-2 z-20 flex gap-1" data-aos="zoom-in">
                <div className="w-[100%] lg:w-[50%] md:block hidden">
                    <img src="/img/form.png" alt="form-img" className="rounded"/>
                </div>
                <div className="w-[100%] lg:w-[50%] flex justify-center items-center flex-col p-4">
                    <h2 className="text-4xl font-bold pb-7 text-center">Contáctanos</h2>
                    <form className="space-y-5 w-full">
                        <div className="form-control">
                            <label className="floating-label">
                                <input type="text" placeholder="Nombre" className="input input-md w-full" required />
                                <span>Tu Nombre</span>
                            </label>
                        </div>

                        <label className="floating-label">
                            <span>Tu correo</span>
                            <input type="email" placeholder="mail@site.com" className="input input-md validator w-full" required />
                            <div className="validator-hint">Ingresa un correo valido</div>
                        </label>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Mensaje</legend>
                            <textarea className="textarea h-24 w-full" placeholder="Tu mensaje" required></textarea>
                        </fieldset>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Enviar mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
