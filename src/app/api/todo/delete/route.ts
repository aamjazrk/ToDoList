import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(req: NextRequest) {

    const { todoId} = await req.json()
    if (req.method == 'DELETE') {
        try { 
        // Process a POST request
        const exist_todos = await prisma.listToDo.delete({
            where:{
                Id: todoId
            }
        })
        if(!exist_todos){
            return NextResponse.json({error:'todolist not found', success: false, message:exist_todos},{status:403})
        }
        const delete_todos = await prisma.listToDo.delete({
            where:{
                Id :todoId
            }
          })
          if( !delete_todos){
            return NextResponse.json({error:'cannot delete todolist', success: false, message:delete_todos},{status:403})
          }
          const projects =JSON.stringify(delete_todos)
          return NextResponse.json({
            message: "delete todo successfully",
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