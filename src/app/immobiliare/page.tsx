"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';

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
          <TextAbout 
            title="Sviluppiamo e valorizziamo operazioni immobiliari ad alto rendimento."
            useInvertedBackground={false}
            tag="About"
          />
        </div>

        <div id="servizi" data-section="servizi">
          <FeatureCardSeven
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="I Nostri Servizi "
            description="SBR Consulting affianca investitori e proprietari nello sviluppo completo di operazioni immobiliari, con un approccio orientato al risultato.
Analizziamo ogni opportunità in modo strategico, riducendo il rischio e massimizzando la marginalità.
"
            features={[
              {
                title: "Analisi e Selezione Operazioni",                description: "Individuiamo opportunità immobiliari con elevato potenziale, valutando:
Posizione
Mercato
Marginalità
Rischio",                imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",                imageAlt: "Analisi e Selezione Operazioni"
              },
              {
                title: "Asset Management",                description: "Ottimizzazione costante del valore degli immobili tramite strategie mirate.",                imageSrc: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop",                imageAlt: "Asset Management"
              },
              {
                title: "Supporto Operativo",                description: "Gestione completa delle pratiche e della documentazione tecnica e legale.",                imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",                imageAlt: "Supporto Operativo"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}