"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";


export default function App() {
    const messages = useQuery(api.messages.list);

}

