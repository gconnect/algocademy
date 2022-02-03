import {Container, Row,Col } from 'react-bootstrap'
import styled from 'styled-components'
import Image from 'next/image'
import {partners} from '../data/projectData'
import Button from 'react-bootstrap/Button'
import OnboardingCard from './onboardingCard'

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  line-height: 80px;
`
const Wrapper = styled.div`
  margin-top: 36px;
`
const PrimaryColor = styled.label`
  color: #1F54DF;
`
const ButtonStyle = styled.label`
  text-align: center;
  width: 100%;
`
const SubText = styled.p`
  line-height: 30px;
`
const SubText2 = styled.p`
  line-height: 24px;
  text-align: center;
  font-size: 18px;
  margin-top: 36px;
`

const SubTitle = styled.h1`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin: 40px;
`
const Partners = styled.div`
    margin: 18px;
    display: inline;
    text-align: center;
    justify-items: center;
    padding: 24px;
`

export default function HomePage(){
  
  return(
    <Wrapper>
        <Container>
          <Row>
            <Col>
              <Title>
              <PrimaryColor>Start Building </PrimaryColor><br/>
              Decentralize Apps<br/>
              on <PrimaryColor>Algorand.</PrimaryColor>
              </Title>
              <SubText>
                If you're a dev that's curious about web3 but not sure where to start<br/>
                - this is the spot for you. Learn + start building cool stuff right now,<br/>
                earn NFTs, access secret work opportunities in web3.
              </SubText>
              <Button style={{backgroundColor:'#A32896', border:"#A32896"}}>Join Discord</Button>
            </Col>
            <Col>
              <Image src="/images/person.png" height="489px" width="669px"
               alt="Person on desktop"/>
            </Col>
          </Row>
          <Row>
              <Col>
                <SubTitle><PrimaryColor>Learn by</PrimaryColor> making Stuff.</SubTitle>
                <SubText2>Say goodbye to 40-hour long recorded courses and tutorials that no one ever finishes.<br/> 
                  Say hello to courses that focus on actually making stuff.</SubText2>
              </Col>
            </Row>
            <div>
              <Row className="justify-content-md-evenly">
                <Col md="auto">
                <OnboardingCard icon="onboarding" color="#1F54DF" title="Exciting Kick-off" subtext="We make the start of every 
                  cohort a memorable event"/>
                </Col>
                <Col md="auto">
                <OnboardingCard icon="community" color="#A32896" title="Great Community" subtext="Make progress on your project 
                    alongside other builders"/>
                </Col>
                <Col md="auto">
                <OnboardingCard icon="projects" color="#8987F2" title="Unique Projects" subtext="Projects that you can customize, 
                  and deploy"/>
                </Col>
              </Row>
            </div>
            
            <Row>
              <Col>
                <SubTitle>Build alongside  <PrimaryColor>other devs.</PrimaryColor> </SubTitle>
                <SubText2>Making stuff alone is lame. Once you enroll we'll get you in a channel where 
                 <br/> you'll get to share progress with a cohort of awesome devs.</SubText2>
              </Col>
            </Row>
            <ButtonStyle>
            <Button style={{backgroundColor:'#A32896', border:"#A32896"}}>Join Discord</Button>
            </ButtonStyle>
            <Row>
              <Col>
                <SubTitle><PrimaryColor>Our</PrimaryColor>  Partners. </SubTitle>
                {partners.map((partner)=>{
                  return <Partners>
                    <Image src={( `/images/${partner.image}.svg`)} height="100px" width="100px" style={{margin: "24px"}}
                    alt="Person on desktop"/>
                  </Partners>
                })}
              </Col>
            </Row>
        </Container>
    </Wrapper>

  )
}