import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './style.css'

export default function App() {
  return (
    <div className='container'>
      <div className='main'>
        <Info/>
        <About/>
        <Interests/>
      </div>
      <Footer/>
    </div>
  )
}
