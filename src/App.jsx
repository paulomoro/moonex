import './App.css'
import AboutWrapper from './components/About/AboutWrapper'
import FAQs from './components/Faq/FAQs'
import Footer from './components/Footer/Footer'
import HeroWrapper from './components/Hero/HeroWrapper'

function App() {

  return (
      <div>
        <div className='main-Content'> 
          <HeroWrapper/>
          <AboutWrapper/>
          <FAQs/>
        </div>
       <Footer/>
      </div>
      
   
  )
}

export default App
