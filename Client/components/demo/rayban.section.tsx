const RaybanSection = () => {
  return (
    <section className="h-[85vh] relative bg-white">
      {/* Imagen de fondo */}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          backgroundImage: "url('/img/rb-section-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Capa oscura general */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Degradado desde abajo en móviles */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent xl:hidden" />

      {/* Contenido */}
      <div className="px-6 relative z-10 h-full w-full xl:px-4 flex flex-col xl:justify-start justify-end items-center text-center pt-8 xl:pt-24 pb-10 animate-fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Descubre la colección Ray-Ban
        </h2>
        <p className="text-base md:text-xl text-white/90 mb-6 max-w-xl drop-shadow-md">
          Estilo clásico, innovación atemporal. Diseñados para destacar en cada mirada.
        </p>
      </div>
    </section>
  );
};

export default RaybanSection;
