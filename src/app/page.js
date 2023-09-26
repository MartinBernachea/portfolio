import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/About'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
    </main>
  )
}
