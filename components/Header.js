import {Container, Row, Col, Button} from 'react-bootstrap'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.div`
  height: 100px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`
const ListItems = styled.div`
  display: inline;
  margin-left: 24px;
`
export default function Header(){
  return(
       <Wrapper>
         <Container>
         <Row style={{ padding: "24px"}}>
           <Col>
              {/* <p style={{color: "#1F54DF", fontWeight: "bold"}}> <Image src="/images/logo.svg" alt="logo" width="30px" height="30px"/>                
              <Link href="/"><a>Algocademy</a></Link>
              </p>  */}

             <a href="/"><Image src="/images/logofull.svg" alt="logo" width="120px" height="50px"/></a> 
           </Col>
           <Col>
            <ul>
              <ListItems>
                <Link href="/projects/project"><a>Projects</a></Link>
              </ListItems>
              <ListItems>
              <Link href="/ecosystem/ecosystem"><a>Ecosystem</a></Link>
              </ListItems>
              <ListItems>              
                <Link href="/ecosystem/skills"><a>Skills</a></Link>
              </ListItems>
              <ListItems>              
                <Link href="/ecosystem/ecosystemDetail"><a>Web3 Jobs</a></Link>
              </ListItems>
              <ListItems><Button style={{backgroundColor: "#A32896", border:"#A32896"}}>Connect Wallet</Button></ListItems> 
            </ul>
           </Col>
         </Row>
         </Container>
       </Wrapper>
  )
} 