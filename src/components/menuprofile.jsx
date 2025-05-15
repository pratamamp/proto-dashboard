/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { profileMenuLink } from "@/constants";
import profileImg from "@/assets/profile-image.jpg";

export const MenuProfile = ({ collapsed, setCollapsed, ref }) => {
    return (
        <>
            <button
                className="size-10 overflow-hidden rounded-full"
                ref={ref}
                onClick={() => setCollapsed(!collapsed)}
            >
                <img
                    src={profileImg}
                    alt="profile image"
                    className="size-full object-cover"
                />
            </button>
            {collapsed && (
                <div
                    className="absolute right-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-colors focus:outline-none"
                    role="menu"
                >
                    <div
                        className="px-2 py-1"
                        role="none"
                    >
                        {profileMenuLink.map((item, index) => (
                            <a
                                key={index}
                                href="sign/in"
                                className="block flex items-center p-2 text-sm text-gray-500 hover:bg-blue-100"
                                role="menuitem"
                            >
                                <item.icon size={18} />
                                <span className="ml-2">{item.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
