
import './App.css'
import AboutMe from './components/about/AboutMe'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'

function App() {
 

  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
<Hero/>
<AboutMe/>
<Projects/>
    </main>
     </>
  )
}

export default App
