import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * You can write your custom database schema here.
 * Use this file for also re-exporting any generated schema for drizzle to generate proper migrations.
 */

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  interest: text("interest").notNull(),
  message: text("message"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
