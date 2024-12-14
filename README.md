# Resimator Admin Dashboard

## Overview
This project is an admin dashboard application. The application includes dynamic features such as role-based dashboards, user management, and visualized data using charts.

## Features
- Admin/user can login and logout.
- Role-based dashboards (Admin and User).
- User List Table with actions (View, Edit, Delete).
- Side Navigation Bar.
- Responsive design.
- Interactive charts using Recharts.
- Mocked data for seamless testing.

## Routes

#### Login Page
```bash
Local - localhost:3000
Live - https://pravin-resimator-test.netlify.app
```
#### Admin Dashboard Page
```bash
Local - localhost:3000/admin
Live - https://pravin-resimator-test.netlify.app/admin
```
#### User Dashboard Page
```bash
Local - localhost:3000/user
Live - https://pravin-resimator-test.netlify.app/user
```


## Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- npm or yarn.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/pravinray/Resimator-Task.git
```

### 2. Navigate to the Project Directory
```bash
cd Resimator-Task
```

### 3. Install Dependencies
```bash
npm install
```
OR (if using yarn):
```bash
yarn install
```

### 4. Start the Development Server
```bash
npm start
```
OR (if using yarn):
```bash
yarn start
```

### 5. Open in Browser
Once the server is running, open your browser and go to:
```
http://localhost:3000
```

## Mock Data
Mock data for the dashboards and user list is stored in the `src/assets/data/` folder:
- `adminData.json`: Contains admin-related metrics and trends.
- `users.json`: Contains user information for the user list table.
- `userCredentials.json`: Contains admin/user login credentials for the user list table.

## Dependencies
Key libraries used in this project:
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI](https://mui.com/)
- [Recharts](https://recharts.org/)


