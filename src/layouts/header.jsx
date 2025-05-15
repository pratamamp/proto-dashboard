import { useTheme } from "../hooks/use-theme";
import PropTypes from "prop-types";
import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import { useRef, useState } from "react";
import { MenuProfile } from "@/components/menuprofile";
import { useClickOutside } from "@/hooks/use-click-outside";

export const Header = ({ collapsed, setCollapsed }) => {
    const { setTheme, theme } = useTheme();
    const [collapsedMenuProfile, setCollapsedMenuProfile] = useState(false);
    const menuProfileRef = useRef(null);

    useClickOutside([menuProfileRef], () => {
        if (collapsedMenuProfile) {
            setCollapsedMenuProfile(false);
        }
    });
    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
                <div className="input">
                    <Search
                        size={20}
                        className="text-slate-300"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
                    />
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    <Sun
                        size={20}
                        className="dark:hidden"
                    />
                    <Moon
                        size={20}
                        className="hidden dark:block"
                    />
                </button>
                <button className="btn-ghost size-10">
                    <Bell size={20} />
                </button>
                <div className="relative">
                    <MenuProfile
                        ref={menuProfileRef}
                        collapsed={collapsedMenuProfile}
                        setCollapsed={setCollapsedMenuProfile}
                    />
                </div>
            </div>
        </header>
    );
};
Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};
