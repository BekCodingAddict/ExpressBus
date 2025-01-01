# Express Bus - Online Bus Ticket Booking App

>[!TIP]
>A bus ticket booking app is an automated system that enables passengers to purchase bus tickets online. The system also allows them to schedule their route, check seat availability, and even make online payments through secure payment gateways. In case the passengers face any problem, they can straightaway get it addressed within the app itself.
Bus ticketing apps have made bus journeys super comfortable and convenient. These apps maintain all user details, bus details, reservation details, etc. While booking through these apps, the passengers can easily check the type of bus, its ratings, departure time, bus amenities offered, and much more.

## Key Features
### 🚶‍♂️ User Registration & Login
- Users can create an account and log in using email and password. JWT (JSON Web Token) is used for authentication to enhance security.
### 🚌 Bus Search & Booking
- Users can search for buses by selecting departure, destination, and date. They can view available buses, select one, and make a reservation. Booking details can be viewed.
### 📅 Booking Management
- Users can view, cancel, or modify their reservations. Booking statuses can be updated to "Confirmed", "Cancelled", etc.
### 💳 Payment System
- Stripe.js is integrated for online payments, allowing users to complete payment while booking a bus. Payment details are securely processed, and bookings are confirmed after payment.
### 👨‍💻 Admin Dashboard
- Admins can manage bus routes, schedules, and seat availability. They can also view booking details and handle customer requests.
### 🔑 Admin & User Roles
- Different roles (admin and user) are assigned with specific permissions for managing the system.

## Front-End Technical Implementation:
### 🛠 State Management with Redux Toolkit
- Implemented state management using Redux Toolkit to manage the global state of the application, ensuring a scalable and maintainable architecture for complex state logic.
### 🔄 Routing with React Router
- Utilized React Router for handling navigation and routing in a single-page application (SPA), allowing seamless navigation between different views with URL changes.
### 💳 Stripe Payment Integration
- Implemented React Stripe Checkout for secure payment processing, enabling users to make payments through Stripe directly within the app.
### 📦 Component Styling with Ant Design
- Applied Ant Design UI components for a polished, consistent, and responsive design, utilizing pre-built components like buttons, forms, and tables to accelerate development.
### 📡 HTTP Requests with Axios
- Used Axios for making HTTP requests to external APIs, handling asynchronous data fetching and providing smooth user interactions.
### 📅 Date Handling with Moment.js
- Incorporated Moment.js for efficient handling and manipulation of dates, providing functionality for displaying and formatting date-time values in the app.
### 📄 Print Feature with React-to-Print
- Enabled React-to-Print functionality, allowing users to print specific sections of the app directly from the UI with custom print formatting.
### 🔔 Toast Notifications with React Hot Toast
- Added React Hot Toast for displaying toast notifications in the app, alerting users to important events like form submissions, errors, and success messages.
### 📦 Legacy Redux Integration
- Integrated Redux alongside Redux Toolkit for backward compatibility, maintaining support for legacy state management and handling complex actions efficiently.
### 📊 Web Vitals Monitoring
- Included Web Vitals for performance monitoring, tracking important metrics to ensure the app delivers a fast and smooth experience for users.


## Back-End Technical Implementation:
### 🌐 Server Setup with Express.js
- Built the server using Express.js, enabling efficient handling of HTTP requests and defining API endpoints for the application.
### 🔐 Authentication and Authorization
- Implemented authentication using JSON Web Tokens (JWT) to securely manage user sessions and protect routes requiring authentication.
- Used bcrypt.js to hash and securely store passwords, enhancing user account security.
### 🛢 Database Management with Mongoose
- Utilized Mongoose for defining schemas and interacting with a MongoDB database, ensuring robust and flexible data management.
### 💳 Payment Processing with Stripe
- Integrated Stripe using the stripe and @stripe/stripe-js packages for handling secure payment processing and managing transactions.
📧 Email Notifications with Nodemailer
- Configured Nodemailer to send transactional emails such as account verifications, password resets, and payment confirmations to users.
###⚙️ Environment Configuration
- Managed sensitive configuration values like API keys and database URLs using dotenv, securely loading environment variables into the application.
### 🔄 Development Workflow with Nodemon
- Incorporated Nodemon for automatic server restarts during development, improving efficiency and reducing manual effort.
### 🔑 Unique Identifiers with UUID
- Used uuid for generating unique identifiers, ensuring reliable ID generation for records like user sessions, orders, and database entries.

## Problems & Challanges
| Error & Problem Title | Status | Difficult | Date |
|--|--|--|--|
|[🎨 TailwindCSS Conflicts](https://github.com/BekCodingAddict/FastPizza/blob/master/Problems/TailwindCSS-Conflicts.md) | ![solved](https://img.shields.io/badge/solved-blue) | low | Oct 3, 2024 |

### As a Developer Personal Thoughts:
As a developer, I enjoy implementing features that provide a seamless experience for users. For this project, I focused on creating a simple yet powerful application. From setting up state management with Redux to handling payments with Stripe, I strived to ensure that every part of the app functions efficiently and effectively.

The use of Ant Design allows for rapid UI development, while tools like Axios and React Router ensure smooth communication and navigation within the app. I also wanted to make sure that the app is easy to test and maintain, so I’ve included a solid testing setup with Jest and React Testing Library.

I believe that integrating Stripe for easy payments, allowing priority orders, and making the app accessible with clear navigation are some of the key things that can help users get the best out of this application.
