'use client'

// import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from 'react'
import axios from "axios";
export const Form = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  // const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const callbackUrl = '/dashboard'
  const [loading, setLoading] = React.useState(false);
  // const onLogin = async (e: React.FormEvent) => {
  //   try {
  //     setLoading(true);
  //     const user = {
  //       email,
  //       password
  //     }
  //     const response = await axios.post("/api/login", user);
  //     await console.log("Login success", response);
  //     toast.success("Login success");
  //     // router.push("/sirin");
  //   } catch (error: any) {
  //     console.log("Login failed", error.message);
  //     toast.error(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl
      })
      console.log('Res', res)
      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        setError('Invalid email or password')
      }
    } catch (err: any) { }
  }
  return (
    <form onSubmit={onLogin} className="space-y-12 w-full sm:w-[400px]">
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
        <Button className="w-full" size="lg">
          Login
        </Button>
      </div>
    </form>
  )
}