import Layout from "../../components/layouts";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import {ecosystem} from '../../data/projectData'
import EcosystemCard from "../../components/ecosystemCard";
import Link from "next/link";
const Label = styled.label`
  color : #A32896;
`

const Title = styled.h1`
  font-weight : bold;
  margin-top: 24px;
`
export default function Ecosystem(){

  return(
    <div>
      <Layout>
        <Container>
          <Title>
            <Label>Interact with </Label> <br/>
            Algorand Ecosystem<br/> Projects.
          </Title>
          <p>Interact with Algorand Ecosystem projects and earn rewards.</p>
            <Row className="justify-content-md-evenly">
              {ecosystem.map((project)=>{
                return   <Col md="auto" style={{marginTop: "24px"}}>
                <Link href={{ pathname: `/ecosystem/${project.id}`}}>
                 <a>
                <EcosystemCard image={project.image} title={project.title} description={project.description} id={project.id}/>
                </a>
                </Link>
              </Col>
              })}
            </Row>
        </Container>    
      </Layout>
    </div>
  )
}