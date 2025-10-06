Employee Management System
A full-stack Employee Management System built with Next.js, TypeScript, MongoDB (Mongoose), and shadcn/ui. It provides a dynamic, interactive frontend with robust CRUD APIs for creating, reading, updating, and deleting employee records.

Features
Interactive UI for managing employees: add, edit, view, delete, search, filter, paginate, and export to CSV.
Robust backend APIs with validation, duplicate checks, and MongoDB-powered persistence.
Optional avatar with graceful fallback rendering.
Unique constraints for employeeId and email to prevent duplicates, with clean error messaging.
Modern React patterns with client components, hooks, and composable UI via shadcn/ui.

Tech Stack
Next.js (App Router) + TypeScript for full-stack app and API routes.
MongoDB + Mongoose for data modeling, validation, and persistence.
shadcn/ui for accessible, composable components and a consistent design system.
Date-fns, Lucide icons, and utility helpers to enhance UX.

Getting Started

Prerequisites
Node.js LTS and npm or yarn installed.
A MongoDB connection string (MongoDB Atlas or local).
Clone and install

bash
git clone https://github.com/VaidicJain/Employee_Management_System
cd Employee_Management_System
npm install

Environment variables
Create a .env.local file at the project root:
MONGODB_URI="your-mongodb-connection-string"
Run the app

bash
npm run dev
Open http://localhost:3000 to view the app.

API Overview
Base path: /api/employees

GET /api/employees
Returns all employees.

POST /api/employees
Creates a new employee after duplicate checks for employeeId and email. Strips client-sent id/_id. Returns 201 and the created document.

GET /api/employees/[id]
Returns a single employee by MongoDB id.

PUT /api/employees/[id]
Updates employee fields with validation and duplicate checks if employeeId or email change. Strips id/_id from payload. Returns updated document.

DELETE /api/employees/[id]
Deletes the specified employee.

All endpoints return JSON and error messages with appropriate HTTP status codes.

Frontend UX
Employee Directory: searchable, filterable, and paginated table with status and department badges.
Add Employee: form with validation, join date picker, and success/error toasts; backend duplicate checks surface helpful messages.
Edit Employee: edit in dialog without affecting other rows; updates only the selected entry.
View Details: read-only dialog for quick inspection.
Export CSV: export current filtered view to CSV.
