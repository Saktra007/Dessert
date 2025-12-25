# 🍰 Dessert Menu – ReactJS Application

Dessert Menu is a front-end web application built with **ReactJS** that displays a list of desserts.  
Users can search, filter by category, and view detailed information for each dessert.

---

## 🚀 Features

- 🔍 Search desserts by name
- 🧁 Filter by category (Cakes, Pastries, Cold Treats)
- 📄 View dessert details (description & calories)
- ⭐ Rating and price display
- 📱 Fully responsive layout
- 🎨 Modern UI with Tailwind CSS

---

## 🛠️ Technologies Used

- ReactJS
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- CSS3

---

## 📂 Project Structure

`txt
Dessert/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── DessertCard.jsx
│   │   └── FilterBar.jsx
│   │
│   ├── data/
│   │   └── desserts.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
`

---

## ▶️ Getting Started

1. Clone the repository
   git clone https://github.com/Saktra007/Dessert.git
2. Navigate to the project directory
   cd Dessert
3. Install dependencies
   npm install
4. Run the development server
   npm start or npm run dev

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
