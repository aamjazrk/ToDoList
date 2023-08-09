import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {

    const { projectId } = await req.json()
    if (req.method == 'POST') {
        try { 
        // Process a GET request
        const exist_todos = await prisma.listToDo.findMany({
            where:{
              ProjectId: projectId
            }
          })
          if( !exist_todos){
            return NextResponse.json({project: exist_todos, success: true, message:'don\'t have any todo'},{status:200})
          }
          const todos =JSON.stringify(exist_todos)
          return NextResponse.json({
            message: "Find todo successfully",
            success: true,
            project: todos
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
