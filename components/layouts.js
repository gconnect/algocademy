import Header from "./Header"
import Footer from "./footer"
import Head from "next/head"
import styled from 'styled-components'

const Wrapper = styled.main`
  /* height: 100vh; */
  position: relative;
`

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Header/>  
      </header>
      <Wrapper>
        {children}
      </Wrapper>
        <footer>
          <Footer/>
        </footer>
    </div>
    )
}