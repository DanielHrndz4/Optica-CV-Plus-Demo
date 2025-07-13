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

const Nav = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <>
        {openItem && (
            <div
                onClick={() => setOpenItem(null)}
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
                    {nav.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => setOpenItem(item.name)}
                            className={cn(
                                "relative text-md font-medium font-sans uppercase transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-tiffanyBlue after:transition-all after:duration-300",
                                openItem === item.name
                                    ? "text-tiffanyBlue after:w-full"
                                    : "after:w-0 hover:text-tiffanyBlue hover:after:w-full"
                            )}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
                {openItem && (
                    <div className="absolute left-0 top-full w-full bg-white shadow-lg z-50 py-4">
                        <div className="w-[90%] mx-auto flex flex-col gap-3">
                            <span className="font-semibold text-lg mb-2">{openItem}</span>
                            <Link href="#" className="text-sm hover:underline">Sub opción 1</Link>
                            <Link href="#" className="text-sm hover:underline">Sub opción 2</Link>
                            <Link href="#" className="text-sm hover:underline">Sub opción 3</Link>
                        </div>
                    </div>
                )}

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
                                        <button
                                            onClick={() => setOpenItem(item.name)}
                                            className="text-left text-base font-medium uppercase text-gray-700 hover:text-tiffanyBlue"
                                        >
                                            {item.name}
                                        </button>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
        </>
    )
}

export default Nav;