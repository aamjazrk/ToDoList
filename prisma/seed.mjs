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
    await prisma.listToDo.deleteMany();
    console.log('Deleted records in listtodo do table');
    await prisma.project.deleteMany();
    console.log('Deleted records in project table');
    await prisma.noteBook.deleteMany();
    console.log('Deleted records in noteBook table');
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
        Title: 'Household',
        Description: 'clean before traveling',
        UserId: Id1.Id
      },
      {
        Title: 'Homework',
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

    // find project id that created
    const pro1 = await prisma.project.findFirst({
      where: {
        Title: 'Homework',
        UserId: Id1.Id
      }
    })
    const pro2 = await prisma.project.findFirst({
      where: {
        Title: 'Household',
        UserId: Id1.Id
      }
    })
    const pro3 = await prisma.project.findFirst({
      where: {
        Title: 'Homework',
        UserId: Id2.Id
      }
    })
    const pro4 = await prisma.project.findFirst({
      where: {
        Title: 'Household'
        ,
        UserId: Id2.Id
      }
    })

    // insert new list data
    const lists1 = [
      {
        Text: 'chemical homework',
        ProjectId: pro1.Id,
        Index: 1
      },
      {
        Text: 'math homework',
        ProjectId: pro1.Id,
        Index: 2
      },
      {
        Text: 'pre co-op homework',
        ProjectId: pro1.Id,
        Index: 3
      },
    ]

    const lists2 = [
      {
        Text: 'chemical homework',
        ProjectId: pro3.Id,
        Index: 2
      },
      {
        Text: 'math homework',
        ProjectId: pro3.Id,
        Index: 1
      },
      {
        Text: 'pre co-op homework',
        ProjectId: pro3.Id,
        Index: 3
      },
    ]
    const lists3 = [
      {
        Text: 'cleaning room',
        ProjectId: pro2.Id,
        Index: 2
      },
      {
        Text: 'cleaning bathroom',
        ProjectId: pro2.Id,
        Index: 1
      },
      {
        Text: 'clear all food',
        ProjectId: pro2.Id,
        Index: 3
      },
    ]
    const lists4 = [
      {
        Text: 'cleaning room',
        ProjectId: pro4.Id,
        Index: 1
      },
      {
        Text: 'cleaning bathroom',
        ProjectId: pro4.Id,
        Index: 3
      },
      {
        Text: 'clear all food',
        ProjectId: pro4.Id,
        Index: 2
      },
    ]
    await prisma.listToDo.createMany(
      {
        data: lists1
      }
    )
    console.log('Added to-do list data');
    await prisma.listToDo.createMany(
      {
        data: lists2
      }
    )
    console.log('Added to-do list data');
    await prisma.listToDo.createMany(
      {
        data: lists3
      }
    )
    console.log('Added to-do list data');
    await prisma.listToDo.createMany(
      {
        data: lists4
      }
    )
    console.log('Added to-do list data');

    // insert new notebook data
    const notebook1 = [
      {
        Title: 'Chiang Mai',
        Text: 'Chiang Mai is one of the most popular destinations in Thailand, perhaps second only to Bangkok in its appeal. It’s a cool mountain town known for its hill tribes, lush rainforests, elephant sanctuaries, and interesting cuisine.\nIf you enjoy going to Buddhist temples, then there are over 300 for you to visit in Chiang Mai. Night markets are aplenty as are digital nomads who\’ve chosen to make this northern Thai city their home.\nMany digital nomads travel to Chiang Mai hoping to stay for just a few weeks, then wind up staying a few months instead.\nIt\’s such a liveable city that offers a near perfect blend of pace, affordability, comfort, culture, nature, and nightlife.\nSpend a few days in Chiang Mai, and you\’ll see exactly what I mean.',
        UserId: Id1.Id

      },
      {
        Title: 'Phuket',
        Text: 'Now that we\'re living in a post-Covid world, let\'s look at the Top 10 Phuket Hotels for 2023. \nIt\'s time to visit Phuket again! This "best hotels" list on my blog is subjective, there is so much choice for accommodation in Phuket and your personal choice may depend on many factors - search hotels easily on Agoda to find the best Phuket hotel for you.\n Take your time when looking for hotels - check the location on a map, read hotel reviews,\n ask yourself if you want somewhere quiet/remote or close to lots of restaurants and bars. Your perfect hotel is there, but please do some research. And when you book your trip to Phuket - do re-visit my Phuket Blog for lots of tips!',
        UserId: Id2.Id
      }
    ]

    await prisma.noteBook.createMany(
      {
        data: notebook1
      }
    )


  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

// Call the load function to perform seeding
load();
