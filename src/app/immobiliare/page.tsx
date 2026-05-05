"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';

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
          <InlineImageSplitTextAbout 
            heading={[{ type: 'text', content: 'Eccellenza nell\'Immobiliare' }]}
            useInvertedBackground={false}
            ariaLabel="About section"
          />
        </div>

        <div id="servizi" data-section="servizi">
          <FeatureCardMedia
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Servizi Immobiliari"
            description="Offriamo soluzioni su misura per il tuo patrimonio immobiliare."
            features={[
              {
                id: "1",                title: "Valutazioni di Mercato",                description: "Analisi tecniche precise per determinare il reale valore del tuo asset.",                tag: "Valutazione"
              },
              {
                id: "2",                title: "Gestione Asset",                description: "Strategie avanzate per massimizzare il rendimento dei tuoi investimenti.",                tag: "Asset"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}