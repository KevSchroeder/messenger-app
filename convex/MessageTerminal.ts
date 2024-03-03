import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


// Return the last 10 tasks in a given task list.
export const Messages = query(async ({ db }) => {
  return await db.query("messages").collect();
})

export const send = mutation({
  args: { body: v.string(), user: v.string() },  // passed to function on client side
  handler: async (ctx, { body, user }) => {
    const message = { body, user };
    await ctx.db.insert("messages", message); //inserting message to db
  },
})