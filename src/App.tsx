import React from 'react';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Statistcs from './components/Statistics';
import StartNow from './components/StartNow';
import Footer from './components/Footer';


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  // localStorage.clear()
  return (
    <>
      <Header />
      <Intro  />
      <Statistcs />
      <StartNow />
      <Footer />
    </>
  )
}

export default App
