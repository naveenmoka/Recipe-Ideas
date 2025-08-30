
# **Recipe Ideas – React + Vite**

This project is a **React.js application built with Vite** that allows users to **search for recipes by ingredient** using the **TheMealDB public API**. Results are displayed as **responsive cards**, and clicking a card opens a **modal with full recipe details**.

---

## **Features**

* Search recipes by ingredient dynamically.
* Display results as responsive recipe cards.
* View full recipe details in a modal popup.
* Fully responsive design for desktop, tablet, and mobile.
* Clean, modern UI built with Tailwind CSS.
* Reusable React components with `useState` and `useEffect` hooks.

---

## **Tech Stack**

* **Frontend:** React.js (Functional Components, Hooks)
* **Styling:** Tailwind CSS
* **Build Tool:** Vite (Fast development server & HMR)
* **API:** [TheMealDB public API](https://www.themealdb.com/api.php)
* **Package Manager:** npm
* **Editor Recommended:** Visual Studio Code

---

## **Project Structure**

```
/recipe-ideas
│
├─ /public           # Static assets (images, icons)
├─ /src
│  ├─ /components    # RecipeCard, SearchBar, RecipeModal
│  ├─ /assets        # Images and media files
│  ├─ App.jsx        # Main app component
│  └─ main.jsx       # React entry point
├─ package.json      # Project dependencies and scripts
└─ README.md         # Project documentation
```

---

## **Getting Started**

### **Prerequisites**

* Node.js v16+ installed: [https://nodejs.org/](https://nodejs.org/)
* npm (comes with Node.js)

Verify installation:

```bash
node -v
npm -v
```

---

### **Installation**

1. Clone or copy the project files to a local folder.
2. Open the folder in **VSCode**.
3. Install dependencies:

```bash
npm install
```

---

### **Running the Development Server**

```bash
npm run dev
```

* Open the app in your browser at the URL shown in the terminal (default: `http://localhost:5173`).
* HMR (Hot Module Replacement) is enabled for fast updates during development.

---

### **Building for Production**

```bash
npm run build
```

* Outputs a production-ready version of the app in the `dist/` folder.

---

## **Deployment**

* Can be deployed to platforms like **StackBlitz, Vercel, or Netlify**.
* Example links (replace with your actual deployment):

```
Live App: https://your-project-name.stackblitz.io
Code Editor: https://stackblitz.com/edit/your-project-name
```

---

## **Future Enhancements**

* Add **user authentication** for saving favorite recipes.
* Implement **categories, filters, and advanced search**.
* Offline caching for **better performance**.
* Additional styling and animations for enhanced UI/UX.

---

