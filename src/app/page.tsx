
// import { Button } from '@/components/ui/button'
// import { toast } from "react-hot-toast";
// import axios from "axios";
// import Link from "next/link";
// import LogoutButton from './auth'
// export default async function Home() {
//   return (
//     <main>
//       <Link href="/login">
//           <Button>Sign in</Button>
//       </Link>
//       <LogoutButton/>
//       <h2>Server Session</h2>
//       <h2>Client Call</h2>
//     </main>
//   )
// }
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LoginPage from './(auth)/login/page'
export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <LoginPage/>
      {/* <LoginButton />
      <LogoutButton />
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client Call</h2> */}
      
      {/* <User /> */}
    </main>
  )
}