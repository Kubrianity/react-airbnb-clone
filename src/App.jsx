import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import data from './assets/data'

function App() {
  const infoCard = data.map(item => {
    return (
      < Card 
      key = {item.id}
      item = {item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Main />
      <div className = "cards">
        {infoCard}
      </div>
    </div>
  )
}

export default App
