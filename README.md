# Achilyon UI Assessment – Next.js Implementation
<p align="center"> <img src="https://img.shields.io/badge/Next.js-14-black" /> <img src="https://img.shields.io/badge/TailwindCSS-3.0-blue" /> <img src="https://img.shields.io/badge/Shadcn/UI-Components-green" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue" /> <img src="https://img.shields.io/badge/Deployment-Vercel-black" /> </p>


## 🚀 Overview
This project is a recreation of the provided UI/UX design assessment using **Next.js (App Router)**, **TailwindCSS**, **Shadcn/UI**, and **API-driven components**.  
All dynamic content in the UI is served from internal **Next.js API routes**, ensuring separation of data and presentation.

---

## 🎯 Goal of This Assessment
Recreate the provided interface with a strong focus on:

- Clean and scalable component structure  
- Pixel-accurate visual fidelity  
- Responsive layout (desktop + mobile)  
- Meaningful data modeling  
- API-driven UI rendering  

---

## 🛠 Tech Stack

- **Next.js 14+ (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Shadcn/UI Components**
- **Next.js API Routes (`/app/api/*`)**


Each UI section consumes data from its corresponding API route.

---

## 📡 API-Driven Architecture

Every dynamic element (cards, metrics, lists, sections) loads from an internal API.

### **Why this approach?**
- Ensures **clean separation** between UI and data  
- Easier to **scale**, modify, or plug to a real backend later  
- Avoids hardcoded values  
- Cleaner, more testable components  

### Example API Response

```json
{
  "stats": [
    { "label": "Revenue", "value": "₹1,20,000" },
    { "label": "Active Users", "value": 3400 }
  ],
  "cards": [
    {
      "title": "Overview",
      "description": "Key metrics for this month",
      "percentage": 12.4
    }
  ]
}
```

## UI / UX Implementation

Recreated the provided design with attention to spacing, layout, and typography

Uses TailwindCSS for structure + styling

Uses Shadcn/UI for consistent components

Fully responsive for mobile and desktop

Placeholder images used where assets were not provided

## 🌐 Deployment

The project is deployed publicly using Vercel.

API routes work in production

Layout and static assets render correctly

Live Demo: add your Vercel link here
📂 GitHub Repo: https://github.com/MansiMore-0817/achilyon_assessment

## Features Implemented

Fully responsive UI

Clean component structure

API-powered content

Modular and scalable data architecture

Shadcn-based UI components

Deployed on Vercel


## 📘 Assumptions

Some design assets were not provided → used placeholders

API structure was created based on project understanding

UI recreated purely from the provided image

## 📁 Project Structure
<img src="https://github.com/MansiMore-0817/achilyon_assessment/project_structure.png" width="500" />



## Running locally
npm install
npm run dev
Open: http://localhost:3000
