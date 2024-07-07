import Database from "better-sqlite3"
const db = new Database("storage.db")
export const storageTableName = "messages"
db.pragma("journal_mode = WAL")
db.exec(
  `create table if not exists ${storageTableName} (
          id TEXT UNIQUE,
          content TEXT NOT NULL,
          role TEXT NOT NULL,
          vote TEXT check(vote in ('liked', 'disliked')) DEFAULT NULL
      )
    `,
)

export default db
