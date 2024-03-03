"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { FormEvent, useState } from "react";
import Link from "next/link";
import Bob from "./alice";
import Alice from "./alice";


export default function App() {
    const HomePage = () => {
        return (
        <div>
            <h1>Welcome to Home Page</h1>
                <ul>
                    <li><Link href="/alice"><a>Alice</a></Link></li>
                    <li><Link href="/bob"><a>Bob</a></Link></li>
                </ul>
            </div>
        );
    };



    const messages = useQuery(api.MessageTerminal.Messages) || [];

    const [text, setText] = useState<string>('');
    const sendMessage = useMutation(api.MessageTerminal.send);

    const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));


    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();
        await sendMessage({body: text, user:"" })
    }

    return (
        <main>
        <h1>Convex Chat</h1>
        <p className="badge">
            <span>{name}</span>
        </p>
        <ul>
            {messages.map((message) => (
            <li key={message._id}>
                <span>{message.user}:</span>
                <span>{message.body}</span>
                <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
            </li>
            ))}
        </ul>
        <form onSubmit={handleSendMessage}>
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Write a message…"
            />
            <input type="submit" value="Send" disabled={!text} />
        </form>
        </main>
    );

}

