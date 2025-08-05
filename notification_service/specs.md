# 📢 Shopper Notification Service

The **Notification Service** is a core microservice in the **Shopper** ecosystem, responsible for managing user notifications via **REST API**, **WebSockets**, and **gRPC**. It supports real-time delivery of updates like order confirmations, revision statuses, and service-related alerts.

---

## 📦 Features

- ✅ Health check endpoint
- 🔔 REST API for fetching notifications
- 📡 Real-time notifications via WebSockets
- 📞 gRPC methods for inter-service communication
- 👤 Authenticated socket connections
- 🔃 Notification sync on user registration
- 🔢 Unread notifications count broadcasting

---

## 🌐 Base URL
http://localhost/notification-service

> Replace `localhost` with your Nginx or deployment hostname if needed.

---

## 📄 REST Endpoints

### `GET /health`

Check if the service is up.

**Response:**
```json
{ "status": "Notification Service is running ✅" }
```

---

### `GET /notifications`
**Description**: Fetch all notifications for the authenticated user.

**Headers**:

**Authorization**: `Bearer <token>`

**Response**:
```json
{
  "status": "SUCCESS",
  "message": "Notifications fetched successfully",
  "data": [ /* array of notifications */ ]
}
```

---

### 🔌 WebSocket Events
#### 📥 Connection

Authenticated users connect to receive real-time notifications. On connection:
- User is registered with their socket ID.
- Server emits latest notifications.


### 🔔 Events Emitted
**notifications**: Sends all recent notifications

**unread-notifications**: Sends a count of unread notifications
