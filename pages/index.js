import { Fragment } from "react";

export default function Home() {
  return (
   <Fragment>
   <div className="font-bold text-4xl text-orange-700 text-center p-4 bg-red-900"> Hello world with nextjs and tailwindcss</div>
   <div class="flex justify-center m-4">
     <button className="text-blue-500 font-normal text-center bg-amber-400 border-2 rounded-lg p-4 align-middle">Get started</button>
   </div>
   </Fragment>
  )
}
