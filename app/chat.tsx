"use client"
import { Message, useChat } from "ai/react"
import { Button, ButtonGroup } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Kbd } from "@nextui-org/kbd"
import { createMessageEntry } from "@/storage/create"
import clsx from "clsx"
import { ThumbsDown, ThumbsUp } from "../components/icons"
import { updateVoteStatus } from "@/storage/update"
import { nanoid } from "nanoid"

export default function Chat(props: { messages: Message[] }) {
  const { input, messages, handleSubmit, handleInputChange, isLoading } =
    useChat({
      api: "api/v1/chat",
      onFinish: ({ id, role, content }) => {
        createMessageEntry([{ role, content, id }])
      },
      initialMessages: props.messages,
    })

  return (
    <section className="flex h-full flex-col justify-end pb-4">
      <article className="flex flex-col gap-10 overflow-y-scroll p-2">
        {/* reverse method is used in conjunction with flex-col-reverse to get */}
        {/* the viewport for the messages to auto-scroll on new message and stick to the bottom */}
        {messages.map(({ content, role, id, createdAt }) => (
          <div
            key={id}
            className={clsx(
              role === "user" ? "rounded-tr-none" : "rounded-tl-none",
              role === "user" ? "self-end" : "self-start",
              "relative block rounded-3xl px-6 py-4 leading-relaxed sm:max-w-prose",
            )}
            style={{
              boxShadow: "0px 0px 1px 1px #0ff",
            }}
          >
            <p className="prose">{content}</p>

            {role === "assistant" && (
              <span className="absolute inset-y-0 right-0 flex translate-x-full items-center text-sm">
                <div className="mx-2 flex items-center gap-2">
                  <ButtonGroup variant="faded" isIconOnly size="sm">
                    <Button
                      aria-label="Like"
                      color="success"
                      onClick={() => updateVoteStatus(id, "liked")}
                    >
                      <ThumbsUp />
                    </Button>

                    <Button
                      aria-label="dislike"
                      color="danger"
                      onClick={() => updateVoteStatus(id, "disliked")}
                    >
                      <ThumbsDown />
                    </Button>
                  </ButtonGroup>
                </div>
              </span>
            )}
          </div>
        ))}
      </article>

      <form
        className="mt-auto flex gap-2"
        onSubmit={(e) => {
          createMessageEntry([{ id: nanoid(7), content: input, role: "user" }])
          handleSubmit(e)
        }}
      >
        <Input
          disabled={isLoading}
          endContent={<Kbd keys={["enter"]} />}
          placeholder="Type here..."
          value={input}
          onChange={handleInputChange}
        />

        <Button disabled={isLoading} isLoading={isLoading} type="submit">
          SEND
        </Button>
      </form>
    </section>
  )
}
