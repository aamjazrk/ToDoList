import background from '@/public/image/background.jpg'
import Image from 'next/image';
import { User } from '@/app/user';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <Image
                    src={background}
                    alt="background image"
                    fill
                />
            </div>
        </div>
    )
}