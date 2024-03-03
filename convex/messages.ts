import { query } from "./_generated/server";
import { v } from "convex/values";

// Return the last 10 tasks in a given task list.
export const list = query(async ({ db }) => {
  return await db.query("messages").collect();
})