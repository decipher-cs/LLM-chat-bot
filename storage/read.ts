"use server"

import db, { storageTableName } from "./main"

import { messageHistorySchema } from "@/types"

export async function getAllMessages() {
  const stmt = db.prepare(`SELECT * FROM ${storageTableName}`)
  const rows = stmt.all()
  return messageHistorySchema.parse(rows)
}
