import Layout from "../../components/layouts";
import styled from "styled-components";
import ProjectCard from "../../components/projectCard";
import { Container, Row, Col } from "react-bootstrap";
import {projects} from '../../data/projectData'
import { useRouter } from 'next/router'
import Link from "next/link";

export default function Projects(){
  const router = useRouter()

  const handleClick = (e, path) => {
    e.preventDefault()
 
     if (path === "/projects/projectDetail") {
       router.push(path)
     }
   };
 
  return(
       <Layout>
         <Container style={{marginTop: '36px'}}>
            <h2>Projects</h2>
            <p>Pick a project and start hacking</p>
           <Row className="justify-content-md-evenly">
             {projects.map((project, index)=>{
               return   <Col key={index} md="auto" style={{marginTop: "24px"}}>
                 <Link href={{ pathname: `/projects/${project.id}`}}>
                 <a>
                  <ProjectCard image={project.image} title={project.title} description={project.description} id={project.id}/>
                  </a>
                  </Link>
            </Col>
             })}
           </Row>
         </Container>
         
      </Layout>   
  )
}
