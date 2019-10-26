import { useRouter } from 'next/router'
import Header from '../../components/header'
import Layout from '../../components/layout'

const Piece = () => {
  const router = useRouter()
  const { id, piece } = router.query

  return (
    <Layout>
      <Header />
      <h1>Post: {id}</h1>
      <h1>img?: {piece}</h1>
    </Layout>
  )
} 

export default Piece