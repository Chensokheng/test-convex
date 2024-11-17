import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createTask = mutation({
	args: { text: v.string() },
	handler: async (ctx, args) => {
		const newTaskId1 = await ctx.db.insert("tasks", {
			text: args.text + Math.random(),
		});

		const newTaskId2 = await ctx.db.insert("tasks2", {
			text: args.text + Math.random(),
		});

		const newTaskId3 = await ctx.db.insert("task3", {
			text: args.text + Math.random(),
		});

		return [newTaskId1, newTaskId2, newTaskId3];
	},
});
