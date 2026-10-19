# Anmol E-Commerce Application

A full-stack e-commerce web application built using **Spring Boot, React, and MySQL**. The application allows users to manage products through CRUD operations, view product details, handle product images, and search products dynamically.

## Overview

This project demonstrates the integration of a React frontend with a Spring Boot REST API and a MySQL database. It was developed as a hands-on learning project to explore backend development, RESTful APIs, database connectivity, and frontend-backend communication.

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate / ORM
- Maven
- REST APIs

### Frontend
- React
- Vite
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Axios

### Database and Tools
- MySQL
- Git and GitHub
- Postman
- IntelliJ IDEA / VS Code

## Features

- **Add Products:** Create new product entries.
- **View Products:** Retrieve and display available products.
- **Update Products:** Modify existing product details.
- **Delete Products:** Remove products from the database.
- **Product Details:** Fetch information about an individual product.
- **Product Images:** Handle product image uploads and retrieval.
- **Live Product Search:** Search products by keyword with debounced search suggestions.
- **Database Integration:** Persist product information using MySQL and Spring Data JPA.
- **REST API Integration:** Connect the React frontend to the Spring Boot backend using HTTP requests.

## Project Structure

```text
Anmol-Ecommerce-App/
│
├── ecom-proj/                  # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── ...         # Controllers, entities, services, repositories
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   └── mvnw
│
├── ecom-frontend-3-yt/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/product/{id}` | Retrieve a product by ID |
| GET | `/api/product/{id}/image` | Retrieve a product image |
| POST | `/api/product` | Add a new product |
| PUT | `/api/product/{id}` | Update an existing product |
| DELETE | `/api/product/{id}` | Delete a product |
| GET | `/api/products/search?keyword={keyword}` | Search products by keyword |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Java Development Kit (JDK)
- Maven, or use the included Maven Wrapper
- Node.js and npm
- MySQL Server
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/anmolgehlaut-gehlaut/Anmol-Ecommerce-App.git
cd Anmol-Ecommerce-App
```

### 2. Configure the MySQL Database

Start MySQL and create the database:

```sql
CREATE DATABASE ecom_db;
```

Configure the database username and password using environment variables.

**Windows PowerShell:**

```powershell
$env:DB_USERNAME="your_mysql_username"
$env:DB_PASSWORD="your_mysql_password"
```

Replace the example values with your own local MySQL credentials. Do not commit real credentials to GitHub.

Check `ecom-proj/src/main/resources/application.properties` to confirm the database URL, database name, and JPA settings.

### 3. Run the Spring Boot Backend

Open a terminal in the project root and run:

```powershell
cd ecom-proj
.\mvnw.cmd spring-boot:run
```

The backend uses the port configured in `application.properties`. Confirm the configured port before starting the frontend.

### 4. Run the React Frontend

Open a **second terminal** in the project root:

```powershell
cd ecom-frontend-3-yt
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal, usually `http://localhost:5173`.

Ensure the frontend's API base URL in `axios.jsx` matches the backend's configured address and port.

## Learning Outcomes

Through this project, I gained practical experience with:

- Developing REST APIs using Spring Boot.
- Implementing CRUD operations with Spring Data JPA.
- Understanding ORM concepts and database interaction.
- Connecting a React frontend to a Java backend.
- Working with MySQL for persistent data storage.
- Handling HTTP requests and JSON-based communication.
- Implementing dynamic search functionality.
- Using Git and GitHub for version control and project management.
- Debugging issues during full-stack application development.

## Future Improvements

- Add user authentication and authorization.
- Implement shopping cart and order management.
- Add product categories, filtering, and sorting.
- Improve input validation and exception handling.
- Deploy the frontend and backend.
- Add automated tests.

## Author

**Anmol Gehlaut**

- GitHub: [@anmolgehlaut-gehlaut](https://github.com/anmolgehlaut-gehlaut)
- LinkedIn: [Anmol Gehlaut](https://linkedin.com/in/anmol-gehlaut-15180231b)

---

*Built as a hands-on project to strengthen my skills in Java backend and full-stack web development.*
