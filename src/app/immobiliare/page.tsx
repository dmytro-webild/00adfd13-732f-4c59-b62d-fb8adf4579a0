"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import { BriefcaseBusiness, Users } from 'lucide-react';

export default function ImmobiliarePage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "/" },
              { name: "Chi Siamo", id: "/#chi-siamo" },
              { name: "Immobiliare", id: "/immobiliare" },
              { name: "Contatti", id: "/#contatti" },
            ]}
            brandName="SBR Consulting"
          />
        </div>

        <div id="chi-siamo" data-section="chi-siamo">
          <SplitAbout 
            title="Sviluppiamo operazioni immobiliari ad alto rendimento"
            description="SBR Consulting affianca investitori e proprietari nello sviluppo completo di operazioni immobiliari, con un approccio orientato al risultato.
Analizziamo ogni opportunità in modo strategico, riducendo il rischio e massimizzando la marginalità."
            tag="About"
            tagIcon={Users}
            textboxLayout="split"
            useInvertedBackground={false}
            bulletPoints={[
              { title: "Professionalità", description: "Competenza pluriennale nel settore immobiliare.", icon: Users },
              { title: "Strategia", description: "Piani personalizzati per la valorizzazione del patrimonio.", icon: BriefcaseBusiness }
            ]}
            ariaLabel="About section"
          />
        </div>

        <div id="servizi" data-section="servizi">
          <FeatureCardSeven
            title="Servizi Immobiliari"
            description="Soluzioni avanzate per il mercato immobiliare, progettate per offrire il massimo rendimento in ogni transazione."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            className="bg-[#253259] text-white"
            features={[
              {
                title: "Analisi e Selezione Operazioni",                description: "Individuiamo opportunità immobiliari con elevato potenziale, valutando: posizione, mercato, marginalità e rischio.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/professional-document-inspection-archite-1777989722562-4aaf17cf.png"
              },
              {
                title: "Gestione dell'Intera Operazione",                description: "Gestiamo l’intero ciclo immobiliare per conto del cliente, con un unico interlocutore e controllo totale su tempi, costi e risultati.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/uploaded-1777990331589-yhm73r4m.png"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}