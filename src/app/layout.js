"use client";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="Rafa Silva Digital Studio oferece criação de sites modernos para empresas de Itaí e Jardinópolis. Obtenha um site responsivo para destacar seu negócio online."
        />
        <meta
          name="keywords"
          content="criação de sites, Criar site, Fazer site, desenvolvimento de sites, web design para empresas, sites personalizados, sites Profissionais, Rafa Silva Digital Studio"
        />
        <meta
          property="og:title"
          content="Criação de Sites Profissionais | Rafa Silva Digital Studio"
        />
        <meta
          property="og:description"
          content="Rafa Silva Digital Studio oferece criação de sites modernos para empresas de Itaí e Jardinópolis. Obtenha um site responsivo para destacar seu negócio online."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732367079/online-school-equipment-home_xf5sq9.avif"
        />
        <meta property="og:url" content="https://projectinnextjs.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Criação de Sites Profissionais | Rafa Silva Digital Studio"
        />
        <meta
          name="twitter:description"
          content="Rafa Silva Digital Studio oferece criação de sites modernos para empresas de Itaí e Jardinópolis. Obtenha um site responsivo para destacar seu negócio online."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732367079/online-school-equipment-home_xf5sq9.avif"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732289188/Global_whqzsu.svg"
        />

        {/* Script Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L7ECCML2S9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L7ECCML2S9');
            `,
          }}
        ></script>

        {/* JSON-LD para SEO */}
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
