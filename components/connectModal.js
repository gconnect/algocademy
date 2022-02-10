import { Modal, Button } from "react-bootstrap"
import styled from 'styled-components'
import Image from "next/image"

const MyButton = styled.button`
  font-size: 24px;
  font-weight: bold;
  padding: 16px;
  color: #A32896;
  background-color: white;
  border: none;
  text-align: center;
`
const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #A32896;
  width: 60%;
  margin: auto;
  margin-top: 10px;
`
export default function ConnectModal(show, handleClose) {
  // const myAlgoWallet = new MyAlgo();

  // const myAlgo = () =>{

  //   myAlgoWallet.connect()
  //   .then((accounts) => {
  //       // Accounts is an array that has all public addresses shared by the user
  //   })
  //   .catch((err) => {
  //       // Error
  //   });
  // }
  return(
    <Div>
      <Modal show={show} onHide={!show} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title>Connect Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{padding: "48px"}}>
        <div>
          <Div>
            <Image src='/./images/algo.svg' width={50} height={36} alt='algorand'/>
            <MyButton>Algorand Wallet</MyButton>
          </Div>
          <Div>
            <Image src='/./images/algosigner.jpeg' width={50} height={16} alt='algosigner'/>
            <MyButton>AlgoSigner </MyButton>
          </Div>
          <Div>
            <Image src='/./images/myalgo.png' width={48} height={16} alt='myalgo'/>
            <MyButton>Myalgo Wallet</MyButton>
          </Div>
        </div>
      </Modal.Body>
    </Modal>
    </Div>
  )
}