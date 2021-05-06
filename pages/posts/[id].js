import { Layout } from "../../components"
import {getALlPostIds} from '../../lib/posts'

const [id] = () => {
  return (
    <Layout>

    </Layout>
  )
}

export const getStaticPaths = async() => {
  const paths = getALlPostIds()
  return {
    paths,
    fallback: false
  }
}

export default [id]
