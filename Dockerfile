# Stage 1: Build Vue.js app
FROM node:16.16.0 as builder

WORKDIR /app

# Install specific version of npm
RUN npm install -g npm@8.11.0

# Install specific version of Vue CLI
RUN npm install -g @vue/cli@5.0.8

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm i

# Install dependencies
RUN npm ci --quiet

# Copy the entire project
COPY . .

# Build the Vue.js app
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:1.21-alpine

# Copy the built app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the container's port
EXPOSE 8082

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
