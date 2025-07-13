// components/Brands.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const brands = [
    {
        name: "Ray-Ban",
        image: "/img/brands/rb.png",
    },
    {
        name: "Oakley",
        image: "/img/brands/ok.png",
    },
    {
        name: "Prada",
        image: "/img/brands/prada.png",
    },
    {
        name: "Versace",
        image: "/img/brands/versace.png",
    },
    {
        name: "Gucci",
        image: "/img/brands/gucci.png",
    },
    {
        name: "Persol",
        image: "/img/brands/persol.png",
    },
    {
        name: "Tiffany & Co.",
        image: "/img/brands/tf.png",
    },
];

const Brands = () => {
    return (
        <section className="py-4 bg-white w-full">
            <div className="max-w-full mx-auto px-4">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={40}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center h-24">
                                <Link href={`/brands/${brand.name.toLowerCase()}`}>
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Brands;
