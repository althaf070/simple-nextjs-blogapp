import { createPost } from "@/actions/formsub"

export const Form = () => {
  return (
    <form
    className="flex flex-col max-w-[400px] mx-auto gap-2 my-10 shadow-lg"
    action={createPost}
  >
    <input
      type="text"
      name="title"
      placeholder="Title for new post"
      className="border rounded px-3 h-10 bg-slate-300 text-black"
      required
    />
    <textarea
      name="body"
      placeholder="Body content for new post"
      className="border rounded px-3 py-2 bg-slate-300 text-black"
      rows={6}
      required
    />
    <button className="h-10 bg-blue-500 px-5 rounded text-white">
      Submit
    </button>
  </form>
  )
}
