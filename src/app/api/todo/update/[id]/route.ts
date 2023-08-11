import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
type Props = {
    params: {
        id: string
    }
}
export async function PUT(req: Request, { params: { id } }: Props) {
    const { text, status, color, index } = await req.json()
    if (req.method === 'PUT') {
        try {
            const existingTodo = await prisma.listToDo.findFirst({
                where: {
                    Id: id,
                },
            });

            if (!existingTodo) {
                return NextResponse.json({ error: 'todolist not found' }, { status: 400 });
            }

        
            if (text) {
                existingTodo.Text = text
            }
            if (status) {
                existingTodo.Status = status
            }
            if (color) {
                existingTodo.Color = color
            }
            if (index) {
                existingTodo.Index = index
            }

            await prisma.listToDo.update({
                where: {
                    Id: id
                },
                data: {
                    Text: existingTodo.Text,
                    Color: existingTodo.Color,
                    Index: existingTodo.Index,
                    Status: existingTodo.Status
                }

            });

            return NextResponse.json({ message: 'Todolist update successfully' }, { status: 200 });
        } catch (err) {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    }
}
