# 📘 Shopper API - User Service Specifications

The User Service handles authentication, registration, and account management operations for the Shopper system.

---

##  🟢 Base URL
http://localhost/user-service


> Replace `localhost` with your Nginx or deployment hostname if needed.
---

## 🔁 Endpoints

### 1. `GET /health`

**Description**: Health check for the User service.

**Response**:

```json
{
  "status": "User service is running ✅"
}
```

### 2. POST /register
**Description**: Registers a new user and triggers a welcome notification via gRPC.

**Request Body**:
```json
{
  "email": "jane.doe@example.com",
  "password": "securePass123",
  "firstName": "Jane",
  "lastName": "Doe"
}
```
**Response:**
```json
{
  "message": "User registered successfully",
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "64f05db2a4fd39a6c3d0c55d",
    "email": "jane.doe@example.com",
    "firstName": "Jane",
    "lastName": "Doe"
  }
}
```

### 3. POST /login
**Description**: Logs in a user and returns a JWT token.
**Request Body**:
```json
{
  "email": "jane.doe@example.com",
  "password": "securePass123"
}
```

**Response**
```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "64f05db2a4fd39a6c3d0c66d",
    "email": "jane.doe@example.com",
    "firstName": "Jane",
    "lastName": "Doe"
  }
}
```

### 4. POST /change-password
🛡️ Protected Route – Requires JWT authentication via Authorization: Bearer <token>

**Description**: Allows a logged-in user to update their password.

**Request Body**:
```json
{
  "currentPassword": "oldPass123",
  "newPassword": "newSecurePass456"
}
```

**Response**:
```json
{
  "message": "Password updated successfully"
}
```