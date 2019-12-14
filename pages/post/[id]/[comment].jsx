import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query

  return (
    <>
      <h2>Post: {id}</h2>
      <h3>Comment: {comment}</h3>
    </>
  )
}

export default Comment