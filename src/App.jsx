import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'
import Banner from'./components/Banner/Banner'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
