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
        <main className="container mx-auto px-4 py-12 bg-white">
    <h1 className="text-3xl font-bold mb-4 text-center text-sky-300"> Chat App</h1>
    <p className="text-center text-white-700 mb-4">You are chatting as <strong className="text-sky-300">{user}</strong></p>
    <ul className="space-y-4">
        {messages?.map((message) => (
            <li key={message._id} className={`flex items-center space-x-2 ${message.user === user ? "flex-row-reverse space-x-reverse bg-sky-500 rounded-lg p-4" : "bg-gray-300 rounded-lg p-4"}`}>
                <div className="font-semibold text-gray-800">{message.user}</div>                        
                <div className="text-gray-900">{message.body}</div>
                <div className="text-sm text-gray-600">{new Date(message._creationTime).toLocaleTimeString()}</div>
            </li>
        ))}
    </ul>
    <form className="mt-8 flex items-center" onSubmit={handleSendMessage}>
        <input
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-3/4 focus:outline-none focus:ring focus:border-blue-500"
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
