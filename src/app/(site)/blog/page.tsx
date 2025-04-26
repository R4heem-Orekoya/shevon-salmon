import { POSTS_QUERY } from "@/lib/sanity/utils/queries";
import { POSTS_QUERYResult } from "@/root/sanity.types";
import { sanityFetch } from "@/lib/sanity/utils/live";

async function Page() {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  })
  const posts: POSTS_QUERYResult = data

  return (
    <main className="min-h-screen">
      <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <a
              className="block p-4 hover:bg-blue-50"
              href={`/posts/${post?.slug?.current}`}
            >
              {post?.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Page
