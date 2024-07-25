import prisma from "@/lib/db";
import Link from "next/link";
export const PostList =async () => {
    const posts= await prisma.post.findMany()
    
  return (
    <ul className="text-center mt-3">
    {posts?.map((post:any) => (
     <li key={post.id} className="mb-4 underline">
       <Link href={`/posts/${post.id}`}>{post.title}</Link>
     </li>
    ))}
     </ul>
  )
}
