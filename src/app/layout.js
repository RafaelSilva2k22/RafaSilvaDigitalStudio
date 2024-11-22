import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

export const metadata = {
  title: "Criação de Sites Profissionais | Rafa Silva Digital Studio",
  description:
    "Rafa Silva Digital Studio oferece criação de sites modernos para empresas de Itaí e Jardinópolis. Obtenha um site responsivo para destacar seu negócio online.",
  keywords:
    "criação de sites, desenvolvimento de sites, web design para empresas, sites personalizados, sites Profissionais, Rafa Silva Digital Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732290116/pexels-photo-5725575_n9s0tg.avif"
        />
        <meta property="og:url" content="https://projectinnextjs.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732290116/pexels-photo-5725575_n9s0tg.avif"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732289188/Global_whqzsu.svg"
        />

        {/* Adicionando JSON-LD para dados estruturados (Organização) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Rafa Silva Digital Studio",
              "url": "https://rafa-silva-digitalstudio.vercel.app/",
              "logo": "https://rafa-silva-digitalstudio.vercel.app/assets/logo-9S30YJnI.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-16-99448-7287",
                "contactType": "Customer Service",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://www.facebook.com/seusite",
                "https://www.instagram.com/seusite"
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Exemplo, 123",
                  "addressLocality": "Jardinópolis",
                  "addressRegion": "SP",
                  "postalCode": "14000-000",
                  "addressCountry": "BR"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Jether Araújo",
                  "addressLocality": "Itaí",
                  "addressRegion": "SP",
                  "postalCode": "18630-364",
                  "addressCountry": "BR"
                }
              ]
            }`,
          }}
        ></script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
