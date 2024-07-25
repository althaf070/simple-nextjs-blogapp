import { PostList } from "@/components/PostList"
import { Suspense } from "react"


const Postspage =async () => {

  
  return (
    <div className="w-full h-[100vh]">
    <div className="md:pt-40">
    <h1 className="text-center md:text-6xl font-semibold">Posts </h1>
    <Suspense fallback="loading...">
    <PostList/>
    </Suspense>
    </div>
 
  </div>
  )
}

export default Postspage