import Contact from "../components/Contact";
import Head from "next/head";

const currentUrl = "https://projectinnextjs.vercel.app/contact";
export default function ContactPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href={currentUrl} />
        <title>Fale Conosco | Rafa Silva Digital Studio</title>
        <meta
          name="description"
          content="Entre em contato com o Rafa Silva Digital Studio e comece a transformar sua ideia em um site profissional e moderno."
        />
        <meta
          property="og:title"
          content="Fale Conosco | Rafa Silva Digital Studio"
        />
        <meta
          property="og:description"
          content="Estamos prontos para ajudá-lo com a criação de um site personalizado e otimizado para o seu negócio."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732290116/pexels-photo-5725575_n9s0tg.avif"
        />
      </Head>

      <main>
        <Contact />
      </main>
    </>
  );
}
