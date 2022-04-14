import React,{useState} from 'react'
import './Nav.css'


const Nav = () => {
  const[HamShow,setHamShow] = useState(false);
  
  return (
    <>
      <section className='navbar-bg'>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand" href="#">Hound-Force</a>
    <button className="navbar-toggler primary-green" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{setHamShow(!HamShow)}}>
      <span className="navbar-toggler-icon  "></span>
    </button>
    <div className={ `collapse navbar-collapse ${HamShow?"show":""}   `}   >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active pe-4" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pe-4 " aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pe-4 " aria-current="page" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pe-4" aria-current="page" href="#contact">Contact</a>
        </li>
       
        
          
      </ul>
      
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Nav