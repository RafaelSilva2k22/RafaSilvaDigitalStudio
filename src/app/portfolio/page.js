import PortfolioSection from "../components/Portfolio";
import Head from "next/head";
const currentUrl = "https://projectinnextjs.vercel.app/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href={currentUrl} />
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
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732367079/online-school-equipment-home_xf5sq9.avif"
        />
      </Head>

      <main>
        <PortfolioSection />
      </main>
    </>
  );
}
