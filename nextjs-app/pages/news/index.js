// our-domain.com/news
import Link from 'next/link';
import React from 'react'

const NewsPage = () => {
  return (
    <>
      <h1>the News page</h1>
      <ul>
        <li><Link href="/news/nextjs-is-a-great-framework">NextJS is a great framework</Link></li>
        <li>something else</li>
      </ul>
    </>
  )
}

export default NewsPage;