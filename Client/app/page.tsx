import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Shield, Clock, Award, MapPin, Phone, Mail, Store, Headset, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HugoBoss from "@/components/demo/hugo.boss"
import HeroSection from "@/components/demo/hero.section"
import Nav from "@/components/demo/nav"
import Glasses from "@/components/demo/glasses"
import Brands from "@/components/demo/brands"
import TestExam from "@/components/demo/test.exam"
import RaybanSection from "@/components/demo/rayban.section"
import GlassesRayban from "@/components/demo/rayban.glasses"
import KidsGlasses from "@/components/demo/kids.glasses"
import ExperienceSection from "@/components/demo/experience.section"

export default function OpticaCVPlus() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Nav />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection/>
        <Brands/>
        {/* Glasses Section */}
        <Glasses />
        {/* Hugo Boss Section */}
        <HugoBoss />

        {/* Ray-Ban Section */}
        <RaybanSection />
        <GlassesRayban/>

        {/* Test Exam Section */}
        <TestExam />

        {/* Kids Glasses Section */}
        <KidsGlasses />

        {/* Experience Section */}
        <ExperienceSection />
      </main>

      {/* Footer */}
      <footer className="bg-onyx text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-8 w-8 text-ripeMango" />
                <span className="text-2xl font-bold">Óptica CV+</span>
              </div>
              <p className="text-gray-300">
                Tu visión es nuestra pasión. Más de 25 años cuidando la salud visual de nuestros clientes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-ripeMango">Productos</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Lentes Graduados
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Lentes de Sol
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Lentes de Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Accesorios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-ripeMango">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Examen Visual
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Ajuste de Monturas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Reparaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-ripeMango transition-colors">
                    Garantías
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-ripeMango">Contacto</h3>
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
    </div >
  )
}
