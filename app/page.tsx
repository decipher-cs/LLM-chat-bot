import { getAllMessages } from "@/storage/read"
import Chat from "./chat"

export default async function Home() {
  const messages = await getAllMessages()
  return <Chat messages={messages} />
}
