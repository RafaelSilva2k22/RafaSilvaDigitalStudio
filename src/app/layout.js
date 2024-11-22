import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Criação de Sites Profissionais | Rafa Silva Digital Studio",
  description:
    "Rafa Silva Digital Studio oferece criação de sites modernos para empresas de Itaí e Jardinópolis. Obtenha um site responsivo para destacar seu negócio online..",
  keywords:
    "criação de sites, desenvolvimento de sites, web design para empresas, sites personalizados, sites responsivos, Rafa Silva Digital Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
<meta name="google-site-verification" content="mHTqTzx9T6h6NE9X0U0vsl4uF88glfD4q1AoiejxTHE" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://rafa-silva-digitalstudio.vercel.app/assets/home-image.svg"
        />
        <meta
          property="og:url"
          content="https://rafa-silva-digitalstudio.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://rafa-silva-digitalstudio.vercel.app/assets/home-image.svg"
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
