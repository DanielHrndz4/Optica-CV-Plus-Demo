const TestExam = () => {
    return (
        <section className="h-[80vh] relative bg-white">
            {/* ✅ MOBILE/TABLET VERSION */}
            <div className="block xl:hidden w-full h-full relative">
                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: "url('/test.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                />

                {/* Degradado desde abajo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Contenido superpuesto */}
                <div className="relative z-10 flex flex-col justify-end items-start h-full px-6 pb-10 text-white animate-fade-up">
                    <h1 className="text-3xl font-bold mb-4">
                        Exámenes Visuales Profesionales
                    </h1>
                    <p className="text-base mb-6">
                        Agenda tu prueba de visión con nuestros especialistas certificados. 
                        Tecnología de precisión para evaluar tu salud ocular y corregir 
                        cualquier problema de visión con los más altos estándares.
                    </p>
                    <button className="bg-celadonBlue text-white font-semibold py-2 px-5 rounded shadow-md hover:bg-tiffanyBlue transition">
                        Reservar Cita Ahora
                    </button>
                    <p className="text-sm text-white/80 mt-4">
                        Resultados inmediatos y recomendaciones personalizadas
                    </p>
                </div>
            </div>

            {/* ✅ DESKTOP VERSION */}
            <div className="hidden xl:flex flex-row w-full h-full">
                {/* Columna izquierda: texto y branding */}
                <div className="w-[35%] h-full flex flex-col justify-center px-10">
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-4xl font-bold text-onyx mb-6">
                            Exámenes Visuales Profesionales
                        </h1>
                        <p className="text-lg text-onyx mb-8">
                            Agenda tu prueba de visión con nuestros especialistas certificados. 
                            Tecnología de precisión para evaluar tu salud ocular y corregir 
                            cualquier problema de visión con los más altos estándares.
                        </p>
                        <button className="bg-celadonBlue text-white font-semibold py-3 px-6 rounded shadow-md hover:bg-tiffanyBlue transition">
                            Reservar Cita Ahora
                        </button>
                        <p className="text-sm text-gray-500 mt-4">
                            Resultados inmediatos y recomendaciones personalizadas
                        </p>
                    </div>
                </div>

                {/* Columna derecha: imagen */}
                <div
                    className="w-[65%] h-full"
                    style={{
                        backgroundImage: "url('/test.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                    }}
                />
            </div>
        </section>
    );
};

export default TestExam;
