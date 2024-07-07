import { SVGProps } from "react"
import { z } from "zod"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export const messageHistorySchema = z
  .object({
    id: z.string(),
    content: z.string(),
    role: z.enum(["user", "assistant"]),
    vote: z.nullable(z.enum(["liked", "disliked"])),
  })
  .array()

export type MessageHistorySchema = z.infer<typeof messageHistorySchema>
