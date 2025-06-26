// app/(authorLandingPage)/blogpage/[slug]/page.js

import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"]{ slug }`)
  return slugs.map(({ slug }) => ({ slug: slug.current }))
}

export default async function Page({ params }) {
  const slug = await params?.slug // ✅ FIXED: no await here

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainImage,
    publishedAt,
    author->{
      name,
      image
    }
  }`

  const post = await client.fetch(query, { slug })

  if (!post) return notFound()

  const components = {
 types: {
  image: ({ value }) => {
    if (!value?.asset?._ref) return null; // 🛡️ prevent crash on missing image

    return (
      <img
        src={urlFor(value).width(800).url()}
        alt="Blog image"
        className="my-6 rounded-lg"
      />
    );
  },
},

    block: {
      normal: ({ children }) => <p className="mb-4">{children}</p>,
    },
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      <div className="text-sm text-gray-500 mb-4">
        {post.author?.name && <>By {post.author.name}</>}
        {post.publishedAt && <> · {format(new Date(post.publishedAt), 'PPP')}</>}
      </div>

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(900).url()}
          alt={post.title}
          className="rounded mb-6 shadow"
        />
      )}

      <PortableText value={post.body} components={components} />
    </div>
  )
}
