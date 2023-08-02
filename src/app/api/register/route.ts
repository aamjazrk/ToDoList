import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password,name } = await req.json()

    const exist_user = await prisma.user.findFirst({
      where:{
        Email: email
      }
    })
    if( exist_user){
      return NextResponse.json({error: "This Email already used"},{status:400})
    }
    const hashed = await hash(password, 12)
    const user = await prisma.user.create({
      data: {
        Email: email,
        Password: hashed,
        Name: name
      }
    })

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: {
        email: user.Email
      }
    })
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: err.message
      }),
      {
        status: 500
      }
    )
  }
}
