import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'

function App() {
  return (
    <div className='app'>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>

      </main>
    </div>
  )
}

export default App
