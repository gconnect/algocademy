import styled from "styled-components"
import Layout from "../components/layouts"

const Soon = styled.p`
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #A32896;
  
`
const Div = styled.div`
  min-height: 100vh;
`

export default function Jobs (){
  return (
    <Layout>
      <Div>
        <Soon>Coming soon</Soon>
      </Div>
    </Layout>
  )
}