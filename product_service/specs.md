# 📦 Shopper API - Product Service Specifications

The **Product Service** manages the product catalog and inventory for the Shopper platform. It is built with Python, Flask, and Azure SQL Database. All interactions are handled via RESTful endpoints.

---

## 🟢 Base URL

http://localhost/product-service


> Replace `localhost` with your Nginx or deployment hostname if needed.

---

## 🔁 Endpoints

### 1. `GET /health`

**Description**: Service health check.

**Request**:
- No request body

**Response**:

```json
{
  "status": "Product service is running ✅"
}
```

### 2. POST /products
**Description**: Adds a new product to the database.

**Request Body**:

```json
{
  "name": "Apple AirPods Pro",
  "description": "Wireless noise-cancelling earbuds",
  "price": 249.99,
  "stock": 100,
  "category": "electronics"
}
```
**Response**:

```json
{
  "status": "SUCCESS",
  "data": {
    "id": 1,
    "name": "Apple AirPods Pro",
    "description": "Wireless noise-cancelling earbuds",
    "price": 249.99,
    "stock": 100,
    "category": "electronics",
    "created_at": "2025-08-05T12:00:00",
    "updated_at": "2025-08-05T12:00:00"
  }
}
```

### 3. GET /products/<id>
**Description**: Retrieves a single product by its ID.

**Example**:
```http
GET /products/1
```

**Response**:
```json
{
  "status": "SUCCESS",
  "data": {
    "id": 1,
    "name": "Apple AirPods Pro",
    "description": "Wireless noise-cancelling earbuds",
    "price": 249.99,
    "stock": 100,
    "category": "electronics",
    "created_at": "2025-08-05T12:00:00",
    "updated_at": "2025-08-05T12:00:00"
  }
}
```

### 4. GET /products
**Description**: Retrieves all products.

**Response**:
```json
{
  "status": "SUCCESS",
  "data": [
    {
      "id": 1,
      "name": "Apple AirPods Pro",
      "description": "Wireless noise-cancelling earbuds",
      "price": 249.99,
      "stock": 100,
      "category": "electronics"
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "description": "Flagship Android smartphone",
      "price": 799.99,
      "stock": 50,
      "category": "electronics"
    }
  ]
}
```

### 4. GET /products
**Description**: Retrieves all products.

**Response**:
```json
{
  "status": "SUCCESS",
  "data": [
    {
      "id": 1,
      "name": "Apple AirPods Pro",
      "description": "Wireless noise-cancelling earbuds",
      "price": 249.99,
      "stock": 100,
      "category": "electronics"
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "description": "Flagship Android smartphone",
      "price": 799.99,
      "stock": 50,
      "category": "electronics"
    }
  ]
}
```

### PATCH /products/<id>
**Description**: Updates a product's information.

```json
{
  "stock": 80,
  "price": 229.99
}
```

**Response**:
```json
{
  "status": "SUCCESS",
  "data": {
    "id": 1,
    "name": "Apple AirPods Pro",
    "description": "Wireless noise-cancelling earbuds",
    "price": 229.99,
    "stock": 80,
    "category": "electronics"
  }
}
```

### 6. DELETE /products/<id>
**Description**: Deletes a product from the catalog.

**Response**:

```json
{
  "status": "SUCCESS",
  "message": "Product deleted successfully"
}
```
