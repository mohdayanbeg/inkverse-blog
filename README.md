# Inkverse - A Full-Stack Blogging Platform 📝

[![GitHub last commit](https://img.shields.io/github/last-commit/mohdayanbeg/inkverse-blog)](https://github.com/mohdayanbeg/inkverse-blog/commits/main)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Welcome to Inkverse**, a robust, full-stack blogging platform designed for users to easily create, publish, and manage their articles. This project demonstrates strong proficiency in the MERN stack principles (leveraging **React** and **Node.js** with MySQL) while ensuring secure user authentication and persistent data management.

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Secure Authentication** 🔒 | Users can register and sign in securely using a custom authentication system with **bcrypt** password encryption. |
| **CRUD Operations** ✍️ | Complete functionality to **Create, Read, Update, and Delete** user-specific blog posts. |
| **Content Management** 🗃️ | Authenticated users have a private dashboard to view and edit only their own published blogs. |
| **Public Feeds** 📰 | A dynamic feed showcases a collection of all blogs posted by all users on the platform. |
| **Modern Frontend** 🎨 | A clean, user-friendly interface built with modern **React** components, styled using **Bootstrap** and **Material UI**. |
| **Database Scalability** 💾 | Built using a high-performance **MySQL** database for reliable data storage. |

## 🚀 Technologies

Inkverse is built on a strong foundation of modern JavaScript and SQL technologies, showcasing expertise in connecting the client and server layers.

| Category | Technologies Used |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |
| **Backend** | ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) |
| **Database** | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) |
| **Styling** | ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) ![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white) |
| **Security** | ![Bcrypt](https://img.shields.io/badge/Bcrypt-0077c2?style=for-the-badge&logo=appveyor&logoColor=white) |

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed:

* `npm` or `yarn`
* Node.js (version 14+)
* MySQL (A running local instance or a cloud service)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mohdayanbeg/inkverse-blog.git](https://github.com/mohdayanbeg/inkverse-blog.git)
    cd inkverse-blog
    ```

2.  **Install backend dependencies:**
    ```bash
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../client
    npm install
    ```

### Configuration

Create a `.env` file in your **backend** (`/server`) folder and add your database credentials and secret key:

```.env
# MySQL Database Configuration
DB_HOST=127.0.0.1
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_DATABASE=inkversedb

# Security
JWT_SECRET_KEY=a_super_secret_key_for_tokens
