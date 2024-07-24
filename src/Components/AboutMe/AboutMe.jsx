import myimage from "../../assets/images/myimage.png"
import { Container, Row, Col } from 'react-bootstrap';
import "./AboutMe.css"

function AboutMe() {
    const d = new Date 
    let years = d.getFullYear() - 2021
  return (
    <section className="about">
        <div className="about-me-inner">
            <h1 id="about">ABOUT ME</h1>

<Row>

    <img src={myimage} alt="an image of Nnachi Joy" className="w-100"/>
  
</Row>
           
        </div>
    </section>
  )
}

export default AboutMe