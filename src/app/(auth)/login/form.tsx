"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast,Toaster } from "react-hot-toast";
import React, { useState, useEffect } from 'react'
import { setUserFromSession } from '@/components/services/setSession'
import { useSession } from 'next-auth/react';
export const Form = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const callbackUrl = '/dashboard'
  const [loading, setLoading] = React.useState(false);
  const { data: session } = useSession();

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('email-login', {
        redirect: false,
        email,
        password,
        // callbackUrl
      })
      console.log('Res', res)
      
      if (!res?.error) {
        toast.success("Login success");
        router.push(callbackUrl)
      } else {
        setError('Invalid email or password')
        toast.error('Invalid email or password')
      }
    } catch (err: any) { }
  }
  useEffect(() => {
    // This code will run when the component mounts
    if (session?.user?.id) {
      localStorage.setItem('id', String(session.user.id));
    }
  }, [onLogin]);
  return (
    
    <form onSubmit={onLogin} className="space-y-12 w-full sm:w-[400px] text-gray-950">
      

      <div><Toaster/></div>
      <div className="grid w-full items-center gap-1.5  text-gray-950">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full text-gray-950"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          style={{ color: 'black' }}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 text-gray-950">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full text-gray-950"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          style={{ color: 'black' }}
        />
      </div>
      {/* {error && <Alert>{error}</Alert>} */}
      <div className="w-full">
        <Button className="w-full" size="lg" >
          Login
        </Button>
        
      </div>
    </form>
  )
}