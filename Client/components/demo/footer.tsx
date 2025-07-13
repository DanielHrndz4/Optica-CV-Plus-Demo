import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="bg-[#252525] text-white py-16">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-tiffanyBlue">Síguenos</h3>
              <p className="text-gray-300">
                Conéctate con nosotros en nuestras redes sociales.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-tiffanyBlue transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-tiffanyBlue transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-tiffanyBlue transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-tiffanyBlue transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-tiffanyBlue">Productos</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Lentes Graduados
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Lentes de Sol
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Lentes de Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Accesorios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-tiffanyBlue">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Examen Visual
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Ajuste de Monturas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Reparaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-tiffanyBlue transition-colors">
                    Garantías
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-tiffanyBlue">Contacto</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Av. Principal 123, Ciudad</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@opticacvplus.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Óptica CV+. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;