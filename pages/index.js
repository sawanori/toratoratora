import React from 'react'
import Image from 'next/Image'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
import fetch from 'node-fetch'



const Index = ({messages}) => {
  const router = useRouter()
  const Transition = (e) => {
   e.preventDefault();
   router.push("/about")
  }
  console.log(messages)
  return (
    <div>
      <Head>
        <title>おここここここ</title>
      </Head>
      <h1>テスト</h1> 
      <Link href="/posts/about">ABOUT</Link>
      <button onClick={Transition}>押してね</button>
      <Image src="/no-1-6.jpg" width={500} height="500"/>
     {messages.map((message) => {
       return(
         <h1>{message.title}</h1>
       )
     })}


    </div>
  )
}


export const getStaticProps = async() => {
  const res = await fetch(new URL("https://jsonplaceholder.typicode.com/posts"))
  const messages = await res.json()

  return {
    props: {
      messages
    }
 }
}

export default Index
