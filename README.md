# UomoUI

UomoUI is a modern, responsive, and pixel-perfect eCommerce frontend UI built with React.js, Vite, and Tailwind CSS. It focuses on reusable components, clean architecture, and scalable UI design for modern eCommerce applications.

📦 GitHub Repository: https://github.com/mostofa-zaman/Uomo-Ecomerce

---

# ✨ Features

- Built with React 19  
- Fast development using Vite  
- Modern UI with Tailwind CSS  
- Fully responsive design  
- Reusable UI components  
- Smooth animations using Framer Motion  
- Product sliders (Swiper / React Slick)  
- State management with Zustand  
- API caching with TanStack React Query  
- Virtualized rendering using TanStack Virtual  
- Firebase integration  
- Clean routing with React Router DOM  

---

# 🧩 Pages Included

- Home  
- Shop  
- Product Details  
- Cart  
- Checkout  
- Order Tracking  
- Shop Info  
- Collection  
- Journal  
- LookBook  
- Dashboard  
- Wishlist  
- Account Details  
- Address Management  
- Orders  
- Logout  
- 404 Not Found  

---

# 🗺️ Routing Structure


Routing is handled using **React Router DOM**.

```
/
├── Home
├── Collection
├── Journal
├── LookBook
├── Shop
├── Cart
├── Shop Single
├── Order Tracking
├── Checkout
├── Shop Info
│
└── Dashboard
    ├── Account
    ├── Orders
    ├── Address
    ├── Account Details
    ├── Wishlist
    └── Logout
```

---

# 🧱 Project Structure

```
src
│
├── component
│   ├── common
│   ├── shopMain
│   ├── navbar
│   ├── sliders
│   └── mainDashboard
│
├── page
│   ├── Home
│   ├── Shop
│   ├── CollectionPg
│   ├── Journal
│   ├── LookBook
│   └── NotFound
│
├── rootlayout
│   └── Rootlayout.jsx
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Tech Stack



- React.js → Frontend library  
- Vite → Build tool  
- Tailwind CSS → Styling  
- React Router DOM → Routing  
- Framer Motion → Animations  
- Firebase → Backend services  
- TanStack React Query → Data fetching  
- TanStack Virtual → Virtualized lists  
- Zustand → State management  
- Swiper / React Slick → Sliders  

---

# 📦 Installation

```bash
git clone https://github.com/mostofa-zaman/Uomo-Ecomerce.git
cd uomo-ui
npm install
npm run dev
```