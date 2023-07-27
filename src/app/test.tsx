// import { prisma } from "../../lib/prisma"
// import { Navbar } from "flowbite-react"
// import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route'
// import { LoginButton, LogoutButton } from './auth'
// import { User } from './user'
// export default async function Home() {
//   const user = await prisma.user.findFirst({
//     where: {
//       Email: 'sirinya@gmail.com'
//     }
//   })

//   return (
//     <main>
//       <Navbar></Navbar>
//       <div>Hello, {user?.Name}</div>
//       <LoginButton />
//       <LogoutButton />
//       <h2>Server Session</h2>
//       <pre>{JSON.stringify(session)}</pre>
//       <h2>Client Call</h2>
//       <User />
//     </main>
//   )
// }
