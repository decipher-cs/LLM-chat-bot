import { ollama } from "ollama-ai-provider"
import { streamText } from "ai"

// Allow streaming responses up to 60 seconds
// Longer is good for people with poor connectionsn
// or systems with slower hardware
export const maxDuration = 60

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    // model: ollama("llama3"), // Slower but better model
    model: ollama("phi3"), // Faster but older less capable model
    messages,
  })

  return result.toAIStreamResponse()
}
