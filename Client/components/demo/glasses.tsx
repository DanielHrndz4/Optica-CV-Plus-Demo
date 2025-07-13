"use client";

import { useState } from "react";
import { glasses } from "@/constants/glasses.constants";
import { ArrowRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = ["Todos", "Gafas oftálmicas", "Gafas de sol"];

const Glasses = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredGlasses =
        activeCategory === "Todos"
            ? glasses
            : glasses.filter((g) => g.category === activeCategory);

    return (
        <section id="gafas-oftalmicas" className="py-4 xl:py-16">
            <div className="w-full mx-auto px-4">
                {/* Título + Filtros */}
                <div className="flex w-[95%] mx-auto flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-3xl font-bold text-onyx">Nuestros productos</h2>
                    <div className="flex flex-nowrap xl:flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-4 py-2 text-sm font-medium font-sans uppercase transition-all duration-300 ${activeCategory === cat
                                        ? "text-tiffanyBlue after:w-full after:bg-tiffanyBlue"
                                        : "text-onyx hover:text-tiffanyBlue hover:after:w-full"
                                    } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:transition-all after:duration-300`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <a
                        href="#"
                        className="flex flex-row gap-2 hover:text-ripeMango text-onyx hover:underline transition-all duration-300 font-semibold pt-2 xl:pt-0"
                    >
                        Ver todo <ArrowRight />
                    </a>
                </div>

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

export default Glasses;
