import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './component/JSX/Hero'
import About from './pages/About'
import Skills from './pages/Skill'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTopArrow from './component/JSX/ScrollToTopArrow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
       <ScrollToTopArrow />
    </>
  );
}

export default App
