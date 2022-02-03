import Layout from "../../components/layouts";
import styled from "styled-components";
import ProjectCard from "../../components/projectCard";
import { Container, Row, Col } from "react-bootstrap";
import {projects} from '../../data/projectData'

const Wrapper = styled.main`
  height: 100vh;
`

export default function Projects(){
  console.log(projects)
  
  return(
       <Layout>
         <Container style={{marginTop: '36px'}}>
            <h2>Projects</h2>
            <p>Pick a project and start hacking</p>
           <Row className="justify-content-md-evenly">
             {projects.map((project)=>{
               return   <Col md="auto" style={{marginTop: "24px"}}>
               <ProjectCard image={project.image} title={project.title} description={project.description}/>
            </Col>
             })}
           </Row>
         </Container>
         
      </Layout>   
  )
}
