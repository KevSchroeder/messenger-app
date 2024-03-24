"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { FormEvent, useEffect, useState } from "react";


interface ChatAppProps {
    user: string;
}

const ChatApp = ( { user }: ChatAppProps ) => {
    
    const [text, setText] = useState<string>('');
    const sendMessage = useMutation(api.MessageTerminal.send); // Using the send mutation
    const messages = useQuery(api.MessageTerminal.Messages) || [];

    async function handleSendMessage(event: FormEvent) {
        
        event.preventDefault();
         await sendMessage({ body: text, user: user }); // Sending user along with the message
        setText('');
    }


    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth"});
        }, 0);
    }, [messages]);

    return (
        <main className="container mx-auto my-auto px-4 mb-12 bg-white">
    <h1 className="text-3xl font-bold mb-4 text-center text-cyan-800"> Chat App</h1>
    <p className="text-center text-white-700 mb-4">You are chatting as <strong className="text-cyan-800">{user}</strong></p>
    <ul className="space-y-4">
        {messages?.map((message) => (
            <li key={message._id} className={`flex ${message.user === user ? "flex-row-reverse" : ""}`}>
                <div className={`bg-sky-500 rounded-lg p-4 text-black ${message.user !== user ? "bg-red-300 text-gray-900" : ""}`}>
                    <div className="font-semibold">{message.user}</div>                        
                    <div className="text-sm">{message.body}</div>
                    <div className="text-xs text-gray-600">{new Date(message._creationTime).toLocaleTimeString()}</div>
                </div>
            </li>
        ))}
    </ul>
    <form className="py-12 flex items-center" onSubmit={handleSendMessage}>
        <input
            className="border border-gray-500 rounded-md px-4 py-2 mr-2 w-3/4 focus:outline-none focus:ring focus:border-blue-500"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Write a message…"
        />
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer disabled:opacity-50 focus:outline-none focus:ring focus:border-blue-500"
            disabled={!text}
        >
            Send
        </button>
    </form>
</main>
    );
};

export default ChatApp;
