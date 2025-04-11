import './App.css'
import { Routes, Route } from 'react-router-dom'


// Sahifalar
import HomePage from './pages/HomePage'
import Tarif from './pages/Tarif'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './pages/Contact'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Tarif" element={<Tarif />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
