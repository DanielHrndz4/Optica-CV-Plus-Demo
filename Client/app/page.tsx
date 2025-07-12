import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Shield, Clock, Award, MapPin, Phone, Mail, Search, Heart, User, ShoppingCart, Store, Headset, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OpticaCVPlus() {
  const nav = [
    { name: "Gafas oftalmicas", href: "#gafas-oftalmicas" },
    { name: "Gafas de sol", href: "#gafas-de-sol" },
    { name: "Marcas", href: "#marcas" },
    { name: "Cristales", href: "#cristales" },
    { name: "Agendar examen", href: "#agendar-examen" },
    { name: "Ofertas", href: "#ofertas" },
  ]

  const icon = [
    { name: "Buscar", icon: Search },
    { name: "Favoritos", icon: Heart },
    { name: "Mi cuenta", icon: User },
    { name: "Carrito", icon: ShoppingCart },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

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
              <Link href={item.href} className="text-md font-medium hover:text-blue-600 font-sans uppercase transition-all duration-300">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          {/* Video de fondo */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://media.ray-ban.com/cms/resource/blob/1434576/9eba1b312acda87f9898f7b973b90c74/rbm-ss25-hp-hero-d-data.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>

          {/* Capa opcional de oscurecimiento */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Contenido visible */}
          <div className="relative z-20 flex flex-col items-center justify-end text-center h-full text-white px-4 pb-10">
            <h1 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">Explora la Nueva Colección</h1>
            <p className="mt-4 text-lg lg:text-xl max-w-2xl drop-shadow-md">
              Descubre el diseño, innovación y estilo de la temporada. Inspirado en la visión del mañana.
            </p>
            <div className="flex flex-row gap-3">
              <a
                href="#coleccion"
                className="mt-6 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Comprar Colección
              </a>
              <a
                href="#coleccion"
                className="mt-6 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Ver Más
              </a>
            </div>
          </div>
        </section>

        <section className="w-full h-screen bg-white">
          <div className="flex w-full h-full">
            {/* Columna izquierda: imágenes del producto */}
            <div className="w-[60%] h-full flex">
              <img src="/boss.jpg" alt="Boss" className="w-1/2 h-full object-cover" />
              <img src="/1.png" alt="Modelo 1" className="w-1/2 h-full object-cover" />
            </div>

            {/* Columna derecha: texto y branding */}
            <div className="w-[40%] h-full relative overflow-hidden">
              {/* Fondo con imagen */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: "url('/3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  scale: "1.5",
                }}
              ></div>

              {/* Contenido encima del fondo */}
              <div className="relative z-10 h-full flex flex-col px-10 justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight lowercase">
                  Estilo icónico<br /> con visión de alto rendimiento
                </h1>

                <p className="mt-6 text-base text-[#252525] leading-relaxed max-w-md">
                  Presentamos las <strong>BOSS 1793/F/SKB753MT</strong>: gafas de sol deportivas con diseño moderno en acetato gris
                  transparente y detalles metálicos. Para quienes buscan marcar tendencia con seguridad y elegancia.
                </p>

                <button className="mt-6 bg-black text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition">
                  COMPRAR BOSS | EDICIÓN ESPECIAL
                </button>
              </div>
            </div>


          </div>
        </section>


        {/* Productos Section */}
        <section id="productos" className="py-20 bg-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestra Colección</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Desde monturas clásicas hasta los últimos diseños de vanguardia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Lentes Graduados",
                  description: "Monturas elegantes con la mejor tecnología en cristales",
                  image: "/placeholder.svg?height=300&width=400",
                  badge: "Más Popular",
                },
                {
                  title: "Lentes de Sol",
                  description: "Protección UV premium con estilo incomparable",
                  image: "/placeholder.svg?height=300&width=400",
                  badge: "Nuevo",
                },
                {
                  title: "Lentes de Contacto",
                  description: "Comodidad y libertad para tu estilo de vida activo",
                  image: "/placeholder.svg?height=300&width=400",
                  badge: "Oferta",
                },
              ].map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-600">{product.badge}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                    >
                      Ver Colección
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-20 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Servicios Profesionales</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cuidamos tu salud visual con tecnología de vanguardia y atención personalizada
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Examen Visual",
                  description: "Evaluación completa con equipos de última generación",
                },
                {
                  icon: Shield,
                  title: "Garantía Total",
                  description: "Protección completa en todos nuestros productos",
                },
                {
                  icon: Clock,
                  title: "Servicio Express",
                  description: "Lentes listos en 24 horas para graduaciones comunes",
                },
                {
                  icon: Award,
                  title: "Asesoría Experta",
                  description: "Personal certificado para encontrar tu solución ideal",
                },
              ].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marcas Section */}
        <section id="marcas" className="py-20 bg-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Marcas de Prestigio</h2>
              <p className="text-xl text-gray-600">Trabajamos con las mejores marcas del mundo</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Marca${i}`}
                    alt={`Marca ${i}`}
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container px-4">
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Listo para ver mejor?</h2>
              <p className="text-xl mb-8 opacity-90">
                Agenda tu cita hoy y descubre la diferencia de una visión perfecta
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Agendar Cita Gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Óptica CV+</span>
              </div>
              <p className="text-gray-400">
                Tu visión es nuestra pasión. Más de 25 años cuidando la salud visual de nuestros clientes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Lentes Graduados
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Lentes de Sol
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Lentes de Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accesorios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Examen Visual
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ajuste de Monturas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Reparaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Garantías
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3 text-gray-400">
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

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Óptica CV+. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div >
  )
}
