# Visa Navigator

**Visa Navigator** is a web application that helps users to view, apply, and add visa information. It allows CRUD operations for visas, user registration, login/logout, and management of visa applications.

## Features

- **User Authentication**: Register and log in to the application.
- **Visa CRUD Operations**: Create, Read, Update, and Delete visa data.
- **Visa Applications**: Users can apply for visas and view their applications.
- **Profile Management**: Users can view and manage their visa application status.

## Technologies Used

- **Frontend**:
  - React.js
  - TailwindCSS (for styling)
  - React Router (for routing)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for storing visa and user data)
  - Vercel (for deployment)
  
- **Authentication**:
  - Firebase Authentication (for user login and registration)

## API Endpoints

### 1. **Visa CRUD Operations**

#### Create a Visa

- **Endpoint**: `POST /visa`
- **Description**: Add a new visa entry to the database.
- **Request Body**: 
  ```json
  {
    "visaType": "Student",
    "country": "USA",
    "requirements": "Passport, IELTS Score"
  }
