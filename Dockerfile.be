# Use the official Node.js image as the base image
FROM node:16-alpine

# Create a directory for the Prisma server
WORKDIR /app

# Copy the rest of the Prisma server code
COPY . .

RUN npm install

# Generate Prisma client
RUN npx prisma generate


# Expose the port on which the Prisma server runs
EXPOSE 5555

# Start the Prisma server
CMD npx prisma studio
