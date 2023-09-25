import Image from 'next/image'
import Header from './components/Header'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <main>
      <Header />
      <AboutMe />
    </main>
  )
}
