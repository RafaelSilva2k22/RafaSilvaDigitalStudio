import Contact from "../components/Contact";
import Head from 'next/head';
export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Fale Conosco | Rafa Silva Digital Studio</title>
                <meta name="description" content="Entre em contato com o Rafa Silva Digital Studio e comece a transformar sua ideia em um site profissional e moderno." />
                <meta property="og:title" content="Fale Conosco | Rafa Silva Digital Studio" />
                <meta property="og:description" content="Estamos prontos para ajudá-lo com a criação de um site personalizado e otimizado para o seu negócio." />
                <meta property="og:image" content="https://rafa-silva-digitalstudio.vercel.app/assets/contact-image.svg" />
            </Head>

            <main>
                <Contact />
            </main>
        </>
    );
}
