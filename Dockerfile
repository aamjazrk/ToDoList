# Use the official Node.js image as the base image
FROM node:16-alpine

# Create a directory for the app
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies


# Copy the rest of the application code
COPY . .

# RUN rm -r /app/node_modules

RUN npm install
RUN npm rebuild bcrypt 
# # Build the Next.js application
# RUN npm run build

# Expose the port on which the Next.js app runs
EXPOSE 3000

# Start the app
CMD npm run dev
