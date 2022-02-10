/*global AlgoSigner*/
import { useRef, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import styled from 'styled-components'
import Image from "next/image"
// import { MyAlgoWallet } from '@randlabs/myalgo-connect';

// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "algorand-walletconnect-qrcode-modal";
// import algosdk from "algosdk";
// import { formatJsonRpcRequest } from "@json-rpc-tools/utils";

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
export default function ConnectModal({show, handleClose}) {
 const userAccount = useRef()
 const account = useRef()
 const [showAccount, setShowAccount] = useState(false);


  // if (typeof window !== "undefined") {
  //   // browser code
  //   const myAlgoWallet = new MyAlgoWallet();

  //   const myAlgo = () =>{
  
  //       myAlgoWallet.connect()
  //       .then((accounts) => {
  //           // Accounts is an array that has all public addresses shared by the user
  //       })
  //       .catch((err) => {
  //           // Error
  //       });
  //     }
  // }

  //Connect Algosigner
  const connectAlgoSigner = async () =>{
    let resp = await AlgoSigner.connect()
    console.log(resp)    
    getUserAccount()
    setShowAccount(true)
  }

  const getUserAccount = async () =>{
     userAccount.current =  await AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        if(userAccount.current[0]['address'] !== null){
          setShowAccount(true)
        }

        account.current = userAccount.current[0]['address']
        console.log(account.current)
  // console.log(userAccount.current[0]['address'])
  // console.log(userAccount.current)
}


  // const algorandWallet = () =>{
  //   // Create a connector
  //   const connector = new WalletConnect({
  //   bridge: "https://bridge.walletconnect.org", // Required
  //   qrcodeModal: QRCodeModal,
  //   });

  //   // Check if connection is already established
  //   if (!connector.connected) {
  //   // create new session
  //   connector.createSession();
  //   }

  //   // Subscribe to connection events
  //   connector.on("connect", (error, payload) => {
  //   if (error) {
  //   throw error;
  //   }

  //   // Get provided accounts
  //   const { accounts } = payload.params[0];
  //   });

  //   connector.on("session_update", (error, payload) => {
  //   if (error) {
  //   throw error;
  //   }

  //   // Get updated accounts 
  //   const { accounts } = payload.params[0];
  //   });

  //   connector.on("disconnect", (error, payload) => {
  //   if (error) {
  //   throw error;
  //   }
  //   });
  // }
  return(
    <Div>
      <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title>Connect Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{padding: "48px"}}>
        <div>
        <Div>
            <Image src='/./images/algosigner.jpeg' width={50} height={16} alt='algosigner'/>
            <MyButton onClick={connectAlgoSigner}>AlgoSigner </MyButton>
          </Div>
          <Div>
            <Image src='/./images/algo.svg' width={50} height={36} alt='algorand'/>
            <MyButton>Algorand Wallet</MyButton>
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