'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast,Toaster } from "react-hot-toast";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Toast } from 'flowbite-react'
export const Form = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const callbackUrl = '/dashboard'
  const [loading, setLoading] = React.useState(false);

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
  return (
    
    <form onSubmit={onLogin} className="space-y-12 w-full sm:w-[400px]">
      <div><Toaster/></div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
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