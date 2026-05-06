"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';

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
            title="Eccellenza Strategica nell'Immobiliare"
            useInvertedBackground={false}
            tag="About"
          />
        </div>

        <div id="servizi" data-section="servizi">
          <FeatureCardOne
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={true}
            title="Servizi Immobiliari Professionali"
            description="Soluzioni integrate per la gestione, valutazione e valorizzazione del tuo patrimonio immobiliare con un approccio moderno e professionale."
            features={[
              {
                title: "Valutazioni Accurate",                description: "Analisi tecnica e di mercato dettagliata per ogni tipologia di asset immobiliare."
              },
              {
                title: "Asset Management",                description: "Ottimizzazione costante del valore degli immobili tramite strategie mirate."
              },
              {
                title: "Supporto Operativo",                description: "Gestione completa delle pratiche e della documentazione tecnica e legale."
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}