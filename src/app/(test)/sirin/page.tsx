// import { prisma } from "@/lib/prisma" 
// import { Navbar } from "flowbite-react"
// import { getServerSession } from 'next-auth'
// import { authOptions } from "@/app/api/auth/[...nextauth]/route" 
// import { LoginButton, LogoutButton } from '@/app/auth'
// import { User } from '@/app/user'
// import { useState } from "react"

// export default async function Sirin() {
//   const [users, setUsers] =  useState(User)
//   const user = await prisma.user.findFirst({
//     where: {
//       Email: 'sirinya@gmail.com'
//     }
  
//   })

//   const getUserByEmail = async() => {
//     let res = await 
//   }

//   return (
//     <main>
//       <Navbar></Navbar>
//       <div>Hello, {user?.Name}</div>
//       <h1>Todos</h1>
//       <User />
//     </main>
//   )
// }

import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>Hiya</div>
  )
}