import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import TechSection from '@/components/TechSection';
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <TechSection />
      <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
