"use server"
import { Message } from "ai"

import db, { storageTableName } from "./main"

export async function createMessageEntry(entries: Message[]) {
  const stmt = db.prepare(
    `INSERT OR IGNORE INTO ${storageTableName} (id, content, role, vote) VALUES (?, ?, ?, ?)`,
  )

  for (let i = 0; i < entries.length; i++) {
    const { id, content, role } = entries[i]
    stmt.run(id, content, role, null)
  }
}
