import { Form } from "@/components/Form"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"



const page = async() => {
 
  return (
    <main className="text-center pt-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
    <Form/>
    
   </main>
  )
}

export default page