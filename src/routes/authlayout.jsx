import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <section className="flex min-h-screen items-stretch">
            <div className="z-0 flex w-full bg-slate-100 px-2 text-center transition-colors dark:bg-blue-950 lg:w-1/3">
                <div className="absolute inset-0 z-10 items-center bg-sky-600 lg:hidden">
                    <div
                        className="absolute inset-0 items-center bg-cover bg-no-repeat"
                        style={{ backgroundImage: "url(/bluebg.jpg)" }}
                    >
                        <div className="absolute inset-0 z-0 bg-black opacity-60" />
                    </div>
                </div>
                <div className="z-20 flex h-screen w-full flex-col py-2">
                    <div className="flex h-8 items-center justify-between space-x-2 text-slate-100 dark:text-slate-100 lg:text-slate-950">
                        <span>
                            <p>LOGO</p>
                        </span>
                        <div>
                            {location.pathname === "/sign/in" ? (
                                <>
                                    <span>Dont have account?</span>
                                    <span className="ml-1">
                                        <a
                                            onClick={() => navigate("sign/up")}
                                            href=""
                                        >
                                            Sign up
                                        </a>
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span>have account?</span>
                                    <span className="ml-1">
                                        <a
                                            onClick={() => navigate("sign/in")}
                                            href=""
                                        >
                                            Sign in
                                        </a>
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="mx-auto my-auto">
                        <Outlet />
                    </div>
                </div>
            </div>

            <div className="relative hidden w-2/3 items-center p-4 lg:flex">
                <div className="h-full w-full rounded-xl border-2 bg-gradient-to-br from-blue-500 to-purple-500 p-3"></div>
            </div>
        </section>
    );
};

export default AuthLayout;
