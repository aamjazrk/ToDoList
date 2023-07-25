import { prisma } from "../../lib/prisma"

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      Email: 'sirinya@gmail.com'
    }
  })

  return (
    <main>
      <div>Hello, {user?.Name}</div>
    </main>
  )
}
