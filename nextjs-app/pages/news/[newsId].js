// our-domain.com/news/something-important
import { useRouter } from 'next/router'
import React from 'react'

const DetailPage = () => {

  const router = useRouter();
  const newId = router.query.newsId;
  

  return (
    <h1>the Detail page</h1>
  )
}

export default DetailPage