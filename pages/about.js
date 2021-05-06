import React from 'react'
import { Layout } from '../components'
import {getSortedPostsData} from '../lib/posts'
import fetch from 'node-fetch'

const About = ({data}) => {
  console.log(data)
  return (
    <div>
      <Layout>
      <h1>about</h1>
      {data && data.map((block) => {
        return(
          <>
           <h1>{block.title}</h1>
          </>
        )
      })}
      </Layout>
    </div>
  )
}

export const getStaticProps = async() => {
 const data = getSortedPostsData()
 return {
   props: {
     data
   }
 }
}



export default About
