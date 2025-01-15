
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/Nav.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CardComponent from './components/CardComponent'
import SobreNosComponents from './components/SobreNosComponent'


function App() {


  return (
    <>
      <Nav />
      <SobreNosComponents />
      <CardComponent />  
      <Footer />
    </>
  )
}

export default App
