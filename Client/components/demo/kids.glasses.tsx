const KidsGlasses = () => {
    return (
        <section className="h-[60vh] relative bg-celadonBlue/80 m-10 rounded-lg overflow-hidden">
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/20 rounded-lg" /> */}

            {/* Container for content and image */}
            <div className="relative z-10 h-full w-full flex flex-col md:flex-row">
                {/* Text content - left side - improved */}
                <div className="w-full ml-10 md:w-[40%] h-full flex flex-col items-start justify-center text-left px-10 md:pl-20 lg:pl-28 space-y-6">
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

                {/* Image - right side - now takes more space */}
                <div className="w-full md:w-[60%] h-full mr-20"
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