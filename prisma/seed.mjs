import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

const load = async () => {
  try {
    const hashedPassword = await hash('zaq1@wsX', 12);

    const users = [
      {
        Email: 'sirinya@gmail.com',
        Name: 'Sirinya Kotpanya',
        Password: hashedPassword,
        Roles: 'Normal',
      },
      {
        Email: 'atta@gmail.com',
        Name: 'Attapon Kotpanya',
        Password: hashedPassword,
        Roles: 'Premium',
      },
    ];

    // Delete existing records in tables
    await prisma.project.deleteMany();
    console.log('Deleted records in project table');

    await prisma.user.deleteMany();
    console.log('Deleted records in user table');

    await prisma.listToDo.deleteMany();
    console.log('Deleted records in listtodo do table');

    await prisma.noteBook.deleteMany();
    console.log('Deleted records in noteBook table');

    // Insert new user records
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

// Call the load function to perform seeding
load();
