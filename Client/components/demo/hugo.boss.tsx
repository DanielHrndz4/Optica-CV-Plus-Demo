const HugoBoss = () => {
    return (
        <section className="w-full h-screen bg-white py-5">
            <div className="flex w-full h-full">
                {/* Columna izquierda: imágenes del producto */}
                <div className="w-[60%] h-full flex">
                    <img src="/boss.jpg" alt="Boss" className="w-1/2 h-full object-cover" />
                    <img src="/1.png" alt="Modelo 1" className="w-1/2 h-full object-cover" />
                </div>

                {/* Columna derecha: texto y branding */}
                <div className="w-[40%] h-full relative overflow-hidden">
                    {/* Fondo con imagen */}
                    <div
                        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10"
                        style={{
                            backgroundImage: "url('/3.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            scale: "1.5",
                        }}
                    ></div>

                    {/* Contenido encima del fondo */}
                    <div className="relative z-10 h-full flex flex-col px-10 justify-center w-[90%] mx-auto">
                        <h1 className="text-4xl lg:text-4xl font-bold text-onyx leading-tight">
                            Estilo icónico<br /> con visión de alto rendimiento
                        </h1>

                        <p className="mt-6 text-[#252525] leading-relaxed text-lg">
                            Presentamos las <strong>BOSS 1793/F/SKB753MT</strong>: gafas de sol deportivas con diseño moderno en acetato gris
                            transparente y detalles metálicos. Para quienes buscan marcar tendencia con seguridad y elegancia.
                        </p>

                        <button className="mt-10 bg-black text-white text-sm font-semibold py-3 px-8 rounded hover:bg-gray-800 transition w-max">
                            COMPRAR BOSS | EDICIÓN ESPECIAL
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default HugoBoss;