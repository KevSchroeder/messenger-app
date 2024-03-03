import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

//define what type of data we are getting back
export default defineSchema({
    messages: defineTable({
        body: v.string(),
        user: v.string(),
    })
});

