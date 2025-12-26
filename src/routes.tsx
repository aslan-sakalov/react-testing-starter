// Import the RouteObject type from react-router-dom for type safety
import { RouteObject } from "react-router-dom";

// Import the root App component which serves as the main layout wrapper
import App from "./App.tsx";

// Import the error page component to display when routing errors occur
import ErrorPage from "./pages/ErrorPage.tsx";

// Import all public-facing page components
import HomePage from "./pages/HomePage.tsx";
import PlaygroundPage from "./pages/PlaygroundPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import ProductListPage from "./pages/ProductListPage.tsx";

// Import admin-specific page components
import AdminHomePage from "./pages/admin/AdminHomePage.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import EditProductPage from "./pages/admin/EditProductPage.tsx";
import NewProductPage from "./pages/admin/NewProductPage.tsx";
import AdminProductListPage from "./pages/admin/ProductListPage.tsx";

// Define the routes configuration array
// This array tells React Router which components to render for each URL
const routes: RouteObject[] = [
  {
    // Root route configuration
    path: "/", // The base path for the entire application
    element: <App />, // App component wraps all child routes, providing shared layout/context
    errorElement: <ErrorPage />, // Fallback component shown when any route error occurs

    // Child routes nested under the root path
    children: [
      // Home page route - renders at exactly "/"
      // 'index: true' means this route matches the parent's path exactly
      { index: true, element: <HomePage /> },

      // Playground route - accessible at "/playground"
      { path: "playground", element: <PlaygroundPage /> },

      // Products list route - accessible at "/products"
      { path: "products", element: <ProductListPage /> },

      // Individual product detail route - accessible at "/products/123" (where 123 is any product ID)
      // The ':id' is a URL parameter that can be accessed in the component
      { path: "products/:id", element: <ProductDetailPage /> },

      // Admin section - all admin routes are grouped under "/admin"
      {
        path: "admin", // Base path for all admin routes
        element: <AdminLayout />, // AdminLayout wraps all admin child routes with shared admin UI

        // Nested admin routes
        children: [
          // Admin home page - renders at exactly "/admin"
          { index: true, element: <AdminHomePage /> },

          // Admin product list - accessible at "/admin/products"
          { path: "products", element: <AdminProductListPage /> },

          // Create new product page - accessible at "/admin/products/new"
          { path: "products/new", element: <NewProductPage /> },

          // Edit existing product page - accessible at "/admin/products/123/edit"
          // The ':id' parameter represents the product ID to edit
          { path: "products/:id/edit", element: <EditProductPage /> },
        ],
      },
    ],
  },
];

// Export the routes configuration for use in the router setup
export default routes;
