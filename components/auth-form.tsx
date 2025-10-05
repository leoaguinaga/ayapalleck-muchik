"use client"

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-hot-toast";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await authClient.signIn.email({ email, password });
            console.log(res);
            if (res.data?.user) {
                toast.success("Successfully signed in!");
            } else {
                toast.error("Failed to sign in. Please check your credentials.");
            }
            
        } catch (error) {
            toast.error("Failed to sign in. Please check your credentials.", error as any);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-bold">Sign In</h2>
            <div className="flex flex-col gap-2">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {isLoading ? "Signing In..." : "Sign In"}
            </button>
        </form >
    )
}

export function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await authClient.signUp.email({ email, password, name });
            toast.success("Check your email for the login link!");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-bold">Sign In</h2>
            <div className="flex flex-col gap-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {isLoading ? "Signing In..." : "Sign In"}
            </button>
        </form >
    )
}