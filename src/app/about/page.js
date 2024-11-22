import AboutSection from "../components/About";
import Head from "next/head";
const currentUrl = "https://projectinnextjs.vercel.app/about";

export default function AboutPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href={currentUrl} />
        <title>Sobre Nós | Rafa Silva Digital Studio</title>
        <meta
          name="description"
          content="Conheça o Rafa Silva Digital Studio, uma empresa especializada em criação de sites personalizados e modernos para destacar sua marca no ambiente online."
        />
        <meta
          property="og:title"
          content="Sobre Nós | Rafa Silva Digital Studio"
        />
        <meta
          property="og:description"
          content="Saiba mais sobre nossa missão, visão e os serviços que oferecemos para pequenas e médias empresas em todo o Brasil."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732290116/pexels-photo-5725575_n9s0tg.avif"
        />
      </Head>

      <main>
        <AboutSection />
      </main>
    </>
  );
}
