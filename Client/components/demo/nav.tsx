"use client";

import { iconDesktop, iconMobile, nav } from "@/constants/demo.constants";
import { Download, Headset, Store, Menu, ChevronLeft, Search, CalendarDays, Percent } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type MenuSectionKey = "GAFAS OFTÁLMICAS" | "GAFAS DE SOL" | "LENTES DE CONTACTO" | "MARCAS" | "CRISTALES" | "AGENDAR EXAMEN" | "OFERTA";

type MenuSection = {
    categories: { label: string; img: string }[];
    featured: string[];
    promo: { img: string; title: string; subtitle: string };
};

const menuContent: Record<MenuSectionKey, MenuSection> = {
    "GAFAS OFTÁLMICAS": {
        categories: [
            { label: "Lentes de mujer", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Women.jpg" },
            { label: "Lentes de hombre", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Men.jpg" },
            { label: "Lentes de niño", img: "	https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Kid.jpg" },
        ],
        featured: [
            "40% de descuento en lentes",
            "Ray-Ban | Meta",
            "Nuevos estilos",
            "Nuestra guía de estilo",
            "Más vendidos",
        ],
        promo: {
            img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn",
            title: "Descuento del 50% en lentes",
            subtitle: "Con la compra de una montura",
        },
    },
    "GAFAS DE SOL": {
        categories: [
            { label: "Lentes de mujer", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Women.jpg" },
            { label: "Lentes de hombre", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Men.jpg" },
            { label: "Lentes de niño", img: "	https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Kid.jpg" },
        ],
        featured: [
            "Top verano 2025",
            "Colección Ray-Ban solares",
            "Guía de estilos playeros",
            "Lentes polarizados Premium",
        ],
        promo: {
            img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn",
            title: "Hasta 30% en Gafas de Sol",
            subtitle: "Esta temporada de verano",
        },
    },
    "LENTES DE CONTACTO": {
        categories: [
            { label: "Lentes de mujer", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Women.jpg" },
            { label: "Lentes de hombre", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Men.jpg" },
            { label: "Lentes de niño", img: "	https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Kid.jpg" },
        ],
        featured: [
            "Top marcas en contacto",
            "Paquetes de suscripción",
            "Guía de uso y cuidado",
            "Promos para nuevos usuarios",
        ],
        promo: {
            img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn",
            title: "Tu primer mes GRATIS",
            subtitle: "En suscripciones seleccionadas",
        },
    },
    "MARCAS": {
        categories: [
            { label: "Lentes de mujer", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Women.jpg" },
            { label: "Lentes de hombre", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Men.jpg" },
            { label: "Lentes de niño", img: "	https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Kid.jpg" },
        ],
        featured: [
            "Nuevas colecciones 2025",
            "Ediciones limitadas",
            "Marcas premium",
            "Ofertas exclusivas",
        ],
        promo: {
            img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn",
            title: "20% de descuento en marcas seleccionadas",
            subtitle: "Solo por tiempo limitado",
        },
    },
    "CRISTALES": {
        categories: [
            { label: "Lentes de mujer", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Women.jpg" },
            { label: "Lentes de hombre", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Men.jpg" },
            { label: "Lentes de niño", img: "	https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Kid.jpg" },
        ],
        featured: [
            "Tecnología avanzada",
            "Protección UV 100%",
            "Garantía de calidad",
            "Cristales delgados y ligeros",
        ],
        promo: {
            img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn",
            title: "Cristales premium con 30% de descuento",
            subtitle: "Incluye tratamiento anti-rayas",
        },
    },
    "AGENDAR EXAMEN": {
        categories: [
            { label: "Examen de la vista", img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn" },
            { label: "Consulta especializada", img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn" },
            { label: "Examen para niños", img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn" },
        ],
        featured: [
            "Tecnología de punta",
            "Resultados inmediatos",
            "Oftalmólogos certificados",
            "Sin costo con seguro médico",
        ],
        promo: {
            img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn",
            title: "Primer examen GRATIS",
            subtitle: "Para nuevos clientes",
        },
    },
    "OFERTA": {
        categories: [
            { label: "Lentes de mujer", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Women.jpg" },
            { label: "Lentes de hombre", img: "https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Men.jpg" },
            { label: "Lentes de niño", img: "	https://media.lenscrafters.com/2025/BS_AssetRefresh_2025/DDM/X_Eyeglasses_Kid.jpg" },
        ],
        featured: [
            "Hasta 60% de descuento",
            "2x1 en lentes seleccionados",
            "Promociones exclusivas",
            "Ofertas flash",
        ],
        promo: {
            img: "https://imgs.search.brave.com/70xfLtxcH-ievzly2ULlbXjgMMnfOLTtXo_S0Mzy3h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzIzLzc2LzAz/LzM2MF9GXzE0MjM3/NjAzNzFfQ3dSeFp5/UzBDSlpOMkN0SmNX/NW91a3pSOEJDV3pE/ekouanBn",
            title: "Gran liquidación de verano",
            subtitle: "Hasta 70% de descuento",
        },
    },
};

const Nav = () => {
    const [openItem, setOpenItem] = useState<MenuSectionKey | null>(null);
    const [mobileSubMenu, setMobileSubMenu] = useState<MenuSectionKey | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleItemClick = (menuKey?: MenuSectionKey) => {
        if (!menuKey) {
            setOpenItem(null);
            return;
        }
        setOpenItem((prev) => (prev === menuKey ? null : menuKey));
    };

    const handleMobileSubMenu = (menuKey: MenuSectionKey) => {
        setMobileSubMenu(menuKey);
    };

    const closeMenu = () => {
        setOpenItem(null);
    };

    const closeMobileSubMenu = () => {
        setMobileSubMenu(null);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de búsqueda aquí
        console.log("Buscando:", searchQuery);
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
                                    onClick={() => handleItemClick(item.menu as MenuSectionKey)}
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
                    <div className="flex items-center jusc space-x-4">
                        {/* Iconos */}
                        <div className="hidden xl:flex items-center space-x-3 text-gray-700">
                            {iconDesktop.map((item, index) => (
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
                            <SheetContent side="left" className="xl:hidden p-0 w-full h-full">
                                {/* Header del Sheet */}
                                <div className="p-6 border-b">
                                    <div className="flex items-center justify-center space-x-2">
                                        <img src="/logo.png" alt="Óptica CV+" className="w-[200px]" />
                                    </div>
                                    {/* Iconos */}
                                    <div className="flex space-x-4 justify-center items-center">
                                        {iconMobile.reverse().map((item, index) => (
                                            <button
                                                key={index}
                                                aria-label={item.name}
                                                className="p-3 hover:bg-[#f6f6f6] rounded-full transition-colors duration-300"
                                            >
                                                <item.icon className="h-6 w-6" />
                                            </button>
                                        ))}
                                    </div>

                                    {/* Barra de búsqueda */}
                                    <form onSubmit={handleSearch} className="mt-4 relative">
                                        <input
                                            type="text"
                                            placeholder="Buscar productos..."
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tiffanyBlue"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                    </form>
                                </div>

                                {/* Contenido principal del Sheet */}
                                <div className="overflow-y-auto max-h-[calc(100vh-180px)] pr-2 pb-16">
                                    {/* Menú principal */}
                                    {!mobileSubMenu && (
                                        <nav className="flex flex-col">
                                            {nav.map((item) => (
                                                <div key={item.href}>
                                                    {item.menu ? (
                                                        <button
                                                            onClick={() => handleMobileSubMenu(item.menu as MenuSectionKey)}
                                                            className="px-6 py-4 text-base font-medium uppercase text-gray-700 hover:bg-gray-50 border-b w-full text-start"
                                                        >
                                                            {item.name}
                                                        </button>
                                                    ) : (
                                                        <SheetClose asChild>
                                                            <Link
                                                                href={item.href}
                                                                className="text-left px-6 py-4 text-base font-medium uppercase text-gray-700 hover:bg-gray-50 border-b block"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </SheetClose>
                                                    )}
                                                </div>
                                            ))}
                                        </nav>
                                    )}

                                    {/* Submenú */}
                                    {mobileSubMenu && (
                                        <div className="animate-in slide-in-from-right">
                                            {/* Header del submenú */}
                                            <div className="flex items-center px-6 py-4 border-b bg-gray-50">
                                                <button
                                                    onClick={closeMobileSubMenu}
                                                    className="mr-2 p-1 rounded-full hover:bg-gray-200"
                                                >
                                                    <ChevronLeft className="h-5 w-5" />
                                                </button>
                                                <h3 className="font-bold text-lg uppercase">
                                                    {mobileSubMenu}
                                                </h3>
                                            </div>

                                            {/* Contenido del submenú */}
                                            <div className="p-6">
                                                {(() => {
                                                    const section = menuContent[mobileSubMenu];
                                                    if (!section) return null;

                                                    return (
                                                        <>
                                                            {/* Categorías */}
                                                            <div className="space-y-4 mb-6">
                                                                <h4 className="font-bold text-md uppercase text-tiffanyBlue">Categorías</h4>
                                                                {section.categories.map((cat, idx) => (
                                                                    <SheetClose asChild key={idx}>
                                                                        <Link
                                                                            href="#"
                                                                            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg"
                                                                        >
                                                                            <img src={cat.img} alt={cat.label} className="w-10 h-10 rounded-full" />
                                                                            <span>{cat.label}</span>
                                                                        </Link>
                                                                    </SheetClose>
                                                                ))}
                                                            </div>

                                                            {/* Destacados */}
                                                            <div className="space-y-4 mb-6">
                                                                <h4 className="font-bold text-lg uppercase text-tiffanyBlue">Destacados</h4>
                                                                <ul className="space-y-2">
                                                                    {section.featured.map((item, idx) => (
                                                                        <SheetClose asChild key={idx}>
                                                                            <li>
                                                                                <Link
                                                                                    href="#"
                                                                                    className="block p-3 hover:bg-gray-50 rounded-lg"
                                                                                >
                                                                                    {item}
                                                                                </Link>
                                                                            </li>
                                                                        </SheetClose>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Promoción */}
                                                            <div className="bg-[#f6f6f6] rounded-lg p-4">
                                                                <img
                                                                    src={section.promo.img}
                                                                    alt="Promoción"
                                                                    className="w-full h-64 object-cover rounded mb-3"
                                                                />
                                                                <h5 className="font-bold text-md">{section.promo.title}</h5>
                                                                <p className="text-sm text-gray-600 mb-3">{section.promo.subtitle}</p>
                                                                <SheetClose asChild>
                                                                    <button className="w-full py-2 bg-tiffanyBlue hover:bg-ripeMango text-white rounded transition">
                                                                        Ver ahora
                                                                    </button>
                                                                </SheetClose>
                                                            </div>
                                                        </>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Menú desplegable */}
                {openItem && (
                    <div
                        className="w-full xl:w-[85%] mx-auto justify-center items-center flex bg-white z-50 py-6"
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
                                            <h4 className="font-bold text-lg uppercase text-tiffanyBlue">Categorías</h4>
                                            {section.categories.map((cat, idx) => (
                                                <div key={idx} className="flex items-center gap-3 hover:underline cursor-pointer text-lg">
                                                    <img src={cat.img} alt={cat.label} className="w-10 h-10 rounded-full" />
                                                    <span>{cat.label}</span>
                                                </div>
                                            ))}
                                            <button className="mt-5 px-4 py-2 bg-tiffanyBlue text-white text-sm rounded hover:bg-celadonBlue transition">
                                                Ver todos los lentes
                                            </button>
                                        </div>

                                        {/* Destacados */}
                                        <div className="col-span-6 space-y-2">
                                            <h4 className="font-bold text-lg uppercase text-tiffanyBlue">Destacados</h4>
                                            <ul className="text-sm space-y-1">
                                                {section.featured.map((item, idx) => (
                                                    <li key={idx} className="hover:underline cursor-pointer text-lg">{item}</li>
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
                                                    <button className="mt-3 px-4 py-2 border text-sm rounded text-white bg-tiffanyBlue hover:bg-ripeMango transition">
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
    );
};

export default Nav;