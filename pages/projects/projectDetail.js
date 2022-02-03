import Layout from "../../components/layouts";
import {Container, Row, Col} from 'react-bootstrap'
import {projects, steps} from '../../data/projectData'
import styled from "styled-components";

const SubTitle = styled.h5`
  color: #1F54DF;
  margin-top: 24px;
`
export default function ProjectDetail(){
  return(
    <div>
      <Layout>
        <div>
          <Container>
            <Row style={{marginTop: "24px"}}>
              <Col>
                <h3>Build a smart contract with TEAL</h3>
                <SubTitle>Project Goal</SubTitle>
                <p>The goal of this project is to write your first smart contract with TEAL 
                  test and deploy to the TestNet</p>
                <SubTitle>Required Steps</SubTitle>
                {steps.map((step)=>{
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