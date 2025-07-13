import { Search, Heart, User, ShoppingCart } from "lucide-react"

export const nav = [
  {
    name: "Gafas oftálmicas",
    href: "#gafas-oftalmicas",
    menu: "GAFAS OFTÁLMICAS",
  },
  { name: "Gafas de sol", href: "#gafas-de-sol", menu: "GAFAS DE SOL" },
  {
    name: "Lentes de contacto",
    href: "#lentes-de-contacto",
    menu: "LENTES DE CONTACTO",
  },
  { name: "Marcas", href: "#marcas" , menu: "MARCAS" },
  { name: "Cristales", href: "#cristales", menu: "CRISTALES" },
  { name: "Agendar examen", href: "#agendar-examen", menu: "AGENDAR EXAMEN" },
  { name: "Ofertas", href: "#ofertas", menu: "OFERTA" },
]

export const iconDesktop = [
  { name: "Buscar", icon: Search },
  { name: "Favoritos", icon: Heart },
  { name: "Mi cuenta", icon: User },
  { name: "Carrito", icon: ShoppingCart },
]

export const iconMobile = [
  { name: "Favoritos", icon: Heart },
  { name: "Mi cuenta", icon: User },
  { name: "Carrito", icon: ShoppingCart },
]