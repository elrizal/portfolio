import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const Piece = () => {
  const router = useRouter()
  const { id, piece } = router.query

  return (
    <Layout>
      <h1>Post: {id}</h1>
      <h1>img?: {piece}</h1>
    </Layout>
  )
} 

export default Piece