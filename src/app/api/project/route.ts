import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try { 
    const { userId } = await req.json()
    if (req.method == 'POST') {
        // Process a POST request
        const exist_projects = await prisma.project.findMany({
            where:{
              UserId: userId
            }
          })
          if( !exist_projects){
            return NextResponse.json({project: exist_projects, success: true, message:'don\'t have any project'},{status:200})
          }
          return NextResponse.json({
            message: "Find projecy successfully",
            success: true,
            project: exist_projects
          },{
              status:200
          })
      }
    

    
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
