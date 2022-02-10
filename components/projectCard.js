import {Card, Title, Text, Button} from 'react-bootstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function ProjectCard({image, title, description, id}){
  const router = useRouter()

  const handleClick = (e, path) => {
    e.preventDefault()
 
     if (path === `/projects/${id}`) {
       router.push(path)
     }
   };
  return(
    <div>
      <Card style={{ width: '20rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
        <Card.Img variant="top" src={(`/images/${image}.svg`)} height={150} width={150} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
            <Button style={{backgroundColor: "#6C63FF", width: '18rem'}} variant="primary" onClick={(e) => handleClick(e, `/projects/${id}`)}>View Project</Button>
        </Card.Body>
  </Card>
    </div>
  )
}