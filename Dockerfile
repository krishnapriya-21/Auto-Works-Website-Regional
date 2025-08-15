# Use a lightweight Nginx image
FROM nginx:alpine

#Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy static site files to the Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx Server
CMD ["nginx","-g","daemon off;"]