import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
export async function setUserFromSession() {
    const session = await getServerSession(authOptions)
    localStorage.setItem('id',session.user.id)
}