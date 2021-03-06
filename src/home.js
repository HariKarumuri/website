
import './App.css';
import Navbar from './components/navbar/Nav'
import Header from './components/Header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
     
     <Header/>
     <About/>
     <Portfolio/>
     <Contact/>
     
    </div>
  );
}

export default App;
