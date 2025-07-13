const HugoBoss = () => {
    return (
        <section className="w-full xl:h-screen bg-white py-5 relative">
             {/* MOBILE/TABLET VERSION */}
            <div className="flex flex-col xl:hidden w-full relative">
                {/* Imagen con texto encima */}
                <div className="relative w-full h-[80%]">
                    <img src="/boss.jpg" alt="Boss" className="w-full h-full object-cover" />

                    {/* Texto encima con animación de desvanecido desde abajo */}
                    <div className="absolute h-full inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center text-center px-6 pb-10 animate-fade-up">
                        <h1 className="text-3xl font-bold text-white leading-tight mb-4">
                            Estilo icónico<br /> con visión de alto rendimiento
                        </h1>
                        <p className="text-white text-base mb-6">
                            Presentamos las <strong>BOSS 1793/F/SKB753MT</strong>: gafas de sol deportivas con diseño moderno en acetato gris transparente y detalles metálicos.
                        </p>
                        <button className="bg-white text-black text-sm font-semibold py-2 px-6 rounded hover:bg-gray-100 transition w-max">
                            COMPRAR BOSS | EDICIÓN ESPECIAL
                        </button>
                    </div>
                </div>
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden xl:flex flex-row w-full h-full">
                {/* Columna izquierda: imágenes */}
                <div className="w-[60%] h-full flex">
                    <img src="/boss.jpg" alt="Boss" className="w-1/2 h-full object-cover" />
                    <img src="/1.png" alt="Modelo 1" className="w-1/2 h-full object-cover" />
                </div>

                {/* Columna derecha: branding */}
                <div className="w-[40%] h-full relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10"
                        style={{
                            backgroundImage: "url('/3.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            scale: "1.5",
                        }}
                    ></div>

                    <div className="relative z-10 h-full flex flex-col px-10 justify-center w-[90%] mx-auto">
                        <h1 className="text-4xl font-bold text-onyx leading-tight">
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
    );
};

export default HugoBoss;
