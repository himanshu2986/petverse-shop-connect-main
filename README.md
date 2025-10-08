# Petverse Shop Connect

Welcome to **Petverse Shop Connect**, a comprehensive, feature-rich e-commerce platform designed for pet supply businesses and their customers. This application provides a seamless and modern shopping experience, from browsing products to managing orders, all powered by a robust and scalable tech stack.

## ✨ Core Features

This platform is more than just a store; it's a complete solution for pet-related e-commerce.

*   **Dynamic Product Catalog:** Browse products by category, with support for detailed descriptions, image galleries, ratings, and stock levels.
*   **Seamless Shopping Cart & Checkout:** A persistent shopping cart and a multi-step, secure checkout process.
*   **Comprehensive User Authentication:** Secure user sign-up, login, and profile management using Supabase Auth.
*   **Personalized User Profiles:** Users can manage their personal information, view order history, and track order statuses.
*   **Wishlist & Product Comparison:** Allows users to save favorite items and compare product specifications side-by-side.
*   **Content-Driven Commerce:** Integrated blog and articles section for engaging with customers and improving SEO.
*   **Informational Pages:** A full suite of static pages including About Us, Contact, FAQ, and various policy documents.
*   **Fully Responsive Design:** Built with a mobile-first approach to ensure a great experience on any device, from desktops to smartphones.

## 🏗️ Project Architecture

The application is built on a modern Jamstack architecture, separating the frontend from the backend services.

*   **Frontend:** A single-page application (SPA) built with **React** and **Vite**. It handles all the UI rendering and client-side routing.
*   **Backend (BaaS):** **Supabase** serves as the all-in-one backend solution, providing:
    *   **PostgreSQL Database:** For storing all application data (products, users, orders, etc.).
    *   **Authentication:** Manages user sign-up, login, and session management.
    *   **Storage:** Can be used for hosting product images and other assets.
    *   **Auto-generated APIs:** Provides instant and secure APIs to interact with the database.
*   **State Management:**
    *   **TanStack (React) Query:** Used for server state management. It handles data fetching, caching, and synchronization with the Supabase backend, significantly simplifying data flow and improving performance.
    *   **React Context API:** Used for global UI state management, such as the authentication status (`AuthContext`) and product comparison list (`ComparisonContext`).

## 🚀 Technology Stack

This project leverages a powerful and modern set of technologies to deliver a high-quality user experience and a maintainable codebase.

*   **Core:**
    *   **React 18:** For building the user interface.
    *   **TypeScript:** For static typing and improved developer experience.
    *   **Vite:** As the build tool and development server, offering near-instant hot module replacement (HMR).
*   **Backend & Data:**
    *   **Supabase:** The primary backend service.
    *   **TanStack (React) Query:** For efficient server state management.
*   **Routing:**
    *   **React Router v6:** For client-side routing and navigation.
*   **Styling & UI:**
    *   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
    *   **Shadcn/ui:** A collection of beautifully designed, accessible, and reusable components.
    *   **Lucide React:** For icons.
*   **Form Handling:**
    *   **React Hook Form:** For performant and flexible form validation.
    *   **Zod:** For schema validation.
*   **Linting:**
    *   **ESLint:** To enforce code quality and consistency.

## 📂 Project Structure

The project is organized into a logical and scalable directory structure.

```
/
├── public/              # Static assets
├── supabase/            # Supabase migrations and configuration
│   └── migrations/      # Database schema changes
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components (e.g., Navbar, ProductCard)
│   │   └── ui/          # Core UI elements from Shadcn/ui
│   ├── contexts/        # Global React contexts (e.g., AuthContext)
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Supabase client setup
│   ├── lib/             # Utility functions
│   ├── pages/           # Top-level page components for each route
│   └── main.tsx         # Main application entry point
├── .env                 # Environment variables (ignored by Git)
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## 🗄️ Database Schema

The database is built on PostgreSQL and managed via Supabase. The core tables include:

*   `profiles`: Stores user profile information, linked to `auth.users`.
*   `categories`: Defines product categories.
*   `products`: Contains all product information, including price, stock, and description.
*   `cart_items`: Manages items in users' shopping carts.
*   `wishlist`: Stores users' wishlisted items.
*   `orders` & `order_items`: Manages customer orders and the products within them.

Row Level Security (RLS) is enabled on all tables to ensure users can only access and modify their own data.

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   **Node.js:** v18.x or later
*   **Bun:** (Optional, but recommended) `npm install -g bun`
*   **Supabase Account:** A free account at [supabase.com](https://supabase.com)
*   **Supabase CLI:** `npm install -g supabase`

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/petverse-shop-connect-main.git
    cd petverse-shop-connect-main
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    # OR
    npm install
    ```

3.  **Set up Supabase:**
    *   Log in to the Supabase CLI: `supabase login`
    *   Link your local project to your Supabase project: `supabase link --project-ref <your-project-id>` (Find `<your-project-id>` in your Supabase project's URL).
    *   Push the database migrations to apply the schema: `supabase db push`

4.  **Set up Environment Variables:**
    *   Create a new file named `.env` in the root of the project.
    *   Go to your Supabase project's **Settings > API**.
    *   Copy the **Project URL** and the **anon (public) key** into your `.env` file.

    ```env
    VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
    VITE_SUPABASE_ANON_KEY=<your-anon-key>
    ```

5.  **Run the Development Server:**
    ```bash
    bun run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

*   `bun run dev`: Starts the development server with HMR.
*   `bun run build`: Creates a production-ready build of the app.
*   `bun run lint`: Lints the entire project using ESLint.
*   `bun run preview`: Serves the production build locally to preview it.

---

Happy coding! 🐾