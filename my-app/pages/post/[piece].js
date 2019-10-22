import { useRouter } from 'next/router'
import Header from '../../components/header'
import AppbarScroll from '../../components/appbar';

const Piece = () => {
  const router = useRouter()
  const { id, piece } = router.query

  return (
    <>
    <AppbarScroll/>
      <Header />
      <h1>Post: {id}</h1>
      <h1>img?: {piece}</h1>
    </>
  )
} 

export default Piece