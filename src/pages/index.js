import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Hero from '@/layouts/Hero/Hero';
import SearchSection from '@/layouts/SearchSection/SearchSection';
import StatisticsSection from '@/layouts/StatisticsSection/StatisticsSection';
import HowItWorksSection from '@/layouts/HowItWorksSection/HowItWorksSection';
import TestimoniesSection from '@/layouts/TestimoniesSection/TestimoniesSection';
import RegisterSection from '@/layouts/RegisterSection/RegisterSection';
import ProfessionalSection from '@/layouts/ProfessionalSection/ProfessionalSection';
import Footer from '@/components/Footer/Footer';
import ReviewSection from '@/layouts/ReviewSection/ReviewSection';
import { Tour } from 'antd';
import { useTourContext } from '@/context/tour.context';

export default function Home() {
  const { tourIsActive, setTourIsActive, steps } = useTourContext();
  return (
    <>
      <Head>
        <title>Filadd Review</title>
        <meta
          name='description'
          content='Review de la web de Filadd hecha por Facundo Chavez'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/filadd-favicon.svg' />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <Hero />
        <SearchSection />
        <StatisticsSection />
        <HowItWorksSection />
        <TestimoniesSection />
        <RegisterSection />
        <ProfessionalSection />
        <Footer />
        <ReviewSection />
        <Tour
          open={tourIsActive}
          onClose={() => setTourIsActive(false)}
          steps={steps}
          nextButtonProps={{size:'large'}}
        />
      </main>
    </>
  );
}
