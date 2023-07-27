FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

COPY *.js ./

COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

COPY migrate-and-start.sh .
RUN chmod +x migrate-and-start.sh

# Generate the Prisma client
RUN npx prisma generate

# Push database schema changes
RUN npx prisma db push 

# Seed the database (if needed)
RUN npx prisma db seed 

ENTRYPOINT npm run build

EXPOSE 3000

CMD npm run dev

