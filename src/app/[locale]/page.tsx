import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/hero/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Games } from '@/components/sections/Games';
import { Dashboard } from '@/components/sections/Dashboard';
import { WhyUs } from '@/components/sections/WhyUs';
import { DemoCTA } from '@/components/sections/DemoCTA';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/Footer';

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
<Problem />
        <HowItWorks />
        <Games />
        <Dashboard />
        <WhyUs />

        <DemoCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
