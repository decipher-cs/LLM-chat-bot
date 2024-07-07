"use server"

import db, { storageTableName } from "./main"
import { MessageHistorySchema } from "../types/index"

export async function updateVoteStatus(
  id: MessageHistorySchema[number]["id"],
  vote: MessageHistorySchema[number]["vote"],
) {
  const stmt = db.prepare(
    `UPDATE ${storageTableName} SET vote = ? WHERE id = ?`,
  )

  stmt.run(vote, id)
}
