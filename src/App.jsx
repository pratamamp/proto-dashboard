import React from "react";
import { ThemeProvider } from "@/contexts/theme-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import AuthLayout from "@/routes/authlayout";
import RootPage from "@/routes/landing";
import LoginForm from "@/components/loginform";
import RegisterForm from "@/components/registerform";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootPage />,
        },
        {
            element: <Layout />,
            children: [
                {
                    path: "board",
                    element: <DashboardPage />,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Analytic</h1>,
                },
                {
                    path: "reports",
                    element: <h1 className="title">Reports</h1>,
                },
                {
                    path: "customers",
                    element: <h1 className="title">Customers</h1>,
                },
                {
                    path: "new-customer",
                    element: <h1 className="title">New Customer</h1>,
                },
                {
                    path: "verified-customers",
                    element: <h1 className="title">Verified Customers</h1>,
                },
                {
                    path: "products",
                    element: <h1 className="title">Products</h1>,
                },
                {
                    path: "new-product",
                    element: <h1 className="title">New Product</h1>,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Setting</h1>,
                },
            ],
        },
        {
            element: <AuthLayout />,
            children: [
                {
                    path: "sign/in",
                    element: <LoginForm />,
                },
                {
                    path: "sign/up",
                    element: <RegisterForm />,
                },
            ],
        },
    ]);
    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
