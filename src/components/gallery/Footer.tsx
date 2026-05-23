import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="pt-32 md:pt-48 pb-12 px-6 md:px-12 bg-background">
      <div className="grid grid-cols-12 gap-8 md:gap-12 mb-24">
        <div className="col-span-12">
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8">Angel Gonzalez de la Cruz</h2>
          <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-primary mb-6">Creador</p>
          <div className="space-y-3 font-mono text-sm md:text-base text-muted-foreground">
            <p>Universidad Autónoma del Estado de México (UAEMEX)</p>
            <p>WhatsApp: 7228805790</p>
            <p>Instagram: e.n.g.e.l_off</p>
            <p>Correo: angelgcx666@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="font-display text-2xl uppercase tracking-tight">Bitácora de Historia</div>
        <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-[0.3em]">
          © MMXXVI · Vanguardias Artísticas
        </div>
      </div>
    </footer>
  );
}
