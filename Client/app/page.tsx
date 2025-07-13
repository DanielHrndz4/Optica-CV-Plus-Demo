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
import Footer from "@/components/demo/footer"

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
      <Footer/>
    </div >
  )
}
