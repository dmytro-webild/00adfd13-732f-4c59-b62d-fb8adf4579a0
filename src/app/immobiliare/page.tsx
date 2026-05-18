"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import TimelineCardStack from '@/components/cardStack/layouts/timelines/TimelineCardStack';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BriefcaseBusiness, Users, Search, ClipboardCheck, Handshake, BarChart3, TrendingUp } from 'lucide-react';

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
          <NavbarLayoutFloatingInline
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
            tag="About"
            tagIcon={Users}
            useInvertedBackground={false}
            ariaLabel="About section"
          />
        </div>

        <div id="servizi" data-section="servizi">
          <FeatureBorderGlow
            title="Servizi Immobiliari"
            description="Soluzioni avanzate per il mercato immobiliare, progettate per offrire il massimo rendimento in ogni transazione."
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            className="bg-[#253259] text-white"
            features={[
              {
                title: "Analisi e Selezione Operazioni",                description: "Individuiamo opportunità immobiliari con elevato potenziale, valutando: posizione, mercato, marginalità e rischio.",                icon: Search
              },
              {
                title: "Gestione dell'Intera Operazione",                description: "Gestiamo l’intero ciclo immobiliare per conto del cliente, con un unico interlocutore e controllo totale su tempi, costi e risultati.",                icon: ClipboardCheck
              }
            ]}
          />
        </div>

        <div id="processo" data-section="processo">
          <TimelineCardStack
            title="Il nostro processo"
            textboxLayout="split"
          >
            <div className="space-y-6">
                <p>Individuiamo opportunità immobiliari con elevato potenziale.</p>
                <p>Costruiamo l’operazione a livello finanziario e strategico: business plan, ottimizzazione fiscale e strutturazione del capitale.</p>
                <p>Coordiniamo l’intero processo operativo di progettazione, ristrutturazione o costruzione e gestione dei fornitori.</p>
                <p>Massimizziamo il ritorno dell’investimento attraverso: vendita su carta, frazionamenti e affitti brevi o tradizionali.</p>
                <p>Gestiamo operazioni chiavi in mano occupandoci dell’intero processo, con un unico referente e pieno controllo su tempi, costi e risultati.</p>
            </div>
          </TimelineCardStack>
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoText="SBR Consulting"
            columns={[
              {
                items: [
                  { label: "Cessione Credito", href: "/#servizi" },
                  { label: "Consulenza", href: "/#servizi" },
                ],
              },
              {
                items: [
                  { label: "Chi Siamo", href: "/#chi-siamo" },
                  { label: "Contatti", href: "/#contatti" },
                ],
              },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}