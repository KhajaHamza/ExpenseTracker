import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between sm:p-24 p-4${inter.className}`}
>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
       <div className="bg--800 p-4 rounded-lg">
        <form className="grid grid-cols-6 items-center text-black">
          <input className='col-span-3 p-3 border' type="text" placeholder='Enter Item'/>
          <input className='col-span-2 p-3 border ' type="number" placeholder='Enter $'/>
          <button className='text-white bg-slate-950 hover:bg-purple-900 p-3 'type="submit">+</button>
        </form>
       </div>
      </div>
    </main>
  );
}
