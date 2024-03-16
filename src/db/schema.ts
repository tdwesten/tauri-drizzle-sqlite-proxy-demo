import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey().unique(),
  name: text("name"),
  age: integer("age").default(18),
  email: text("email").unique(),
  created_at: text("created_at").default("CURRENT_TIMESTAMP"),
  updated_at: text("updated_at").default("CURRENT_TIMESTAMP"),
  deleted_at: text("deleted_at").default("NULL"),
  city: text("city").default("NULL"),
});
