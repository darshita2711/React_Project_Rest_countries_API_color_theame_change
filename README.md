# REST Countries API with Color Theme Switcher (Project 2)

A responsive web application built using React, TypeScript, and Vite. This project allows users to explore countries around the world, search for countries, filter by region, view country details, and switch between Light and Dark mode.

## 🌍 Project Links

- **Live Website:** https://luminous-bublanina-f3df90.netlify.app/

## 📋 Features

- Display countries in a card layout.
- Search countries by name.
- Filter countries by region (Africa, Americas, Asia, Europe, and Oceania).
- View detailed information about each country.
- Navigate between pages using React Router.
- Switch between Light and Dark mode.
- Display country flags.
- Show loading and error messages when fetching data.
- Responsive design for mobile, tablet, and desktop screens.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- React Hooks (`useState`, `useEffect`)
- Context API
- REST Countries API
- CSS
- Git and GitHub
- Netlify

## 📂 Project Structure

```text
rest-countries-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── SearchBar.tsx
│   │   ├── RegionFilter.tsx
│   │   ├── CountryCard.tsx
│   │   └── CountryList.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useCountries.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── CountryDetails.tsx
│   ├── types/
│   │   └── Country.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd rest-countries-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the project

```bash
npm run dev
```

Open the local URL shown in the terminal.

### 5. Build the project

```bash
npm run build
```

## 🌐 Deployment

The project is deployed using Netlify.

- Build command: `npm run build`
- Publish directory: `dist`
- API key: Stored as a server-side Netlify environment variable named `VITE_COUNTRIES_API_KEY`.

## 📝 Project Reflection

### 1. What was the most challenging part of this project?

The most challenging part was connecting the REST Countries API and understanding its data. Some country information was inside nested objects, so I had to learn how to access and display it correctly.

I also faced some API errors while testing and deploying the project. I learned how to check errors and fix problems step by step.

### 2. What did you learn about React?

I learned how to use React components, props, state, and hooks. I used `useState` to manage search and filter values and `useEffect` to fetch country data from the API.

I also learned how to create reusable components to keep my code organized.

### 3. How did you implement Dark Mode?

I used React Context API to manage the theme across the application. Users can switch between Light and Dark mode using the theme button.

I learned how Context API helps share data between components without passing props everywhere.

### 4. What did you learn about routing?

I used React Router DOM to create separate country detail pages. I learned how to use dynamic routes and the `useParams` hook to get the country code from the URL.

### 5. What would you improve in the future?

In the future, I would like to add:

- A favorites feature to save countries.
- Pagination to display countries in smaller groups.
- Better search functionality.
- More information and features on country detail pages.
- Further improvements to mobile responsiveness.

## 🎯 Final Thoughts

This project helped me practice React, TypeScript, API integration, and routing. I also learned how to use Context API, manage application state, handle errors, and deploy a project using Netlify.

It was a great learning experience, and it helped me become more confident in building React applications.