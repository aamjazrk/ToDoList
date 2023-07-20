## Getting Started

This repo is about create To-Do List web app that using Next.JS, Docker, Postgresql, Prisma, Cypress.

## Database Design 
![Alt text](image.png)
(https://prismaliser.app/)

Users have two roles which are NORMAL and PREMIUM. Normal users can only crate project and to-do list. On the other hand, premium users have some privilage to manage their own notebook for writing diary or something that they need.


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TECT STACK
- docker
- next js
- postgresql
- prisma
- cypress

## Run Command
### Run docker
docker compose up
docker compose down
#### Run prisma
npx prisma studio
#### build prisma sql
npm prisma migrate dev




