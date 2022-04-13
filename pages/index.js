import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show them */}
      {posts?.data &&
        posts?.data?.map((post) => (
          <Link href={`/${post.attributes.Slug}`} key={post.id}>
            <a>
              <h2>{post.attributes.Title}</h2>
              <div>{post.attributes.Slug}</div>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/api/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}
