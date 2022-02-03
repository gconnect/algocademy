import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"

const Wrapper = styled.div`
position: absolute;
margin-top: 50px;
`

export default function Footer(){
  return(
    <Wrapper>
      <Container>
        <Row style ={{marginTop: "50px"}}>
          <Col md="auto">
          <p> <Image src="/images/logo.svg" alt="logo" width="30px" height="30px"/>Algocademy</p> 
         <p>Where devs learn by building</p> 
         <p> Copyright (c) 2022. All rights reserved</p>
          </Col>
          <Col>
           <p>
           <a href="https://google.com" style={{color: "#0070f3"}}>Discord</a>
           </p> 
           <p><a href="https://google.com" style={{color: "#0070f3"}}>Twitter
            </a></p> 
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
} 