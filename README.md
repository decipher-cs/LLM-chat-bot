### LLM Chat Bot

A simple chat bot made with vercel's Ai toolkit and ollama

### Video Preview

![app video demo](https://github.com/decipher-cs/LLM-chat-bot/assets/130742861/59b7ab2d-6cd8-45f8-b749-705fd0ec4ef7)

### Installation

##### Install Ollama (LLM backend)

This project relies on [Ollama](https://ollama.com/) to work. It should be installed on your system.

1. [Download](https://ollama.com/download/) Ollama for your operating system
2. Download [Meta's Llama 3 model](https://ollama.com/library/llama3) (≈4GB) by running `ollama run llama3` in your terminal

   Node: If the responses are slow you may switch to a **faster model**. Check out the FAQ at the end.

##### Run Development Version

1. Run `pnpm i` to install all dependencies
2. Run `pnpm dev` to start dev server or `pnpm build-preview` for productioin server
3. Open `localhost:3000/` on your browser

### Tech

- NextJS
- Typescript
- React
- Vercel's Ai Toolkit
- Ollama
- Meta's llama3 model
- Tailwind
- NextUI

### Requirements:

- [x] Single User Assumption: Design the application for a single user; there is no need to implement authentication or a user management system.

- [x] Session Memory: The application must be capable of recalling messages from previous sessions with the user. (use sqlite as database)

- [x] User Feedback Implementation: Incorporate a like/dislike button for each message from the AI. The application should record this feedback in a database and display it alongside the messages in subsequent sessions.

Bonus Task:

- [x] Enhanced Formatting: Implement the capability for the AI to deliver responses in Markdown format.

### FAQ

<details>
<summary>How do I change the LLM model?</summary>

You need to download one of many available models from [Ollama's library](https://ollama.com/library/) and then make the following changes to `/app/api/v1/chat/route.ts`

_Note: I am using llama3 just as an example_

```diff
const result = await streamText({
--  model: ollama("llama3"), // Slower but better model
++  model: ollama("phi3"), // Faster but older less capable model
  messages,
})
```

</details>

<details>
<summary> Why did I use Ollama? </summary>

Because it runs locally and is free. Unlinke APIs from OpenAi, Athropic, etc.

</details>
