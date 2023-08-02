'use client'

import { useSession } from 'next-auth/react'
import { SessionProvider } from "next-auth/react";
export const User = () => {
  const { data: session } = useSession()
  console.log('Client Session', session)
  return <SessionProvider>{JSON.stringify(session)}</SessionProvider>
}