# 🧾 Shopper API - Order Service Specifications

The **Order Service** handles order placement, retrieval, and status updates within the Shopper ecosystem. It interacts with the Product Service and User Service via **gRPC**, and sends order-related notifications via the Notification Service.

---

## 🟢 Base URL

http://localhost/order-service

> Replace `localhost` with your Nginx or deployment hostname if needed.

---

## 🔁 Endpoints

### 1. `GET /health`

**Description**: Service health check.

**Response**:

```json
{
  "status": "Order Service is running ✅"
}
```

### 2. POST /orders
**Description**: Creates a new order with product and user details.

🔒 Protected route – Requires authenticated user (req.user.id)

**Request Body**:
```json
{
  "items": [
    {
      "productId": "abc123",
      "quantity": 2
    },
    {
      "productId": "xyz789",
      "quantity": 1
    }
  ]
}
```

**Response**:
```json
{
  "status": "SUCCESS",
  "data": {
    "_id": "64f070c9a4fd39a6c3d0c98e",
    "userId": "64f05db2a4fd39a6c3d0c55d",
    "items": [
      {
        "productId": "abc123",
        "quantity": 2,
        "name": "iPhone 15",
        "price": 999
      },
      {
        "productId": "xyz789",
        "quantity": 1,
        "name": "AirPods Pro",
        "price": 249
      }
    ],
    "status": "PENDING",
    "createdAt": "2025-08-05T13:00:00.000Z",
    "updatedAt": "2025-08-05T13:00:00.000Z"
  }
}
```

### 3. GET /orders/:id
**Description**: Retrieves a specific order by ID, including user details.

```json
{
  "status": "SUCCESS",
  "message": "Order retrieved successfully",
  "data": {
    "_id": "64f070c9a4fd39a6c3d0c98e",
    "items": [
      {
        "productId": "abc123",
        "quantity": 2,
        "name": "iPhone 15",
        "price": 999
      }
    ],
    "status": "PENDING",
    "user": {
      "id": "64f05db2a4fd39a6c3d0c55d",
      "email": "john.doe@example.com",
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}
```

### 4. GET /orders
**Description**: Retrieves all orders for the authenticated user.
```json
{
  "status": "SUCCESS",
  "message": "Orders retrieved successfully",
  "data": [
    {
      "_id": "64f070c9a4fd39a6c3d0c98e",
      "items": [...],
      "status": "PENDING"
    },
    ...
  ]
}
```

### 5. PATCH /orders/:id/status
**Description**: Updates the status of an order (PENDING, COMPLETED, CANCELLED, etc.).

**Request Body**:
```json
{
  "status": "COMPLETED"
}
```

**Response**:
```json
{
  "status": "SUCCESS",
  "message": "Order status updated successfully",
  "data": {
    "_id": "64f070c9a4fd39a6c3d0c98e",
    "status": "COMPLETED",
    "items": [...],
    "userId": "64f05db2a4fd39a6c3d0c55d"
  }
}
```
