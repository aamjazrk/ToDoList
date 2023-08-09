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
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h2>Server Session</h2>
                <pre>{JSON.stringify(session)}</pre>
                <h1 className='text-2xl font-bold text-black-200'>Next JS 13 Background Image with Tailwind CSS </h1>
                <p className='mt-4 text-sm text-black'>lorem ipsom Next JS 13 Background Image with Tailwind CSS</p>
                <div> Hi <User /> </div>
            </div>
        </div>
    )
}