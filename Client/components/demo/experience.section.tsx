"use client";

import { Store, Truck, Undo2, Leaf } from "lucide-react";

const features = [
  {
    icon: <Store className="w-10 h-10" />,
    title: "COMPRA ONLINE,\nRETIRO EN TIENDA",
    description:
      "Compra online y retira tu producto en cualquier tienda asociada Ray-Ban, Sunglass Hut o LensCrafters. Disfruta de ajustes y adaptaciones sin costo. Disponible en más de 900 tiendas.",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "ENTREGA EL MISMO DÍA",
    description:
      "Recíbelo más rápido con nuestro servicio premium de entrega el mismo día directamente en tu domicilio.",
  },
  {
    icon: <Undo2 className="w-10 h-10" />,
    title: "¿NO ESTÁS SEGURO?\nDEVUÉLVELO GRATIS",
    description:
      "¿No estás completamente enamorado de tu elección? Devolver tu pedido es fácil y sin costo.",
  },
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "ENVÍOS RESPONSABLES",
    description:
      "Enviamos con proveedores logísticos que utilizan soluciones sostenibles para reducir emisiones.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="pb-20 pt-10 bg-white text-onyx">
      <div className="max-w-[80%] mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
          Disfruta una experiencia de compra sin complicaciones
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          Descubre nuestros servicios en línea y en tienda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg"
            >
              <div className="mb-4 bg-celadonBlue/10 p-3 rounded-full text-celadonBlue">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold uppercase whitespace-pre-line mb-2">
                {item.title}
              </h3>
              <p className="text-lg text-onyx mb-4">{item.description}</p>
              <a
                href="#"
                className="text-sm font-semibold text-celadonBlue hover:text-ripeMango transition-colors"
              >
                DESCUBRIR MÁS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
