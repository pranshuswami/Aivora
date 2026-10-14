"use client"

import Image from "next/image";
import {useState} from "react"
import {generateTextAction} from "@/app/actions/aiAction"
import ReactMarkDown from "react-markdown";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSendPrompt=async()=>{

    const response= await generateTextAction(prompt)
    setOutput(response)
  }
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between px-24 py-6 pb-16 overflow-auto">

      {output && (
        <div className="">
          <h1 className="text-2xl font-bold mb-4">AI response</h1>
          <ReactMarkDown>{output}</ReactMarkDown>
        </div>
      )}

      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full   rounded-lg shadow-md ">
        <input
        onChange={(e)=>setPrompt(e.currentTarget.value)}
        className="border p-2 rounded-md w-[80%] outline-none"
         placeholder="Type your message here..."
        value={prompt}></input>
        <button className="bg-neutral-700 text-white p-2 rounded-md ml-4 w-[18%] cursor-pointer" onClick={handleSendPrompt}>
          Send
        </button>
      </div>
    </main>
  );
}
