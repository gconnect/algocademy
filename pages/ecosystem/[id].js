import {Card, Title, Text, Button, ProgressBar, Container, Row, Col} from 'react-bootstrap'
import Layout from '../../components/layouts'
import TaskCard from '../../components/taskcard'
import {task, ecosystem} from '../../data/projectData'
import { useRouter } from 'next/router'

export default function EcosystemDetail(){
  const router = new useRouter()
  const ecosytemItem = ecosystem.find((item) => item.id == router.query.id)
  if(!ecosytemItem) return <p></p>
  return(
      <div>
        <Layout>
        <Container>
          <Card style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderColor: "#A32896", marginTop: "48px", padding: "24px"}}>
            <Row>
              <Col md="auto">
                <Card.Img style={{marginTop:"8px"}} variant="top" src={(`/images/stakerdao.svg`)} height={200} width={200} />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title style={{color: "#A32896"}}>{ecosytemItem.title}</Card.Title>
                  <Card.Text>            
                  {ecosytemItem.description}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>       
          </Card>
          <h3 style={{marginTop: "24px"}}>Task</h3>
          <p>Get Started with {ecosytemItem.title}</p>
          <Row>
          {ecosytemItem.task.map((taskItem)=>{
            return <Col md="auto">
              <TaskCard title={taskItem.title} description={taskItem.description} image={taskItem.image} status={taskItem.status}/>
              </Col>
          })}
          </Row>

        </Container>
        </Layout>
      </div>
  )
}