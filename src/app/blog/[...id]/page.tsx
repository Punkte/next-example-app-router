import React from 'react'

const BlogPage = async ({params}: {params: Promise<{id?: string[]}>}) => {
  const segments = await params
  console.log(segments)
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage