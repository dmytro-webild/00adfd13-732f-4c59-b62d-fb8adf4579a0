"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
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

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="SBR Consulting"
      description="Consulenza finanziaria di alto profilo per la cessione del credito. Eccellenza, serietà e risultati misurabili per la tua crescita."
      buttons={[
        {
          text: "Richiedi una Consulenza Gratuita",          href: "/#contatti"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/modern-high-end-architectural-detail-cle-1777989649870-d9a73473.png?_wi=1"
      imageAlt="Ufficio SBR Consulting"
    />
  </div>

  <div id="chi-siamo" data-section="chi-siamo">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Esperienza e Autorevolezza"
      description="SBR Consulting nasce con la missione di guidare i propri clienti in un mercato finanziario complesso. Ogni nostra operazione è finalizzata al massimo ritorno e alla sicurezza patrimoniale."
      metrics={[
        {
          value: "4+",          title: "Anni di esperienza"},
        {
          value: "500+",          title: "Pratiche concluse"},
        {
          value: "98%",          title: "Clienti soddisfatti"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/uploaded-1778067524001-asxczrhy.png"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="servizi" data-section="servizi">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Cessione del Credito",          description: "Gestiamo l’intero processo di cessione del credito per imprese edili e professionisti, dalla raccolta documentale alla finalizzazione con partner finanziari. Ottimizziamo tempi, margini e sicurezza dell’operazione.",          imageSrc: "https://img.b2bpic.net/premium-photo/hands-finance-business-people-meeting-teamwork-investment-profit-report-paperwork-financial-laptop-budget-analyst-with-economist-feedback-planning-project-corporate_590464-441315.jpg?id=359411588",          imageAlt: "Analisi"},
        {
          title: "Advisory Finanziaria per Imprese",          description: "Supportiamo aziende nell’accesso al credito, nella gestione della liquidità e nella strutturazione finanziaria di progetti complessi. Costruiamo soluzioni su misura per crescita e stabilità nel tempo.",          imageSrc: "https://img.b2bpic.net/free-photo/business-people-shaking-hands-together_53876-20488.jpg?id=2825692",          imageAlt: "Gestione"},
        {
          title: "Gestione Documentale e Processi",          description: "Digitalizziamo e ottimizziamo i flussi documentali legati a pratiche finanziarie e immobiliari, riducendo errori e accelerando le tempistiche operative.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/tmp/immagine-editoriale-realistica-di-una-pi-1777992368921-ed63f35c.png?_wi=2",          imageAlt: "Compliance"},
      ]}
      title="I nostri Servizi"
      description=""
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
        title="Domande frequenti"
        description="Tutto quello che c'è da sapere sui nostri servizi."
        faqsAnimation="slide-up"
        textboxLayout="default"
        useInvertedBackground={false}
        faqs={[
          {
            id: "1",            title: "A chi si rivolge SBR Consulting?",            content: "Ci rivolgiamo a imprese edili, investitori immobiliari e aziende che necessitano di supporto nella gestione finanziaria o nello sviluppo di operazioni complesse."},
          {
            id: "3",            title: "Gestite anche tutta la parte burocratica?",            content: "Sì, seguiamo l’intero processo: dalla raccolta documentale fino alla chiusura dell’operazione, riducendo il carico operativo per il cliente."},
          {
            id: "2",            title: "In quanto tempo si conclude una cessione del credito?",            content: "Le tempistiche variano in base alla complessità della pratica, ma grazie ai nostri partner riduciamo significativamente i tempi rispetto alla media di mercato."},
          {
            id: "4",            title: "Offrite una valutazione preliminare della pratica?",            content: "Sì, analizziamo gratuitamente la documentazione disponibile e la situazione del credito per verificare la fattibilità dell’operazione, individuare eventuali criticità e proporre il percorso più adatto al cliente."}
        ]}
      />
  </div>

  <div id="contatti" data-section="contatti">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      tag="Contatti"
      title="Richiedi una consulenza gratuita"
      description="Prenota una sessione conoscitiva con uno dei nostri esperti. Trasforma i tuoi crediti in valore immediato."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/modern-high-end-architectural-detail-cle-1777989649870-d9a73473.png?_wi=2"
      mediaAnimation="slide-up"
      inputPlaceholder="Inserisci un contatto telefonico"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="SBR Consulting"
      columns={[
        {
          title: "Servizi",          items: [
            {
              label: "Cessione Credito",              href: "/#servizi"},
            {
              label: "Consulenza",              href: "/#servizi"},
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
      copyrightText="© 2024 SBR Consulting. Tutti i diritti riservati."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}