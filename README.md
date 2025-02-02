
# 🛒 Ecommerce MERN Project

This is a **full-stack eCommerce application** built with the **MERN** stack (MongoDB, Express.js, React.js, and Node.js). It consists of three main parts:

- **Admin Panel** – Backend admin dashboard for managing products, orders, and users.
- **Backend (API Server)** – Node.js/Express.js API with MongoDB for handling authentication, orders, and payments.
- **Frontend (User Storefront)** – React.js client for browsing products, managing carts, and placing orders.

---

## 📂 **Project Structure**
```
ecommerce/
├── admin/         # Admin panel (Vite)
│   ├── node_modules/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/       # API server (Node.js/Express)
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│
├── frontend/      # User-facing store (React.js)
│   ├── node_modules/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── .gitignore     # Git ignore file
├── README.md      # Project documentation
```

---

## 🚀 **Getting Started**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/ecommerce-mern.git
cd ecommerce
```

### **2️⃣ Install Dependencies**
Run the following in each folder (`admin`, `backend`, `frontend`):
```sh
cd admin && npm install
cd ../backend && npm install
cd ../frontend && npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **`.env`** file in backend and add the necessary environment variables.

#### 📌 **Backend (`backend/.env`)**
```
MONGO_DB_CONNECTION_URL=mongodb://localhost:27017/ecommerce
BACKEND_PORT=4000
```

---

## 🛠 **Running the Project**
### **1️⃣ Start the Backend**
```sh
cd backend
npm start
```

### **2️⃣ Start the Frontend**
```sh
cd frontend
npm start
```

### **3️⃣ Start the Admin Panel**
```sh
cd admin
npm run dev
```

---

## 🛒 **Features**
✅ User authentication (Login, Signup)  
✅ Product catalog & search  
✅ Shopping cart & checkout  
✅ Admin dashboard for managing products and users  

---

## 📜 **Tech Stack**
- **Frontend:** React.js, CSS  
- **Backend:** Node.js, Express.js, MongoDB   
- **Database:** MongoDB (Mongoose ORM)  
- **Package Manager:** npm  
