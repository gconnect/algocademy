import { useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import ConnectModal from './connectModal'

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
       <Wrapper>
         <Container>
         <Row style={{ padding: "24px"}}>
           <Col>
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
                <Link href="/skills/skills"><a>Skills</a></Link>
              </ListItems>
              <ListItems>              
                <Link href="/web3jobs"><a>Web3 Jobs</a></Link>
              </ListItems>
              <ListItems><Button style={{backgroundColor: "#A32896", border:"#A32896"}} onClick={handleShow}>Connect Wallet</Button></ListItems> 
              <ConnectModal show={show} handleClose={handleClose}/>
            </ul>
           </Col>
         </Row>
         </Container>
       </Wrapper>
  )
} 