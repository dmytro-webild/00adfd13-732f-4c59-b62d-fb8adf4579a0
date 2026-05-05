"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FaqDouble from '@/components/sections/faq/FaqDouble';

export default function LandingPage() {
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
        {
          name: "Home",          id: "/"},
        {
          name: "Chi Siamo",          id: "/#chi-siamo"},
        {
          name: "Immobiliare",          id: "/immobiliare"},
        {
          name: "Contatti",          id: "/#contatti"},
      ]}
      brandName="SBR Consulting"
    />
  </div>

  <div id="immobiliare-hero" data-section="immobiliare-hero">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Valutazioni immobiliari",          description: "Analisi oggettiva del valore di mercato per operazioni di successo.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/a-professional-financial-consultant-work-1777989688433-4106cf18.png?_wi=1",          imageAlt: "Valutazioni"},
        {
          title: "Ottimizzazione asset",          description: "Strategie per incrementare la redditività dei tuoi immobili.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/a-professional-financial-consultant-work-1777989699432-82b68695.png?_wi=1",          imageAlt: "Asset"},
      ]}
      title="Divisione Immobiliare"
      description="Servizi di consulenza specialistica per il settore Real Estate. Massima competenza tecnica e finanziaria."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
        title="Domande frequenti Immobiliare"
        description="Scopri di più sui nostri servizi immobiliari."
        faqsAnimation="slide-up"
        textboxLayout="default"
        useInvertedBackground={false}
        faqs={[
          {
            id: "1",            title: "Come valutiamo un immobile?",            content: "Utilizziamo metodi di analisi di mercato comparativi e tecnici per una stima precisa."
          }
        ]}
      />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Supporto Strategico Real Estate"
      description="Affianchiamo investitori e aziende nella valorizzazione degli asset immobiliari attraverso analisi rigorose."
      features={[
        {
          title: "Analisi di portafoglio",          description: "Ottimizziamo il rendimento dei tuoi immobili attraverso una revisione strategica.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/a-professional-financial-consultant-work-1777989688433-4106cf18.png?_wi=2",          imageAlt: "Analisi"},
        {
          title: "Audit tecnico",          description: "Verifica tecnica approfondita per massimizzare la sicurezza delle operazioni.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/a-professional-financial-consultant-work-1777989699432-82b68695.png?_wi=2",          imageAlt: "Audit"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="SBR Consulting"
      columns={[
        {
          title: "Servizi",          items: [
            {
              label: "Cessione Credito",              href: "#"},
            {
              label: "Consulenza",              href: "#"},
          ],
        },
        {
          title: "Azienda",          items: [
            {
              label: "Chi Siamo",              href: "/#chi-siamo"},
            {
              label: "Contatti",              href: "/#contatti"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}