import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {

    const { userId,title,status} = await req.json()
    if (req.method == 'POST') {
        try { 
        // Process a POST request
        const create_todos = await prisma.listToDo.create({
            data:{
                ProjectId:userId,
                Text:title,
                Status:status
            }
          })
          if( !create_todos){
            return NextResponse.json({message: create_todos, success: false, error:'cannot create project'},{status:403})
          }
          const todos =JSON.stringify(create_todos)
          return NextResponse.json({
            message: "create todo successfully",
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
