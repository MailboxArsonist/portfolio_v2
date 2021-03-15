import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Intro from '../components/Intro/Intro'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew Dodd | Web Developer</title>
        <meta name="description" content="Hello, my name is Matthew Dodd. I am a full stack web developer based in Brighton, UK." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Intro />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
