import {Card, Title, Text, Button} from 'react-bootstrap'
import styled from 'styled-components'


export default function ProjectCard({image, title, description}){
  return(
    <div>
      <Card style={{ width: '20rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
        <Card.Img variant="top" src={(`/images/${image}.svg`)} height={150} width={150} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button style={{backgroundColor: "#6C63FF", width: '18rem'}} variant="primary">View Project</Button>
        </Card.Body>
  </Card>
    </div>
  )
}