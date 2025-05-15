import React from "react";
import LoginForm from "@/components/loginform";

function _AuthLayout() {
    return (
        <section className="flex min-h-screen items-stretch">
            {/* side 1 lg */}
            <div className="z-0 flex w-full bg-slate-100 px-2 text-center dark:bg-slate-950 lg:w-1/3">
                <div className="absolute inset-0 z-10 items-center bg-blue-800 lg:hidden" />
                <div className="z-20 flex h-screen w-full flex-col py-2">
                    <div className="flex justify-between">
                        <div className="flex h-8 items-center space-x-2 px-4">
                            <span>LOGO</span>
                        </div>
                        <div>
                            <span>Don't have account?</span>
                            <span className="ml-1">
                                <a href="">Sign up!</a>
                            </span>
                        </div>
                    </div>

                    <div className="flex h-[calc(100vh_-_6rem)] w-full flex-1 flex-col items-center justify-center px-2">
                        <div className="w-2/3 min-w-max max-w-md rounded-lg">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* side 2 lg */}
            <div className="relative hidden w-2/3 items-center bg-slate-100 p-4 dark:bg-slate-950 lg:flex">
                <div className="h-full w-full rounded-lg border-2 bg-slate-200 p-3"></div>
            </div>
        </section>
    );
}

export default AuthLayout;
