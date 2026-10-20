import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projetos from './components/sections/Projetos'
import Sobre from './components/sections/Sobre'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projetos />
        <Sobre />
      </main>
      <Footer />
    </>
  )
}

export default App
