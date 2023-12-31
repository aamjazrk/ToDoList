'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { toast,Toaster } from "react-hot-toast";
export const RegisterForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl' || '/dashboard')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState<string | null>(null)
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.ok) {
                toast.success("Register successful");
                signIn()
            } else {
                toast.error("This email is already used");
                setError((await res.json()).error)
            }
        } catch (error) {
            setError(error?.message)
        }
    }

    return (
        <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
            <div><Toaster/></div>
            <div className="grid items-center gap-1.5">
                <div className="mb-2 block ">
                    <Label htmlFor="name">Name</Label>
                </div>
                <TextInput
                    id="name"
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                    required
                    type="name"
                    value={name}
                />
        
            </div>
            <div>
                <div className="mb-2 block items-center">
                    <Label htmlFor="Email">Email</Label>
                </div>
                <TextInput
                    id="Email"
                    placeholder="name@mfec.co.th"
                    required
                    type="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}

                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Password">Password</Label>
                </div>
                <TextInput
                    id="Password"
                    required
                    type="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className="w-full">
                <Button id='submit-btn' type="submit" className="w-full" size="lg">
                    Submit
                </Button>
            </div>

        </form>
    )
}