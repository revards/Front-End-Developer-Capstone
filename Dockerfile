# Stage 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN npm run build

# Stage 2: Serve the build with a lightweight web server
FROM node:20-alpine AS production
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

# --- Development stage for hot reload (default for docker-compose) ---
FROM node:20-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install # Install ALL dependencies, including devDependencies (like vite)
COPY . .
EXPOSE 3000
ENV CHOKIDAR_USEPOLLING=true
CMD ["npm", "run", "dev"] 