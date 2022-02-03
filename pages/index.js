import Head from 'next/head'
import HomePage from '../components/home'
import Layout from '../components/layouts'
import styled from 'styled-components'
import Footer from '../components/footer'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
        <HomePage/>
        </Layout>  
    </div>
  )}
     
