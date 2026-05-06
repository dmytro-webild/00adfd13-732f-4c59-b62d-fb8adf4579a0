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
            title="Servizi Immobiliari Professionali"
            description="Soluzioni integrate per la gestione, valutazione e valorizzazione del tuo patrimonio immobiliare con un approccio moderno e professionale."
            features={[
              {
                title: "Valutazioni Accurate",                description: "Analisi tecnica e di mercato dettagliata per ogni tipologia di asset immobiliare.",                imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",                imageAlt: "Valutazioni Accurate"
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