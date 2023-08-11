import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {

    const { UserId,Title,Description,Status} = await req.json()
    if (req.method == 'POST') {
        try { 
        // Process a POST request
        const create_projects = await prisma.project.create({
            data:{
                UserId:UserId,
                Title:Title,
                Description:Description,
                Status:Status
            }
          })
          if( !create_projects){
            return NextResponse.json({project: create_projects, success: false, error:'cannot create project'},{status:400})
          }
          const projects =JSON.stringify(create_projects)
          return NextResponse.json({
            message: "create projecy successfully",
            success: true,
            project: projects
          },{
              status:200
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
    

    
 
}
