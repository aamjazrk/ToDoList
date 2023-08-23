import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
type Props = {
    params: {
        id: string
    }
}
export async function DELETE(req: Request , { params: { id } }: Props) {

    if (req.method === 'DELETE') {
        try {
            const existingProject = await prisma.project.findFirst({
                where: {
                    Id: id,
                },
            });

            if (!existingProject) {
                return NextResponse.json({ error: 'Project not found' }, { status: 400 });
            }

            await prisma.project.delete({
                where: {
                    Id: id,
                },
            });

            return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
        } catch (err) {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    }
}
