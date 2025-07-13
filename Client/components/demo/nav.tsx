"use client";

import { icon, nav } from "@/constants/demo.constants";
import { Download, Headset, Store, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Nav = () => {
    return(
        <header className="fixed top-0 z-50 w-full border-b pb-2 bg-white backdrop-blur">
        <div className="h-[36px] bg-[#f6f6f6] flex items-center">
          <div className="w-[90%] mx-auto">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 3 } }}
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
                  ¡Bienvenido a Óptica CV+! Tu visión es nuestra prioridad.
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
        <div className="flex h-16 items-center justify-between w-[90%] mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Óptica CV+" className="w-[256px]" />
          </div>

          {/* Navegación */}
          <nav className="hidden lg:flex items-center space-x-8 justify-center">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-md font-medium font-sans uppercase transition-all duration-300 hover:text-tiffanyBlue after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-tiffanyBlue after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>

            ))}
          </nav>

          {/* Botones y iconos */}
          <div className="flex items-center space-x-4">

            {/* Iconos */}
            <div className="hidden lg:flex items-center space-x-3 text-gray-700">
              {icon.map((item) => (
                <button aria-label={item.name} className="p-3 hover:bg-[#f6f6f6] rounded-full transition-colors duration-300">
                  <item.icon className="h-6 w-6 font-bold" />
                </button>
              ))}
            </div>
            <Sheet>
              <SheetTrigger className="lg:hidden p-2">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="lg:hidden p-6">
                <nav className="flex flex-col space-y-4 mt-8">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base font-medium uppercase text-gray-700 hover:text-tiffanyBlue"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 flex space-x-4">
                  {icon.map((item) => (
                    <button
                      key={item.name}
                      aria-label={item.name}
                      className="p-3 hover:bg-[#f6f6f6] rounded-full transition-colors duration-300"
                    >
                      <item.icon className="h-6 w-6" />
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    )
}

export default Nav;