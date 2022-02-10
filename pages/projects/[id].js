
import Layout from "../../components/layouts";
import {Container, Row, Col} from 'react-bootstrap'
import {projects, steps} from '../../data/projectData'
import styled from "styled-components";
import { useRouter } from "next/router";

const SubTitle = styled.h5`
  color: #1F54DF;
  margin-top: 24px;
`
export default function ProjectDetail(){
  const router = useRouter() 
  const projectItem = projects.find(item => item.id == router.query.id)
  console.log(projectItem)

  if (!projectItem) return <p></p>
  return(
    <div>
      <Layout>
        <div>
          <Container>
            <Row style={{marginTop: "24px"}}>
              <Col>
                <h3>{projectItem.title}</h3>
                <SubTitle>Project Goal</SubTitle>
                <p>{projectItem.description}</p>
                <SubTitle>Required Steps</SubTitle>
                {projectItem.requiredSteps.map((step)=>{
                  return <div>       
                        <label><input type="radio" checked style={{marginRight: "24px"}}/>{step.title}</label> 
                        <p>{step.description}</p>
                        <hr/>              
                  </div>
                })}
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  )
}