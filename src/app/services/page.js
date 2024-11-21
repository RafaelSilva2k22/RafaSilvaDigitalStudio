import ServicesSection from "../components/Services";
import Head from 'next/head';
export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Serviços de Criação de Sites | Rafa Silva Digital Studio</title>
                <meta name="description" content="Descubra nossos serviços personalizados de web design, desde criação de sites até otimização SEO para aumentar sua visibilidade online." />
                <meta property="og:title" content="Serviços de Criação de Sites | Rafa Silva Digital Studio" />
                <meta property="og:description" content="Oferecemos soluções de web design, desenvolvimento de sites responsivos e otimizados, sob medida para sua empresa." />
                <meta property="og:image" content="https://rafa-silva-digitalstudio.vercel.app/assets/services-image.svg" />
            </Head>

            <main>
                <ServicesSection />
            </main>
        </>
    );
}
