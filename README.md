# 🛒 ShopNest — Next.js 15 E-Commerce App

## 🚀 Live Project Link

[![Live Demo](https://img.shields.io/badge/Live%20Demo-%20-%2300C853?style=for-the-badge&logo=appveyor)](https://next-product-app-hivt.vercel.app/)

---

## 📌 Project Overview

**ShopNest** is a modern eCommerce web application built with **Next.js 15**, **Tailwind CSS**, **DaisyUI**, **NextAuth.js**, and **MongoDB**. It allows users to register, login, browse products, view product details, and experience a responsive product gallery. The platform is designed to provide a seamless shopping experience with secure authentication and dynamic product management.

---

## 👤 Admin Access

> Currently, no separate admin dashboard is implemented. Users can register and login via email & password.

## 🌟 Key Features

1. 🔐 **Secure Email/Password Authentication** using NextAuth.js Credentials Provider
2. 🛍️ **Responsive Product Gallery** with featured products section
3. 🖼️ **Clickable Product Images** redirecting to product details page
4. 💰 **Display Product Price and Description**
5. 🏷️ **Fully Responsive Design** for mobile, tablet, and desktop
6. ⚡ **Loading Indicators** while fetching API data
7. 📦 **MongoDB Backend** for storing users and products
8. 🔒 **Password Hashing with bcryptjs** for security
9. 🔄 **Client-Side Fetching for Dynamic Product Details**
10. 🧩 **Reusable Components** for gallery, loader, and cards

---

## 🧩 Project Structure

```bash
ShopNest/
├── app/
│   ├── api/
│   │   ├── products/
│   │   │   ├── route.jsx
│   │   │   └── [id]/route.jsx
│   │   └── register/route.jsx
│   ├── products/
│   │   └── [id]/page.jsx
│   ├── login/page.jsx
│   └── register/page.jsx
├── components/
│   ├── HomeGallery.jsx
│   └── Loader.jsx
├── lib/
│   └── mongodb.js
├── public/
│   └── images/
├── .env.local
├── package.json
└── README.md
```

---

---

## 🧪 Challenges Faced

- Implemented **NextAuth.js Credentials Provider** with JWT sessions.
- Ensured **responsive layout** for the product gallery across all devices.
- Managed **MongoDB ObjectId** for dynamic API routes.
- Handled **loading states** with a reusable **Loader** component.
- Deployed app on **Vercel** while handling environment variables and secrets.

---

## 🛠 Tech Stack

### 💻 Frontend

- **Next.js 15** (App Router)
- **React** `^18.x`
- **Tailwind CSS** + **DaisyUI**
- **React Icons**

### 🌐 Backend

- **MongoDB** (Atlas or local)
- **Next.js API Routes** for serverless endpoints
- **bcryptjs** for password hashing
- **NextAuth.js** for authentication

---

## 🚀 How to Run Locally

```bash
# Clone the project
git clone https://github.com/yourusername/ShopNest.git
cd ShopNest

# Install dependencies
npm install

# Create environment file
touch .env.local

# Add environment variables
# MONGODB_URI=your-mongodb-connection-string
# DB_NAME=your-database-name
# NEXTAUTH_SECRET=your-random-secret

# Run development server
npm run dev
---

## 🙌 Thank You for Visiting NextShop!

Thank you for exploring **NextShop**

If you have any questions, feedback, or collaboration ideas —
**feel free to reach out!**

📧 **Email:** ssaidebin1@gmail.com
---
```
