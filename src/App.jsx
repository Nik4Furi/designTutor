import React,{useEffect} from 'react'

//-----------Aos functionality-------X
import AOS from 'aos';
import 'aos/dist/aos.css';

//--------Css -------X
import './App.css'
import Footer from './components/Footer'

//-------Components-------X
import Navbar from './components/Navbar'

//-----Pages component
import Home from './pages/Home'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
   <>
     {/* Navbar Component   */}
     <Navbar />

     {/* Home Component  */}
     <Home />

     {/* Footer Component  */}
     <Footer />
   </>
  )
}

export default App
