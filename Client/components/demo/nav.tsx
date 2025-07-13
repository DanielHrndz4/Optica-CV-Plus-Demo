"use client";

import { icon, nav } from "@/constants/demo.constants";
import { Download, Headset, Store, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type MenuSectionKey = "GAFAS OFTÁLMICAS" | "GAFAS DE SOL" | "LENTES DE CONTACTO";

type MenuSection = {
    categories: { label: string; img: string }[];
    featured: string[];
    promo: { img: string; title: string; subtitle: string };
};

const menuContent: Record<MenuSectionKey, MenuSection> = {
    "GAFAS OFTÁLMICAS": {
        categories: [
            { label: "Lentes de mujer", img: "/img/woman.png" },
            { label: "Lentes de hombre", img: "/img/man.png" },
            { label: "Lentes de niño", img: "/img/kid.png" },
        ],
        featured: [
            "40% de descuento en lentes",
            "Ray-Ban | Meta",
            "Nuevos estilos",
            "Nuestra guía de estilo",
            "Más vendidos"
        ],
        promo: {
            img: "/img/promo-optical.jpg",
            title: "Descuento del 50% en lentes",
            subtitle: "Con la compra de una montura"
        }
    },
    "GAFAS DE SOL": {
        categories: [
            { label: "Estilo aviador", img: "/img/aviator.png" },
            { label: "Estilo redondo", img: "/img/round.png" },
            { label: "Polarizados", img: "/img/polarized.png" },
        ],
        featured: [
            "Top verano 2025",
            "Colección Ray-Ban solares",
            "Guía de estilos playeros",
            "Lentes polarizados Premium"
        ],
        promo: {
            img: "/img/promo-sun.jpg",
            title: "Hasta 30% en Gafas de Sol",
            subtitle: "Esta temporada de verano"
        }
    },
    "LENTES DE CONTACTO": {
        categories: [
            { label: "Uso diario", img: "/img/daily.png" },
            { label: "Mensuales", img: "/img/monthly.png" },
            { label: "Astigmatismo", img: "/img/astigmatism.png" },
        ],
        featured: [
            "Top marcas en contacto",
            "Paquetes de suscripción",
            "Guía de uso y cuidado",
            "Promos para nuevos usuarios"
        ],
        promo: {
            img: "/img/promo-contact.jpg",
            title: "Tu primer mes GRATIS",
            subtitle: "En suscripciones seleccionadas"
        }
    }
};

const Nav = () => {
    const [openItem, setOpenItem] = useState<MenuSectionKey | null>(null);

    const handleItemClick = (menuKey?: MenuSectionKey) => {
        if (!menuKey) {
            setOpenItem(null);
            return;
        }

        setOpenItem((prev) => (prev === menuKey ? null : menuKey));
    };

    const closeMenu = () => {
        setOpenItem(null);
    };

    return (
        <>
            {openItem && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                />
            )}
            <header className="fixed top-0 z-50 w-full border-b pb-2 bg-white">
                {/* Banner superior - Solo desktop */}
                <div className="hidden xl:block h-[36px] bg-[#f6f6f6]">
                    <div className="w-[95%] mx-auto flex flex-row justify-between h-full">
                        <div className="flex items-center text-sm text-gray-600 gap-4">
                            <span className="flex flex-row gap-2 items-center hover:cursor-pointer hover:underline hover:text-[#252525]">
                                <Store className="w-5" /> Nuestras sucursales
                            </span>
                            <span className="flex flex-row gap-2 items-center hover:cursor-pointer hover:underline hover:text-[#252525]">
                                <Headset className="w-5" /> Contacto
                            </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 font-semibold">
                            <span>¡Bienvenido a Óptica CV+! Tu visión es nuestra prioridad.</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="flex flex-row gap-2 items-center hover:cursor-pointer hover:underline hover:text-[#252525]">
                                <Download className="w-5" /> Descarga la App
                            </span>
                        </div>
                    </div>
                </div>

                {/* Slider - Solo móvil/tablet */}
                <div className="xl:hidden h-[36px] bg-[#f6f6f6] flex items-center">
                    <div className="w-[90%] mx-auto">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop
                            slidesPerView={1}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <div className="flex items-center justify-center text-sm text-gray-600 gap-2">
                                    <Store className="w-5" /> Nuestras sucursales
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center text-sm text-gray-600 gap-2">
                                    <Headset className="w-5" /> Contacto
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center text-sm text-gray-600 font-semibold">
                                    ¡Bienvenido a Óptica CV+!
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center text-sm text-gray-600 gap-2">
                                    <Download className="w-5" /> Descarga la App
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* Navegación principal */}
                <div className="relative flex h-16 items-center justify-between w-[90%] mx-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Óptica CV+" className="w-[256px]" />
                    </div>

                    {/* Navegación */}
                    <nav className="hidden xl:flex items-center space-x-8 justify-center">
                        {nav.map((item) =>
                            item.menu ? (
                                <button
                                    key={item.href}
                                    onClick={() => handleItemClick(item.menu)}
                                    className={cn(
                                        "relative text-md font-medium font-sans uppercase transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-tiffanyBlue after:transition-all after:duration-300",
                                        openItem === item.menu
                                            ? "text-tiffanyBlue after:w-full"
                                            : "after:w-0 hover:text-tiffanyBlue hover:after:w-full"
                                    )}
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="relative text-md font-medium font-sans uppercase transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-tiffanyBlue after:transition-all after:duration-300 hover:text-tiffanyBlue hover:after:w-full"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Botones y iconos */}
                    <div className="flex items-center space-x-4">
                        {/* Iconos */}
                        <div className="hidden xl:flex items-center space-x-3 text-gray-700">
                            {icon.map((item, index) => (
                                <button
                                    key={index}
                                    aria-label={item.name}
                                    className="p-3 hover:bg-[#f6f6f6] rounded-full transition-colors duration-300"
                                >
                                    <item.icon className="h-6 w-6 font-bold" />
                                </button>
                            ))}
                        </div>
                        <Sheet>
                            <SheetTrigger className="xl:hidden p-2">
                                <Menu className="h-6 w-6" />
                            </SheetTrigger>
                            <SheetContent side="left" className="xl:hidden p-6">
                                {/* Logo */}
                                <div className="flex items-center space-x-2">
                                    <img src="/logo.png" alt="Óptica CV+" className="w-[256px]" />
                                </div>
                                <div className="mt-2 flex space-x-4">
                                    {icon.reverse().map((item, index) => (
                                        <button
                                            key={index}
                                            aria-label={item.name}
                                            className="p-3 hover:bg-[#f6f6f6] rounded-full transition-colors duration-300"
                                        >
                                            <item.icon className="h-6 w-6" />
                                        </button>
                                    ))}
                                </div>
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {nav.map((item) => (
                                        <SheetClose asChild key={item.href}>
                                            {item.menu ? (
                                                <button
                                                    onClick={() => handleItemClick(item.menu)}
                                                    className="text-left text-base font-medium uppercase text-gray-700 hover:text-tiffanyBlue"
                                                >
                                                    {item.name}
                                                </button>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="text-left text-base font-medium uppercase text-gray-700 hover:text-tiffanyBlue"
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </SheetClose>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Menú desplegable */}
                {openItem && (
                    <div 
                        className="absolute left-0 top-full w-full bg-white shadow-lg z-50 py-6"
                        onMouseLeave={closeMenu}
                    >
                        <div className="w-[95%] mx-auto grid grid-cols-12 gap-8">
                            {/* Obtener data dinámica */}
                            {(() => {
                                const section = menuContent[openItem as MenuSectionKey];
                                if (!section) return null;

                                return (
                                    <>
                                        {/* Categorías */}
                                        <div className="col-span-3 space-y-4">
                                            <h4 className="font-bold text-lg">Categorías</h4>
                                            {section.categories.map((cat, idx) => (
                                                <div key={idx} className="flex items-center gap-3 hover:underline cursor-pointer">
                                                    <img src={cat.img} alt={cat.label} className="w-10 h-10 rounded-full" />
                                                    <span>{cat.label}</span>
                                                </div>
                                            ))}
                                            <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
                                                Ver todos los lentes
                                            </button>
                                        </div>

                                        {/* Destacados */}
                                        <div className="col-span-6 space-y-2">
                                            <h4 className="font-bold text-lg">Destacados</h4>
                                            <ul className="text-sm space-y-1">
                                                {section.featured.map((item, idx) => (
                                                    <li key={idx} className="hover:underline cursor-pointer">{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Imagen promocional */}
                                        <div className="col-span-3">
                                            <div className="relative bg-[#f6f6f6] rounded shadow-md overflow-hidden h-full">
                                                <img src={section.promo.img} alt="Promo" className="w-full object-cover h-[200px]" />
                                                <div className="p-4">
                                                    <h5 className="text-md font-bold">{section.promo.title}</h5>
                                                    <p className="text-sm text-gray-600 mt-1">{section.promo.subtitle}</p>
                                                    <button className="mt-3 px-4 py-2 border text-sm rounded hover:bg-black hover:text-white transition">
                                                        Ver ahora
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Nav;