const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const users = [
    {
        Email: 'sirinya@gmail.com',
        Name: 'Sirinya Kotpanya',
        Password: 'zaq1@wsX',
        Roles: 'Normal'
    },
    {
        Email: 'atta@gmail.com',
        Name: 'Attapon Kotpanya',
        Password: 'zaq1@wsX',
        Roles: 'Premium'
    }
];

const load = async () => {
    try {
        await prisma.project.deleteMany();
        console.log('Deleted records in project table');

        await prisma.user.deleteMany();
        console.log('Deleted records in user table');

        await prisma.listToDo.deleteMany();
        console.log('Deleted records in listtodo do table')

        await prisma.noteBook.deleteMany();
        console.log('Deleted records in noteBook table')

        await prisma.user.createMany({
            data: users,
        });
        console.log('Added user data');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();