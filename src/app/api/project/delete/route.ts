import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(req: NextRequest) {

    const { projectId} = await req.json()
    if (req.method == 'DELETE') {
        try { 
        // Process a POST request
        const exist_projects = await prisma.project.findFirst({
            where:{
                Id: projectId
            }
        })
        if(!exist_projects){
            return NextResponse.json({error:'project not found', success: false, message:exist_projects},{status:403})
        }
        const delete_projects = await prisma.project.delete({
            where:{
                Id : projectId
            }
          })
          if( !delete_projects){
            return NextResponse.json({error:'cannot delete project', success: false, message:delete_projects},{status:403})
          }
          const projects =JSON.stringify(delete_projects)
          return NextResponse.json({
            message: "delete projecy successfully",
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
