import './App.css'
import { Routes ,Route} from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
import { NavBar } from './NavBar'
import {Footer} from './Footer'
import { ErrorPage } from './ErrorPage'
import {CountryDetails} from './Sections/CountryDetails'

function App() {
  return ( 
   <>
    <NavBar />

    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Country" element={<Country />} />
         <Route path='/CountryDetails/:id' element={<CountryDetails />}/>
         <Route path="/Contact" element={<Contact />} />

         <Route path="*" element={<ErrorPage />} />
    </Routes>
    
    <Footer />
  </>    
  )
}

export default App
