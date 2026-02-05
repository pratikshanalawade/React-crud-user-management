# React CRUD User Management App

This is a simple React-based CRUD (Create, Read, Update, Delete) application for managing user data.  
The app uses **JSON Server as a mock backend** and follows a **schema-driven architecture** so new fields can be added with minimal changes.

---

## 🚀 Tech Stack

- React (Vite)
- React Hook Form (form handling & validation)
- Material UI (UI components)
- Axios (API calls)
- JSON Server (mock REST API)

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone <"https://github.com/pratikshanalawade/React-crud-user-management.git">
cd react-crud

#Install dependencies
npm install


#Start JSON Server (Mock API)
json-server --watch db.json --port 3001

##Start the React app
npm run dev

#Open the app in your browser at:
http://localhost:5173

### Add New Fields to the Form
## Step 1: Open db.json

##Locate the userSchema array.
{
  "name": "dob",
  "label": "Date of Birth",
  "type": "date",
  "required": false
}