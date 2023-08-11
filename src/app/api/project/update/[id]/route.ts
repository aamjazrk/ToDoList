import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
type Props = {
    params: {
        id: string
    }
}
export async function PUT(req: Request, { params: { id } }: Props) {
    const { userId, title, description, status } = await req.json()
    if (req.method === 'PUT') {
        try {
            const existingProject = await prisma.project.findFirst({
                where: {
                    Id: id,
                },
            });

            if (!existingProject) {
                return NextResponse.json({ error: 'Project not found' }, { status: 400 });
            }

        
            if (userId) {
                existingProject.UserId = userId
            }
            if (title) {
                existingProject.Title = title
            }
            if (description) {
                existingProject.Description = description
            }
            if (status) {
                existingProject.Status = status
            }

            await prisma.project.update({
                where: {
                    Id: id
                },
                data: {
                    UserId: existingProject.UserId,
                    Title: existingProject.Title,
                    Description: existingProject.Description,
                    Status: existingProject.Status
                }

            });

            return NextResponse.json({ message: 'Project update successfully' }, { status: 200 });
        } catch (err) {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    }
}
