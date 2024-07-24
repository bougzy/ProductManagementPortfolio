import { useState } from "react"
import SingleProject from "../SingleProject/SingleProject"
import "./Projects.css"

// images 
import boilerplate from "../../assets/images/remindr/boilerplate.jpeg"
import projectone from "../../assets/images/remindr/projectone.png"
import successoverview from "../../assets/images/remindr/successoverview.png"

//bulk downloader
import frd from "../../assets/images/bulk/frd.png"
import frdface from "../../assets/images/bulk/frdface.png"
import frdauth from "../../assets/images/bulk/frdauth.png"

//mathivities
import ticket from "../../assets/images/mathivities/ticket.png"
import linearticket from "../../assets/images/mathivities/linearticket.png"
import gitticket from "../../assets/images/mathivities/gitticket.png"

//weather
import marketintelligence from "../../assets/images/weather/marketintelligence.jpg"
import weatherTwo from "../../assets/images/weather/570shots_so-min.jpg"
import weatherThree from "../../assets/images/weather/56shots_so.png"

import arrow from "../../assets/icons/view-more-arrow.svg"


function Projects() {
  const [projects, setProjects] = useState([{
    name : "Python BOILERPLATE",
    description : `I enlisted the functionalities, requirements, acceptance criteria, dependencies, risk and mitigation, objectives, and scope.


The Python Boilerplate guides the development of reusable and efficient Python project templates. It outlines key components, functionalities, and standards to ensure consistency and ease of use for developers.`,
    stack : ["ReactJS", "CSS", "Invision Studio"],
    images: [boilerplate, projectone, successoverview ],
    links : ["https://docs.google.com/document/d/1pH3NU6yZyQjqkWoHLUIGmeThadHMMV659EBsYY357QE/edit"]
  },
  {
    name : "Functional Requirement Document",
    description : `I enlisted the feature name, epic, user story, parameters, and acceptance criteria.


The FRD details the essential features and functionalities needed for the project. It outlines specific requirements and standards to ensure consistency, quality, and usability. The document defines key components, expected behaviors, and best practices, facilitating a clear and effective development process.`.


The FRD details the essential features and functionalities needed for the project. It outlines specific requirements and standards to ensure consistency, quality, and usability. The document defines key components, expected behaviors, and best practices, facilitating a clear and effective development process.`,
    stack : ["ReactJS", "CSS", "Invision Studio"],
    images: [frd, frdauth, frdface ],
    links : ["https://docs.google.com/document/d/1G5lm-I7QiTHdeLFzJr47oAPXK703wN7VLUePYxeg1rI/edit"]
  },
  {
    name : "GitHub Ticket",
    description : `I created a ticket, including description, purpose, user story, requirements, expected outcome, acceptance criteria 

The ticket serves as a communication tool for the development team, enabling collaboration, discussion of solutions, and monitoring of progress. It includes fields like title, description, labels (e.g., bug, enhancement, documentation), assignees, and milestones to help organize and prioritize work efficiently, ensuring the AI video generator project stays on track and meets its goals.`,
    stack : ["ReactJS", "CSS", "Invision Studio"],
    images: [ticket, gitticket, linearticket ],
    links : ["https://linear.app/ai-video-and-thumbnail-generator/issue/BAC-31/endpoints-for-the-about-page-values-settable-from-admin-panel"]
  },
  {
    name : "Market Intelligence Report",
    description : `I revealed key trends, competitive insights, customer needs, market size, growth forecasts, and major industry players, and provided actionable insights and strategic recommendations.

The market intelligence report reveals key trends, competitive insights, and customer needs. It highlights market size, growth forecasts, and major industry players. This report provides actionable insights and strategic recommendations to innovate and position for success.`,
    stack : ["HTML", "CSS", "JavaScript", "Invision Studio"],
    images: [marketintelligence ],
    links : ["https://docs.google.com/document/d/1bcYlqu-ARaZSJZeXdBGcQLDIrhAaTCwi_cBCbVFsTRA/edit?usp=sharing"]
  }])

  const mappedProjects = projects.map(({name, description, stack, images, links})=>{
    return <SingleProject key={name} name={name} description={description} stack={stack} images={images} links={links} />
  })
  return (
    <section className="projects">
        <div className="projects-inner">
            <h1 id="projects">PROJECTS</h1>
            
            <div className="projects-container">
            {mappedProjects}
            </div>

            
        </div>
    </section>
  )
}

export default Projects
