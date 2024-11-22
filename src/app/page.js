"use client";
import Head from "next/head";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import Divider from "./components/Divider";
import PortfolioSection from "./components/Portfolio";
import FAQSection from "./components/Faq";
import Contact from "./components/Contact";

const metadata = {
  title: "Criação de Sites Profissionais | Rafa Silva Digital Studio",
  description:
    "Rafa Silva Digital Studio oferece criação de sites modernos para empresas de Itaí e Jardinópolis. Obtenha um site responsivo para destacar seu negócio online.",
  keywords:
    "criação de sites, desenvolvimento de sites, web design para empresas, sites personalizados, sites Profissionais, Rafa Silva Digital Studio",
};

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <FAQSection />
        <Contact />
      </main>
    </>
  );
}
