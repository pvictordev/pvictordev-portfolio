import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/header/home/Home'

function App() {
  return (
    <div className='app'>
      <Header/>

      <main className='main'>
        <Home/>
      </main>
    </div>
  )
}

export default App
