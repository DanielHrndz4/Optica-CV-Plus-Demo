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

      {/* Capa oscura sutil */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Contenido arriba */}
      <div className="relative z-10 flex flex-col items-center text-center h-full px-4 pt-20 md:pt-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Descubre la colección Ray-Ban
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl drop-shadow-md">
          Estilo clásico, innovación atemporal. Diseñados para destacar en cada mirada.
        </p>
      </div>
    </section>
  );
};

export default RaybanSection;
