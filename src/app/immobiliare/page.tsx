"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

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

        <div id="hero" data-section="hero">
          <HeroSplit
            title="Divisione Immobiliare"
            description="Servizi di consulenza specialistica per il settore Real Estate, con approccio minimale e orientato ai risultati."
            buttons={[{ text: "Contattaci", href: "/#contatti" }]}
            background={{ variant: "gradient-bars" }}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/modern-high-end-architectural-detail-cle-1777989649870-d9a73473.png?_wi=1"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="servizi" data-section="servizi">
          <FeatureCardSeven
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="I Nostri Servizi"
            description="Soluzioni professionali per la gestione e valorizzazione del patrimonio immobiliare."
            features={[
              {
                title: "Valutazione Immobiliare",                description: "Analisi accurata del valore di mercato basata su dati oggettivi e tecnici."
              },
              {
                title: "Ottimizzazione Asset",                description: "Strategie mirate per accrescere la redditività dei tuoi asset immobiliari."
              },
              {
                title: "Audit Tecnico",                description: "Verifica approfondita per garantire conformità e sicurezza in ogni transazione."
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}