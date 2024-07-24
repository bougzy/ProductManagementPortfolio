import logo from "../../assets/images/ND.png"
import x from "../../assets/icons/x-icon.svg"
import hamburger from "../../assets/icons/hamburger-icon.svg"
import pattern from "../../assets/images/background-pattern.png"
import resume from "../../assets/resume.pdf"
import "./Hero.css"
import { useEffect, useState,useRef } from "react"


function Hero() {
  const [navIsOpened, setNavIsOpened] = useState(false)
  const headerRef = useRef()

  useEffect(()=>{
    let previousScrollPosition = window.scrollY

    document.addEventListener("scroll", ()=>{
      if (window.scrollY > 10) {
        let newScrollPosition = window.scrollY

      if (newScrollPosition > previousScrollPosition) {
        headerRef.current.classList.add("inactive-scrolling") 
        headerRef.current.classList.remove("active")
      }else if (newScrollPosition < previousScrollPosition){
        headerRef.current.classList.remove("inactive-scrolling")
        headerRef.current.classList.add("active")
      }

      previousScrollPosition = newScrollPosition
      }else{
        headerRef.current.classList.remove("inactive-scrolling")
        headerRef.current.classList.remove("active")
      }
      
    })
  }, [])

  return (
    <section className="hero">

      <header ref={headerRef}>
        <a href="/" className="logo">
            <img src={logo} alt="website logo" />
        </a>

        <nav className={navIsOpened? "opened" : ""}>
          <button
          onClick={()=>setNavIsOpened(false)}
          >
        <img src={x} alt="close mobile menu" />
          </button>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#stack">Tools</a>
                </li>
                </ul>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#projects">Projects</a>
                </li>
                </ul>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#about">About Me</a>
                </li>
                </ul>

                <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#journey">The Journey</a>
                </li>
                </ul>

                <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#skills">Skills</a>
                </li>
                </ul>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#contact">Contact Me</a>
                </li>
                </ul>

            <ul>
             <li>
                <a download href={resume} onClick={()=>setNavIsOpened(false)} className="bg-white text-primary">Download Resume</a> 
                </li> 
                </ul>
        </nav>

        <button 
        onClick={()=>setNavIsOpened(true)}
        className="menu-icons">
        <img src={hamburger} alt="open mobile menu" />
        </button>
       </header>

      <div className="hero-inner">
         

       <p className="sub-heading">
        Hey, i'm Nnachi Joy. I am a
       </p>

       <div className="hero-heading">
        <h1>PROJECT / PRODUCT MANAGER &</h1>
        <h1>DATA ANALYST</h1>
       </div>

       <p className="hero-intro">
       Shaping Visions into Market-Leading Products, I Craft Strategy and Deliver Results.Let's Innovate and Achieve Build Solutions!"
       </p>

       <div className="hero-ctas">
       <a href="#projects"> <button>My Projects</button></a>
       
        <a download href={resume}><button>Resume</button></a> 
        
       </div>
      </div>
      

       <img src={pattern} className="pattern" />
    </section>
  )
}

export default Hero
