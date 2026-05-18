"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TimelineProcessFlow from '@/components/cardStack/layouts/timelines/TimelineProcessFlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
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

        <div id="chi-siamo" data-section="chi-siamo" style={{ backgroundColor: '#253259' }}>
          <SplitAbout 
            title="Sviluppiamo operazioni immobiliari ad alto rendimento"
            description="SBR Consulting affianca investitori e proprietari nello sviluppo completo di operazioni immobiliari, con un approccio orientato al risultato. Analizziamo ogni opportunità in modo strategico, riducendo il rischio e massimizzando la marginalità."
            tag="About"
            tagIcon={Users}
            textboxLayout="split"
            useInvertedBackground={true}
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
            features={[
              {
                title: "Analisi e Selezione Operazioni",                
                description: "Individuiamo opportunità immobiliari con elevato potenziale, valutando: posizione, mercato, marginalità e rischio.",                
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/professional-document-inspection-archite-1777989722562-4aaf17cf.png"
              },
              {
                title: "Gestione dell'Intera Operazione",                
                description: "Gestiamo l’intero ciclo immobiliare per conto del cliente, con un unico interlocutore e controllo totale su tempi, costi e risultati.",                
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/realistic-scene-of-a-construction-worksp-1778068727825-db4b0cfc.png"
              }
            ]}
          />
        </div>

        <div id="processo" data-section="processo">
          <TimelineProcessFlow
            title="Il nostro processo"
            description=""
            textboxLayout="default"
            animationType="slide-up"
            items={[
                { content: "Individuiamo opportunità immobiliari con elevato potenziale.", media: <Search />, reverse: false },
                { content: "Costruiamo l’operazione a livello finanziario e strategico: business plan, ottimizzazione fiscale e strutturazione del capitale.", media: <ClipboardCheck />, reverse: true },
                { content: "Coordiniamo l’intero processo operativo di progettazione, ristrutturazione o costruzione e gestione dei fornitori.", media: <Handshake />, reverse: false },
                { content: "Massimizziamo il ritorno dell’investimento attraverso: vendita su carta, frazionamenti e affitti brevi o tradizionali.", media: <BarChart3 />, reverse: true },
                { content: "Gestiamo operazioni chiavi in mano occupandoci dell’intero processo, con un unico referente e pieno controllo su tempi, costi e risultati.", media: <TrendingUp />, reverse: false },
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="SBR Consulting"
            columns={[
              {
                title: "Servizi",                items: [
                  { label: "Cessione Credito", href: "/#servizi" },
                  { label: "Consulenza", href: "/#servizi" },
                ],
              },
              {
                title: "Azienda",                items: [
                  { label: "Chi Siamo", href: "/#chi-siamo" },
                  { label: "Contatti", href: "/#contatti" },
                ],
              },
            ]}
            copyrightText="© 2024 SBR Consulting. Tutti i diritti riservati."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
