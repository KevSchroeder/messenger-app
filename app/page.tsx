"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { FormEvent, useState } from "react";
import Link from "next/link";



export default function App() {
    
    const messages = useQuery(api.MessageTerminal.Messages) || [];
    const [text, setText] = useState<string>('');
    const sendMessage = useMutation(api.MessageTerminal.send);

    const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));


    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();
        await sendMessage({body: text, user:"" })
    }

    return (
        <main className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Convex Chat</h1>
    <p className="badge">
        <span>{name}</span>
    </p>
    <ul className="space-y-4">
        {messages.map((message) => (
        <li key={message._id} className="flex items-center space-x-2">
            <span className="font-bold">{message.user}:</span>
            <span>{message.body}</span>
            <span className="text-gray-500 text-sm">{new Date(message._creationTime).toLocaleTimeString()}</span>
        </li>
        ))}
    </ul>
    <form className="mt-8" onSubmit={handleSendMessage}>
        <input
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-3/4"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Write a message…"
        />
        <input
            type="submit"
            value="Send"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer disabled:opacity-50"
            disabled={!text}
        />
    </form>
</main>

    );

}

