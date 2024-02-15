import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header/Header';
import Hero from './layouts/Hero/Hero';
import SearchSection from './layouts/SearchSection/SearchSection';

export default function Home() {
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
      <Header />
      <main className={`${styles.main}`}>
        <Hero />
        <SearchSection />
      </main>
    </>
  );
}
