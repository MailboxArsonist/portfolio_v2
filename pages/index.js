import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Intro from '../components/Intro/Intro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew Dodd | Web Developer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Intro />
      </main>
    </div>
  )
}
