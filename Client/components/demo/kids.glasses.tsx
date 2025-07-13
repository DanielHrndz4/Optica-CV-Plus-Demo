const KidsGlasses = () => {
    return (
        <section className="h-[60vh] relative bg-celadonBlue/80 m-5 xl:m-10 rounded-lg overflow-hidden">
            {/* ✅ MOBILE/TABLET VERSION */}
            <div className="block xl:hidden relative w-full h-full">
                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/img/kids2.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                />
                {/* Degradado para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 to-transparent" />

                {/* Contenido montado encima */}
                <div className="relative z-10 h-full flex flex-col justify-end items-start px-6 pb-8 animate-fade-up">
                    <span className="inline-block text-xs font-semibold text-white/90 mb-4 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                        Colección 2025
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                        Protege sus ojos con <span className="text-ripeMango">Estilo y Alegría</span>
                    </h2>
                    <p className="text-base text-white mb-5 leading-relaxed">
                        Protege la vista de tus pequeños con diseños coloridos y materiales ultra resistentes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <button className="w-full px-5 py-3 bg-white text-onyx font-semibold rounded-lg transition hover:bg-gray-100 hover:scale-105">
                            Ver colección
                        </button>
                        <button className="w-full px-5 py-3 border-2 border-white text-white font-semibold rounded-lg transition hover:bg-white/10 backdrop-blur-sm">
                            Conoce más
                        </button>
                    </div>
                </div>
            </div>

            {/* ✅ DESKTOP VERSION */}
            <div className="hidden xl:flex relative z-10 h-full w-full flex-row">
                {/* Texto a la izquierda */}
                <div className="w-full md:w-[40%] h-full flex flex-col items-start justify-center text-left px-10 md:pl-20 xl:pl-28 space-y-6">
                    <div className="max-w-md">
                        <span className="inline-block text-sm font-semibold text-white/90 mb-5 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                            Colección 2025
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Protege sus ojos con <span className="text-ripeMango">Estilo y Alegría</span>
                        </h2>

                        <p className="text-lg text-white mb-6 leading-relaxed">
                            Protege la vista de tus pequeños con diseños coloridos y materiales ultra resistentes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-3 bg-white text-onyx font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
                                Ver colección
                            </button>
                            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg backdrop-blur-sm">
                                Conoce más
                            </button>
                        </div>
                    </div>
                </div>

                {/* Imagen a la derecha */}
                <div
                    className="w-full md:w-[60%] h-full mr-10"
                    style={{
                        backgroundImage: "url('/img/kids2.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center right",
                        backgroundRepeat: "no-repeat"
                    }}
                />
            </div>
        </section>
    );
}

export default KidsGlasses;
