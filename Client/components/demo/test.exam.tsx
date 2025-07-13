const TestExam = () => {
    return (
        <section className="h-[80vh] relative bg-white flex flex-row">
            {/* Columna izquierda: texto y branding */}
            <div className="w-[35%] h-full flex flex-col justify-center px-10">
                <div className="w-[90%] mx-auto">
                    <h1 className="text-4xl font-bold text-onyx mb-6">
                    Exámenes Visuales Profesionales
                </h1>
                <p className="text-lg text-gray-700 mb-8">
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
            <div className="w-[65%] h-full"
                style={{ backgroundImage: "url('/test.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
            >
            </div>
        </section>
    );
}

export default TestExam;