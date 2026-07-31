import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/hero/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Games } from '@/components/sections/Games';
import { Rewards } from '@/components/sections/Rewards';
import { Dashboard } from '@/components/sections/Dashboard';
import { Training } from '@/components/sections/Training';
import { SocialProof } from '@/components/sections/SocialProof';
import { Pricing } from '@/components/sections/Pricing';
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
        <Rewards />
        <Dashboard />
        <Training />
        <SocialProof />
        <Pricing />
        <DemoCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
