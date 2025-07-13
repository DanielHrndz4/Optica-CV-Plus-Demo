"use client";

import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RBglasses } from "@/constants/glasses.constants";

const GlassesRayban = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredGlasses =
        activeCategory === "Todos"
            ? RBglasses
            : RBglasses.filter((g) => g.category === activeCategory);

    return (
        <section id="gafas-oftalmicas" className="py-5">
            {/* Título + Filtros */}
            <div className="flex w-[95%] mx-auto flex-col md:flex-row justify-between items-center mb-5 gap-4">
                <img src="/img/brands/rb.png" alt="Ray-ban" className="w-36"/>
                <a
                    href="#"
                    className="flex flex-row gap-2 hover:text-ripeMango text-onyx hover:underline transition-all duration-300 font-semibold"
                >
                    Ver colección <ArrowRight />
                </a>
            </div>
            <div className="w-full mx-auto px-4">
                {/* Carrusel con navegación */}
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {filteredGlasses.map((g, i) => (
                        <SwiperSlide key={i}>
                            <div className="w-full relative hover:cursor-pointer group mb-5">
                                {/* Encabezado superior */}
                                <div className="absolute top-0 left-0 right-0 py-8 px-6 flex flex-row justify-between z-10">
                                    <h3 className="text-xl font-semibold text-celadonBlue">
                                        {g.tag}
                                    </h3>
                                    <span className="text-lg font-bold">
                                        <Heart />
                                    </span>
                                </div>

                                {/* Imagen con efecto hover */}
                                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                                    <img
                                        src={g.image[0]}
                                        alt={`${g.brand} ${g.model}`}
                                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    />
                                    <img
                                        src={g.image[1]}
                                        alt={`${g.brand} ${g.model} alt`}
                                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Información flotante */}
                                <div className="absolute bottom-0 left-0 right-0 py-6 px-6 shadow-lg rounded-b-lg flex flex-col gap-1 z-10">
                                    <h3 className="text-lg font-semibold text-onyx">
                                        {g.brand} {g.model}
                                    </h3>
                                    <span className="text-md font-bold text-tiffanyBlue">
                                        $ {g.price}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default GlassesRayban;
