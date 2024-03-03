"use client"
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


export default function App() {
    const [text, setText] = useState("");
    const tasks = useQuery(api.tasks.get)
    

}