import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'
import AppbarScroll from '../../components/appbar';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
    <AppbarScroll/>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href='/post/[id]/[piece]' as={`/post/${id}/first-piece`}>
            <a>First </a>
          </Link>
        </li>
        <li>
          <Link href='/post/[id]/[piece]' as={`/post/${id}/second-piece`}>
            <a>Second </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post