import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
type Props = {
  params: {
      id: string
  }
}
export async function GET(req: NextRequest, { params: { id } }: Props) {

    if (req.method == 'GET') {
        try { 
        // Process a GET request
        const exist_todos = await prisma.listToDo.findMany({
            where:{
              ProjectId: id
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
