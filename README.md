# 🛍️ Online Store

A modern, fully responsive, multilingual e-commerce storefront built with **Next.js 16 App Router**, featuring a clean UI, localized routing, and reusable components.

---

## ✨ Features

- 🌍 **Localization** with English (`en`) and Arabic (`ar`)
- 📱 Fully responsive design for desktop, tablet, and mobile
- 🛒 Product preview modal with image, description, and action button
- 📦 Category pages for Mobiles, Books, and Male Footwear
- 🏪 Shop page with sample product collections
- 🎨 Modern UI with reusable components
- ⚡ Fast routing using the Next.js App Router
- 🖼️ Optimized images using `next/image`
- 🔄 Global state management with Redux Toolkit
- 🎭 Smooth animations powered by Framer Motion

---

## 📂 Project Structure

```text
app/
└── [locale]/
    ├── Home/
    │   ├── mobiles/
    │   ├── books/
    │   ├── malefootwear/
    │   └── page.tsx
    ├── Shop/
    ├── About/
    ├── Contact/
    └── ForgetPassword/

components/
├── pages/
├── shared/
└── ui/

messages/
├── en.json
└── ar.json

redux/
```

---

## 🚀 Pages

| Route | Description |
|--------|-------------|
| `/en/Home` | Home page |
| `/en/Home/mobiles` | Mobiles collection |
| `/en/Home/books` | Books collection |
| `/en/Home/malefootwear` | Male footwear collection |
| `/en/Shop` | Shop page |
| `/en/About` | About page |
| `/en/Contact` | Contact page |
| `/en/ForgetPassword` | Reset password |

> Replace `en` with `ar` to access the Arabic version.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | App Router |
| **React 19** | UI Library |
| **TypeScript** | Type Safety |
| **next-intl** | Localization |
| **Redux Toolkit** | Global State Management |
| **RTK Query** | Data Fetching |
| **Framer Motion** | Animations |
| **React Icons** | Icons |
| **Next/Image** | Optimized Images |

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000/en/Home
```

or

```text
http://localhost:3000/ar/Home
```

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 🌐 Localization

Supported languages:

- 🇺🇸 English
- 🇪🇬 Arabic (RTL)

Translation files:

```text
messages/
├── en.json
└── ar.json
```

---

## 📸 Screens

- 🏠 Home
- 📱 Mobiles
- 📚 Books
- 👟 Male Footwear
- 🛍️ Shop
- ℹ️ About
- 📞 Contact

---

## 📋 Future Improvements

- ✅ Authentication
- 🛒 Shopping Cart
- ❤️ Wishlist
- 💳 Checkout & Payment
- 🔎 Product Search
- 🏷️ Product Filters
- ⭐ Reviews & Ratings
- 📄 Product Details Page
- 👤 User Profile
- 📦 Order History
- 🌙 Dark Mode
- 🔔 Notifications

---

## 👨‍💻 Author

**Abdelghfar Salah**

Frontend Developer specializing in **React.js**, **Next.js**, and modern web applications.

---
## 🌐 Live Demo

Experience the application online:

🔗 **Live Website:**  
:contentReference[oaicite:0]{index=0}

You can explore the localized storefront, browse products, and navigate between the English and Arabic versions.

⭐ If you like this project, consider giving it a **Star** on GitHub.
