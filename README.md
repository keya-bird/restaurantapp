# Full Stack Restaurant Food Odering App 

This is a full-stack web application built for users to browse menus, order food, and manage their restaurant experience. It was created as part of the MIT MERN Full Stack professional coding certification for women.

## Key Features:

User Accounts: Users can register, log in, and log out securely with JWT authentication.
Restaurant Menus: Browse menus with detailed descriptions, names, and prices for each dish.
Cart Management: Add, adjust quantities, and remove items from your cart before placing an order.
Order Processing: Place orders and receive confirmation with details.
Admin Functionality: Manage menus (add, update, delete items) and view order history (for designated users).

## Tech Stack:
Frontend: Next.js
Authentication: JWT (JSON Web Tokens)
Database: PostgreSQL
API: Strapi (Headless CMS)
Deployment: Vercel (Frontend), Render (Backend)
Getting Started (Local Development)

This project has separate codebases for the frontend and backend.

## Prerequisites:
Node.js (version 9 or later)
PostgreSQL database
Strapi CMS (installed and configured)
Installation:

## Clone the repository.

### Install dependencies:
Run npm install in both the frontend and backend directories.

### Configure environment variables:
Create a .env.local file in the frontend directory with:
NEXT_PUBLIC_API_URL=http://localhost:1337  # Replace with your Strapi API URL if different
Create a .env file in the backend directory with:
DATABASE_URL=your_postgres_connection_string  # Replace with your connection string
JWT_SECRET=your_jwt_secret  # Generate a strong secret string

### Start development servers:
In the frontend directory, run npm run dev.
In the backend directory, run npm run develop.

### Access the application:
Frontend: http://localhost:3000
Strapi admin panel: http://localhost:1337


## Deployment
This application can be deployed using Vercel (frontend) and Render (backend).

### Important Note: These are general deployment instructions. Each platform has its own configuration steps. Be sure to consult the specific documentation for Vercel and Render for detailed deployment instructions.

## API Documentation
https://documenter.getpostman.com/view/33466891/2sA3XQfLwr

## License
Copyright 2024 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
