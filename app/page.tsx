"use client"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { useState } from "react"

const generateSampleMessages = (howMany?: number) => {
  howMany = howMany ?? 1
  const res = []

  for (let i = 0; i < howMany; i++) {
    res.push({ sentByAi: false, message: "Say hello world" })

    res.push({ sentByAi: true, message: "Hello world" })
  }

  return res
}

export default function Home() {
  const [messages, setMessages] = useState<
    { message: string; sentByAi: boolean }[]
  >(generateSampleMessages(5))

  const [query, setQuery] = useState("")

  const sendQuery = () => {
    setMessages((p) => [{ message: query.trim(), sentByAi: false }, ...p])
    setQuery("")
  }

  return (
    <section className="flex h-full flex-col justify-end pb-4">
      <article className="flex flex-col-reverse gap-10 overflow-y-scroll p-2">
        {messages.map(({ message, sentByAi }, i) => (
          <div
            key={i}
            className={`${sentByAi ? "rounded-tl-none" : "rounded-tr-none"} ${sentByAi ? "self-start" : "self-end"} block rounded-3xl bg-green-600 p-8 sm:max-w-prose`}
          >
            <div>{message}</div>
          </div>
        ))}
      </article>

      <div className="mt-autoi flex gap-2">
        <Input
          label=""
          placeholder="Type here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={({ key }) => key === "Enter" && sendQuery()}
        />
        <Button onClick={sendQuery}>Send</Button>
      </div>
    </section>
  )
}
