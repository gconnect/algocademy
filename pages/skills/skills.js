import Layout from "../../components/layouts";
import styled from "styled-components";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import {skills} from '../../data/projectData'
import SkillsCard from "../../components/skillsCard";
import Link from "next/link";

const Label = styled.label`
  color : #A32896;
`

const Title = styled.h1`
  font-weight : bold;
  margin-top: 24px;
`
export default function Skills(){

  return(
    <div>
      <Layout>
        <Container>
          <Title>
            Skills
          </Title>
          <p>Acquire Skills to earn more rewards.</p>
            <Row className="justify-content-md-evenly">
              {skills.map((skill)=>{
                return   <Col md="auto" style={{marginTop: "24px"}}>
                  <Link href={{pathname: `/skills/${skill.id}`}}>
                    <a>
                      <SkillsCard image={skill.image} title={skill.title} description={skill.description} id={skill.id}/>
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