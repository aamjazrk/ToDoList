import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

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

    // Insert new user records
    await prisma.user.createMany({
      data: users,
    });
    console.log('Added user data');

    // Find Id of user that created
    const Id1 = await prisma.user.findFirst({
      where: {
        Email: users[0].Email
      }
    })
    const Id2 = await prisma.user.findFirst({
      where: {
        Email: users[1].Email
      }
    })

    // Insert new project data
    const projects1 = [
      {
        Title: 'Household1',
        Description: 'clean before traveling',
        UserId: Id1.Id
      },
      {
        Title: 'Homework1',
        Description: 'finish before traveling',
        UserId: Id1.Id
      },
    ];
    

    await prisma.project.createMany({
      data: projects1,
    });
    console.log('Added project data');
    const projects2 = [
      {
        Title: 'Household',
        Description: 'clean before traveling',
        UserId: Id2.Id
      },
      {
        Title: 'Homework',
        Description: 'finish before traveling',
        UserId: Id2.Id
      },
    ];

    await prisma.project.createMany({
      data: projects2,
    });
    console.log('Added project data');

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

// Call the load function to perform seeding
load();
