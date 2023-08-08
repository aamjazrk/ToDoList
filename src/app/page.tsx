
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LoginPage from './(auth)/login/page'
export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <LoginPage/>
    </main>
  )
}