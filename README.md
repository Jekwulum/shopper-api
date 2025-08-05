# 🛒 Shopper API Microservices

A distributed e-commerce API system built using microservices architecture with TypeScript and Python services, unified under an Nginx reverse proxy for REST access and gRPC for internal service communication.

- Check out the **_specs.md_** file of each service for api endpoints and payload samples
---

## 🧱 Architecture Overview

- **Microservices**: Each domain (User, Notification, Order, Product) is a standalone service.
- **Communication**:  
  - REST via Nginx reverse proxy  
  - gRPC for inter-service communication
- **Databases**:  
  - MongoDB for User, Notification, Order  
  - Azure SQL for Product  
- **Real-time**: Notification service uses WebSockets for push updates.


---

## 🧪 Running Locally (Docker)

> You must have Docker and Docker Compose installed.

```bash
# Start all services
docker-compose up --build

# Check out the specs.md file of each service for api endpoints and payload samples
```

---

## 🗃️ Project Structure
``` shell
shopper/
├── api-gateway/           # Nginx config
├── user-service/          # TS, Express, MongoDB, gRPC
├── notification-service/  # TS, Express, MongoDB, gRPC, Socket.IO
├── order-service/         # TS, Express, MongoDB, gRPC
├── product-service/       # Python, Flask, Azure SQL, gRPC
└── docker-compose.yml     # Service orchestration
```

---

## 🔧 Services

### 1. 👤 User Service

- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB
- **Transport**: REST (via Nginx), gRPC
- **Responsibilities**:
  - User registration & authentication
  - Profile management
  - gRPC client for sending welcome notifications

### 2. 🔔 Notification Service

- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB
- **Transport**: REST, gRPC, WebSocket
- **Responsibilities**:
  - Send real-time and email notifications
  - WebSocket push notifications
  - Receives gRPC messages from User/Order services

### 3. 🧾 Order Service

- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB
- **Transport**: REST, gRPC
- **Responsibilities**:
  - Place and manage orders
  - Communicate with Product service to check stock
  - Notify users via Notification service

### 4. 📦 Product Service

- **Language**: Python
- **Framework**: Flask
- **Database**: Azure SQL Database
- **Transport**: gRPC
- **Responsibilities**:
  - Product catalog and inventory
  - gRPC server for product detail access
  - Used internally by Order service

---

## 🖥️ Nginx Reverse Proxy

- **Purpose**: Serve REST APIs for all TypeScript services
- **Handles**: 
  - Routing external traffic to `/user-service`, `/api/order-service`, `/api/notification-service`, and `/api/product-service`
  - Internally proxies to the correct ports

---

## 🔐 Environment Variables
Each service has a `.env.example` and `.env` file for:
- DB credentials
- gRPC host/port
- JWT secrets
- Email credentials (Notification)

---

## 📄 License
**MIT License**

---

## 👨‍💻 Author
Built with ❤️ by _Charles Nwoye_