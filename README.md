# 📚 Library Management System

## Overview
The Library Management System is a full-stack web application designed to manage the operations of a library. The backend is built with Spring Boot and PostgreSQL, while the frontend is developed using React. The system has two main roles: Admin and User.

## Features
### Admin
- 🛠️ **Manage Books**: Add, update, and delete book records.
- 👥 **Manage Users**: Add, update, and delete user records.

### User
- 🔍 **Search Books**: Search for books by title, author, or genre.
- 📖 **Borrow Books**: Request to borrow books and view borrowing history.

## Technologies Used
- **Backend**: Spring Boot, PostgreSQL
- **Frontend**: React
- **Tools & Libraries**: 
  - Spring Data JPA
  - Spring Security
  - Axios
  - React Router

## Getting Started

### Prerequisites
- ☕ **Java 17**
- 🟢 **Node.js and npm**
- 🐘 **PostgreSQL**

### Installation

#### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/meetghodasara/odoo-hackathon-final.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd /backend
   ```
3. Configure PostgreSQL database:
   - Create a database named `library_db`.
   - Update `application.properties` with your PostgreSQL credentials.

4. Build and run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

#### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```

## Project Structure
```plaintext
library-management-system/
├── backend/
│   ├── src/
│   └── pom.xml
└── frontend/
    ├── src/
    └── package.json
```


## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

This `README.md` provides a structured overview of the project, its features, the technologies used, setup instructions, and other relevant details, along with icons to make it more visually appealing.
