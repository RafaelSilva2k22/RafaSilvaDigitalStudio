import PortfolioSection from "../components/Portfolio";
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfólio | Rafa Silva Digital Studio</title>
        <meta
          name="description"
          content="Veja alguns dos projetos desenvolvidos por Rafa Silva Digital Studio e inspire-se para criar seu site ideal."
        />
        <meta
          property="og:title"
          content="Portfólio | Rafa Silva Digital Studio"
        />
        <meta
          property="og:description"
          content="Confira exemplos de sites modernos, funcionais e personalizados que desenvolvemos para nossos clientes."
        />
        <meta
          property="og:image"
          content="https://rafa-silva-digitalstudio.vercel.app/assets/portfolio-image.svg"
        />
      </Head>

      <main>
        <PortfolioSection />
      </main>
    </>
  );
}
