FROM node:20-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy only package files first (improves build caching)
COPY package*.json ./

# 4. Install only production dependencies
RUN npm install --only=production

# 5. Copy the rest of your backend code (like app.js)
COPY . .


EXPOSE 3000

# 7. Start the application using the 'start' script in package.json
CMD [ "npm", "start" ]