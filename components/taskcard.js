import {Card, Title, Text, Button, ProgressBar, Container, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'


export default function TaskCard({image, title, description, status}){
  return(
    <div>
      <Container>
      <Card style={{ width: '20rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderColor: "#A32896", marginTop: "24px", padding: "24px", height: "350px"}}>
        <Row>
          <Col>
            <Card.Img style={{marginTop:"8px"}} variant="top" src={(`/images/${image}.svg`)} height={100} width={100} />
          </Col>
          <Col>
            {status === true ?
            <Button style={{backgroundColor: "#57A719", borderColor: "#57A719", marginBottom: "24px"}}>Completed</Button>
             : <Button style={{backgroundColor: "#FE0B36", borderColor: "#FE0B36", marginBottom: "24px"}}>Incomplete</Button>}
            {status == true ? <h6> 50 SDAO</h6> : <h6>0 SDAO</h6>}    
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 style={{color: "#A32896"}}>{title}</h5>
            <p>{description}</p>
            <hr/>
            <Row className="justify-content-md-center">
              <Col>
                <Button style={{backgroundColor: "#C4C4C4", borderColor: "#C4C4C4"}}>Details</Button>
              </Col>
              <Col>
              {status === true ? 
                <Button style={{backgroundColor: "#57A719", borderColor: "#57A719"}} hidden>Start</Button>
                : <Button style={{backgroundColor: "#57A719", borderColor: "#57A719"}}>Start</Button>
              }
              </Col>
            </Row>
          </Col>
        </Row>
        </Card>
      </Container>     
    </div>
  )
}