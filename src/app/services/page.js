import ServicesSection from "../components/Services";
import Head from "next/head";
const currentUrl = "https://projectinnextjs.vercel.app/services";

export default function ServicePage() {
  return (
    <>
      <Head>
        <link rel="canonical" href={currentUrl} />
        <title>Serviços de Criação de Sites | Rafa Silva Digital Studio</title>
        <meta
          name="description"
          content="Descubra nossos serviços personalizados de web design, desde criação de sites até otimização SEO para aumentar sua visibilidade online."
        />
        <meta
          property="og:title"
          content="Serviços de Criação de Sites | Rafa Silva Digital Studio"
        />
        <meta
          property="og:description"
          content="Oferecemos soluções de web design, desenvolvimento de sites responsivos e otimizados, sob medida para sua empresa."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732290116/pexels-photo-5725575_n9s0tg.avif"
        />
      </Head>

      <main>
        <ServicesSection />
      </main>
    </>
  );
}
