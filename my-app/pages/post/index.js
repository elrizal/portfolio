import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
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
    </Layout>
  )
}

export default Post