import styled from "styled-components"
import Image from "next/image"
import {Card, Text, Body, Button} from 'react-bootstrap/'
import { createRouteLoader } from "next/dist/client/route-loader"
const Container = styled.div`
  margin-top: 36px;
  width: 365px;
  height: 453px;
  border: solid grey;
`

const TextItem = styled.p`
text-align:center;
`
export default function OnboardingCard({icon, title, subtext, color}){
  return(
    // <Container background-color={color}>
    //   <Image src="/images/${icon}" height="70px" width="100px" alt = "cards"/>
    //   <h3>{title}</h3>
    //   <p>{subtext}</p>
    // </Container>

    <Card  style={{ width: '18rem', backgroundColor: color, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
      <Card.Img variant="top" src={(`/images/${icon}.svg`)} height={150} width={150}  />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>
          <TextItem>
          {title}
          </TextItem>
        </Card.Title>
        <Card.Text style={{ color: "white" }}>
          <TextItem>{subtext}</TextItem>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}