import { ThemeProvider } from './context/ThemeContext'
import Nav        from './components/Nav'
import HeroHeader from './components/HeroHeader'
import Hero       from './components/Hero'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Nav />
      <HeroHeader />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
