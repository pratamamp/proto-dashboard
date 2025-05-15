import React from "react";
import { rootNavbarLinks } from "@/constants";
import { Link } from "react-router-dom";

function RootPage() {
    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            {/* HEADER */}
            <header className="h-10 w-full p-4">
                <nav className="flex items-center space-x-2">
                    {rootNavbarLinks.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="text-blue-500 hover:text-purple-500"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </header>
        </div>
    );
}

export default RootPage;
