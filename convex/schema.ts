import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

//define what type of data we are getting back
export default defineSchema({
    messages_data: defineTable({
        body: v.string(),
        user: v.optional(v.string()),
    })
});

