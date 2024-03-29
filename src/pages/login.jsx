import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { NavBar } from "@/components/NavBar";

export default function Login() {
    const router = useRouter()

    function handleLoginClick() {
        router.push('/login-success', { scroll: false })

    }

    return (
        <div>
            <NavBar />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2>Login page </h2>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button onClick={handleLoginClick}> Login</button>

            </div>
            <span>Click the login button to go to login success page </span>
        </div>
    )
}