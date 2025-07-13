import { icon, nav } from "@/constants/demo.constants";
import { Download, Headset, Store } from "lucide-react";
import Link from "next/link";

const Nav = () => {
    return(
        <header className="fixed top-0 z-50 w-full border-b pb-2 bg-white backdrop-blur">
        <div className="h-[36px] bg-[#f6f6f6] flex flex-row justify-around">
          <div className="w-[90%] mx-auto flex flex-row justify-between">
            <div className="flex items-center justify-center h-full text-sm text-gray-600 gap-4">
              <span className="flex flex-row gap-2 justify-center items-center hover:cursor-pointer hover:underline hover:text-[#252525]"><Store className="w-5" /> Nuestras sucursales</span>
              <span className="flex flex-row gap-2 justify-center items-center hover:cursor-pointer hover:underline hover:text-[#252525]"><Headset className="w-5" /> Contacto</span>
            </div>
            <div className="flex items-center justify-center h-full text-sm text-gray-600 font-semibold">
              <span>¡Bienvenido a Óptica CV+! Tu visión es nuestra prioridad.</span>
            </div>
            <div className="flex items-center justify-center h-full text-sm text-gray-600">
              <span className="flex flex-row gap-2 justify-center items-center hover:cursor-pointer hover:underline hover:text-[#252525]"><Download className="w-5" /> Descarga la App</span>
            </div>
          </div>
        </div>
        <div className="flex h-16 items-center justify-between w-[90%] mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Óptica CV+" className="w-[256px]" />
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex items-center space-x-8 justify-center">
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
            <div className="hidden md:flex items-center space-x-3 text-gray-700">
              {icon.map((item) => (
                <button aria-label={item.name} className="p-3 hover:bg-[#f6f6f6] rounded-full transition-colors duration-300">
                  <item.icon className="h-6 w-6 font-bold" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    )
}

export default Nav;