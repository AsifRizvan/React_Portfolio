import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/projects/Project'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>

    </>
  )
}

export default App
