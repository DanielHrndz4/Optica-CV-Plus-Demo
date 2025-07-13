"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DemoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Demo Óptica CV+</DialogTitle>
          <DialogDescription>
            Esta es una demo realizada por Fantasma Digital en un tiempo estimado de 12h para demostrar el trabajo y compromiso que tenemos con el proyecto. Muchas funcionalidades y vistas podrán estar disponibles en la fase de desarrollo si el contrato es aceptado.
            <br /><br />
            <strong>Nota:</strong> Las marcas, modelos y precios mostrados son únicamente de carácter demostrativo y no representan productos reales ni precios finales.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button onClick={() => setOpen(false)}>Entendido</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
