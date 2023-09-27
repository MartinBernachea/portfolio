import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ButtonToTop from './components/ButtonToTop'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <ButtonToTop />
    </main>
  )
}
