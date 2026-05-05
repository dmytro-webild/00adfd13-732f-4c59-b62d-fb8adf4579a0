"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
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
      description="Consulenza finanziaria di alto profilo per la cessione del credito. Eccellenza, riservatezza e risultati misurabili per la tua crescita."
      buttons={[
        {
          text: "Richiedi Consulenza",          href: "#contatti"},
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/uploaded-1777990331589-yhm73r4m.png"
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
          title: "Cessione del Credito",          description: "Gestiamo l’intero processo di cessione del credito per imprese edili e professionisti, dalla raccolta documentale alla finalizzazione con partner finanziari. Ottimizziamo tempi, margini e sicurezza dell’operazione.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/tmp/immagine-editoriale-realistica-e-profess-1777992118843-28f18b2c.png",          imageAlt: "Analisi"},
        {
          title: "Advisory Finanziaria per Imprese",          description: "Supportiamo aziende nell’accesso al credito, nella gestione della liquidità e nella strutturazione finanziaria di progetti complessi. Costruiamo soluzioni su misura per crescita e stabilità nel tempo.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/tmp/scena-editoriale-di-ufficio-moderno-inqu-1777992245663-3b456547.png",          imageAlt: "Gestione"},
        {
          title: "Gestione Documentale e Processi",          description: "Digitalizziamo e ottimizziamo i flussi documentali legati a pratiche finanziarie e immobiliari, riducendo errori e accelerando le tempistiche operative.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/tmp/immagine-editoriale-realistica-di-una-pi-1777992368921-ed63f35c.png",          imageAlt: "Compliance"},
      ]}
      title="La nostra consulenza"
      description="Soluzioni personalizzate per la gestione e la cessione del credito, pensate per massimizzare il tuo vantaggio competitivo."
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
            id: "1",            title: "A chi si rivolge SBR Consulting?",            content: "Ci rivolgiamo a imprese edili, investitori immobiliari e aziende che necessitano di supporto nella gestione finanziaria o nello sviluppo di operazioni complesse."
          },
          {
            id: "2",            title: "In quanto tempo si conclude una cessione del credito?",            content: "Le tempistiche variano in base alla complessità della pratica, ma grazie alla nostra struttura e ai partner riduciamo significativamente i tempi rispetto alla media di mercato."
          }
        ]}
      />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Mario Rossi",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/portrait-of-a-successful-businessman-in--1777989600826-3ffd2a08.png"},
        {
          id: "2",          name: "Giulia Bianchi",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/portrait-of-a-successful-businesswoman-i-1777989608935-9e271024.png"},
        {
          id: "3",          name: "Luca Verdi",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D4KC0FsaA7ldxeqCrwzWFE7quv/portrait-of-a-senior-investor-suit-profe-1777989621701-82f1d949.png"},
      ]}
      cardTitle="Cosa dicono di noi"
      cardTag="Referenze"
      cardAnimation="slide-up"
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