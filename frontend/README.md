# fake server
json-server -H 0.0.0.0 -p 3000 -w db.json

HooBank - Modern UI/UX Website

Overview

HooBank is a modern web development project using Modern UI/UX, React.js & Tailwind CSS that aims to build a responsive React JS application with a stunning UI, high-quality assets, gradients, business stats, reusable feature sections, call-to-action buttons, testimonials, and more. Developed by Sergey Reizman.

# Tech Stack

React
ReactDOM
Tailwind CSS
Flask (Backend)
Flask-SQLAlchemy
Flask-CORS

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm create vite@latest

cd ...

npm install

npm install -g npm@latest

npm init -y

npm run dev

npm install -D tailwindcss postcss autoprefixer

ctrl + j

ctrl + c

npx tailwindcss init -p

npm install tailwindcss@latest --save-dev

npm install tailwindcss@latest

npx tailwindcss build -o output.css

pip freeze > requirements.txt

cd backend

python -m venv env

.\env\Scripts\activate

deactivate

pip install -r requirements.txt

pip install Flask Flask-CORS Flask-SQLAlchemy

flask shell

pip install flask

python.exe -m pip install --upgrade pip

pip install flask-cors

pip install Flask-SQLAlchemy

cd frontend

npm install axios

npm i axios


Bank Management

## Introduction

Modern web development by building a responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more by Sergey Reizman

## Features

# Bank Management System

A Flask application for managing customers, accounts, and transactions in a bank.

Customer Management:

Get the List of Customers

Endpoint: GET /api/customers
Description: Retrieve a list of all customers.
Create a New Customer

Endpoint: POST /api/customers
Description: Add a new customer to the system.
Request Body: JSON with the customer's name.
Update a Customer

Endpoint: PUT /api/customers/{customer_id}
Description: Modify the details of an existing customer.
Request Body: JSON with the updated customer information.
Delete a Customer

Endpoint: DELETE /api/customers/{customer_id}
Description: Remove a customer from the system.
Account Management
Get the List of Accounts

Endpoint: GET /api/accounts
Description: Retrieve a list of all accounts.
Create a New Account

Endpoint: POST /api/accounts
Description: Open a new account for a customer.
Request Body: JSON with the customer ID and initial balance.
Update an Account

Endpoint: PUT /api/accounts/{account_id}
Description: Modify the details of an existing account.
Request Body: JSON with the updated account information.
Delete an Account

Endpoint: DELETE /api/accounts/{account_id}
Description: Close an account and remove it from the system.
Transaction Management
Get the List of Transactions

Endpoint: GET /api/transactions
Description: Retrieve a list of all transactions.
Create a New Transaction

Endpoint: POST /api/transactions
Description: Record a new transaction for an account.
Request Body: JSON with the account ID, transaction amount, and action type.
Update a Transaction

Endpoint: PUT /api/transactions/{transaction_id}
Description: Modify the details of an existing transaction.
Request Body: JSON with the updated transaction information.
Delete a Transaction

Endpoint: DELETE /api/transactions/{transaction_id}
Description: Remove a transaction record from the system.

## Technologies Used

- Flask: A micro web framework for Python
- Flask-SQLAlchemy: Flask extension for SQLAlchemy, a SQL toolkit for Python
- Flask-CORS: Flask extension for handling Cross-Origin Resource Sharing (CORS)

## Project Setup

   Development Environment
   
   1. Clone the repository:

   ```bash
   git clone https://github.com/SergeyReizman/Final_Project.git

   2. Frontend Setup

   Install dependencies:

   cd frontend
   npm install

   Run the development server:
   
   npm run dev

   Build for Production:

   npm run build

   3. Backend Setup

   Install Python dependencies:

   cd backend

   python -m venv env

   .\env\Scripts\activate

   pip install -r requirements.txt

   Run Flask Shell:

   flask shell

   Deactivate Virtual Environment:

   deactivate

   Additional Configuration

   Update Database Schema:

   flask db upgrade
   
## Technologies Used

Frontend Technologies

   React
   ReactDOM
   Tailwind CSS

Backend Technologies

- Flask: A micro web framework for Python

- Flask-SQLAlchemy: Flask extension for SQLAlchemy, a SQL toolkit for Python

- Flask-CORS: Flask extension for handling Cross-Origin Resource Sharing (CORS)

Build Tools

Vite (for fast frontend development)

Project Structure

Frontend Structure

/src
|-- components
|   |-- App.jsx
|-- styles
|   |-- index.css
|-- index.jsx
|-- ...

Configuration Files

.babelrc (if applicable)
vite.config.js (for Vite configuration)

Styling

Tailwind CSS
Version: 3.4.1
Customization: [Add any additional Tailwind CSS customizations here.]
Global Styles
Box sizing reset.
Typography adjustments.
Form styling.
Utility Classes
Spacing (m-, p-, mx-, my-, mt-, mb-, ml-, mr-).
Flex container properties (flex, flex-row, flex-col, flex-wrap).
Positioning (absolute, relative, -left-1/2, -right-[50%], bottom-0, right-0, top-0).
Z-index and shadows.
Responsive Design
Media queries for different screen widths (xs, ss, sm, md, lg, xl).
Custom Classes
Background Colors
.bg-dimBlue: rgba(9, 151, 124, 0.1)
.bg-primary: rgb(0, 4, 15)
Text Colors
.text-dimWhite: rgba(255, 255, 255, 0.7)
.text-primary: rgb(0, 4, 15)

This document serves as a comprehensive guide to understand the structure, setup, and styling of the project. 
Ensure that you update placeholders with project-specific information and customize the content based on your project requirements.

