# Authentication System

A robust Node.js authentication system featuring JWT-based access tokens and secure session management using refresh tokens.

## 🚀 Features

- **User Registration**: Secure sign-up with password hashing (SHA-256).
- **Secure Login**: Authentication with session persistence.
- **JWT Authentication**: Short-lived access tokens (1m) and long-lived refresh tokens (7d).
- **Session Management**: Server-side session tracking and revocation.
- **Cookie Security**: Refresh tokens stored in `httpOnly` secure cookies.
- **Logout**: Complete session termination and token revocation.
- **Profile Management**: Retrieve authenticated user details.

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Security**: JSON Web Tokens (JWT), Crypto, Cookie-parser
- **Logging**: Morgan
- **Development**: Nodemon, Dotenv

## 📁 Project Structure

```text
├── config/             # Configuration files (.env)
├── controller/         # Request handlers (User Logic)
├── database/           # Database connection logic
├── models/             # Mongoose schemas (User, Session)
├── routes/             # API route definitions
├── src/                # App initialization
└── server.js           # Entry point
```

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/users/register` | Register a new user | No |
| `POST` | `/users/login` | Login and receive tokens | No |
| `GET` | `/users/get-me` | Get current user's profile | Yes (Access Token) |
| `GET` | `/users/refresh-token` | Generate new access token | Yes (Refresh Cookie) |
| `GET` | `/users/logout` | Revoke session and logout | Yes (Refresh Cookie) |

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Authentication
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `config/config.env` file with the following:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application**:
   - Development: `npm run dev`
   - Production: `npm start`

## 🔒 Security Notes

- Passwords are hashed using SHA-256 before storage.
- Refresh tokens are hashed in the database for added security.
- Sessions can be revoked manually via the logout endpoint.
- Access tokens have a very short lifespan (60 seconds) to minimize risk if compromised.
s
