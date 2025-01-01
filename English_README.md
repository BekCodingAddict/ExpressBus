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

  
### As a Developer Personal Thoughts:
As a developer, I enjoy implementing features that provide a seamless experience for users. For this project, I focused on creating a simple yet powerful application. From setting up state management with Redux to handling payments with Stripe, I strived to ensure that every part of the app functions efficiently and effectively.

The use of Ant Design allows for rapid UI development, while tools like Axios and React Router ensure smooth communication and navigation within the app. I also wanted to make sure that the app is easy to test and maintain, so I’ve included a solid testing setup with Jest and React Testing Library.

I believe that integrating Stripe for easy payments, allowing priority orders, and making the app accessible with clear navigation are some of the key things that can help users get the best out of this application.
