import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
type Props = {
  params: {
      id: string
  }
}
export async function GET(req: Request, { params: { id } }: Props) {
  try { 
    if (req.method == 'GET') {
      const origin = req.headers.get('origin')
        // Process a POST request
        const exist_projects = await prisma.project.findMany({
            where:{
              UserId: id
            }
          })
          if( !exist_projects){
            return NextResponse.json({project: exist_projects, success: true, message:'don\'t have any project'},{status:200})
          }
          return NextResponse.json({
            message: "Find projecy successfully",
            success: true,
            project: JSON.stringify(exist_projects)
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
