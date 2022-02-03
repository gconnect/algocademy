import {Card, Title, Text, Button, ProgressBar, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'


export default function EcosystemCard({image, title, description}){
  return(
    <div>
      <Card style={{ width: '20rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderColor: "#A32896", padding: "24px", height: '350px'}}>
        <Row>
          <Col >          
            <Card.Img style={{marginTop:"8px"}} variant="top" src={(`/images/${image}.svg`)} height={100} width={100} />
          </Col>
          <Col >
            <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>     
      </Card>
    </div>
  )
}