
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ServicesSection from './components/Services';
import Divider from './components/Divider';
import PortfolioSection from './components/Portfolio';
import FAQSection from './components/Faq';
import Contact from './components/Contact';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <Divider />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <FAQSection />
            <Contact />
        </main>
    );
}
