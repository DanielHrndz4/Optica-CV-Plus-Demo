const HeroSection = () => {
    return(
        <section className="relative w-full h-screen overflow-hidden">
          {/* Video de fondo */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://media.ray-ban.com/cms/resource/blob/1434576/9eba1b312acda87f9898f7b973b90c74/rbm-ss25-hp-hero-d-data.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>

          {/* Capa opcional de oscurecimiento */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Contenido visible */}
          <div className="relative z-20 flex flex-col items-center justify-end text-center h-full text-white px-4 pb-16">
            <img src="/svg/ray-meta.svg" alt="Ray Meta" className="pb-6" />
            <h1 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">Explora la Nueva Colección</h1>
            <p className="mt-4 text-lg lg:text-xl max-w-2xl drop-shadow-md">
              Descubre el diseño, innovación y estilo de la temporada. Inspirado en la visión del mañana.
            </p>
            <div className="flex flex-row gap-3">
              <a
                href="#coleccion"
                className="mt-6 inline-block bg-celadonBlue text-white font-semibold py-3 px-6 rounded shadow-md hover:bg-tiffanyBlue transition"
              >
                Comprar Colección
              </a>
              <a
                href="#coleccion"
                className="mt-6 inline-block bg-celadonBlue text-white font-semibold py-3 px-6 rounded shadow-md hover:bg-tiffanyBlue transition"
              >
                Ver Más
              </a>
            </div>
          </div>
        </section>
    )
}

export default HeroSection;