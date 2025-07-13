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
import AnimatedSection from "@/components/ui/animated-section"

export default function OpticaCVPlus() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Nav />
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
          <Brands />
        </AnimatedSection>
        {/* Glasses Section */}
        <AnimatedSection>
          <Glasses />
        </AnimatedSection>
        {/* Hugo Boss Section */}
        <AnimatedSection>
          <HugoBoss />
        </AnimatedSection>

        {/* Ray-Ban Section */}
        <AnimatedSection>
          <RaybanSection />
        </AnimatedSection>
        <AnimatedSection>
          <GlassesRayban />
        </AnimatedSection>

        {/* Test Exam Section */}
        <AnimatedSection>
          <TestExam />
        </AnimatedSection>

        {/* Kids Glasses Section */}
        <AnimatedSection>
          <KidsGlasses />
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection>
          <ExperienceSection />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer/>
    </div >
  )
}
