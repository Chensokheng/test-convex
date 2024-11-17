"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Home() {
	const tasks = useQuery(api.tasks.get);
	const addTask = useMutation(api.createTask.createTask);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>hello wrold</h1>
			{tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
			<button onClick={() => addTask({ text: "new task" })}>
				add task
			</button>
		</main>
	);
}
