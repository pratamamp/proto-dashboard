import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/utils/cn";

function CardValue({ title, value, percentValue, isTrending, Icon }) {
    return (
        <div className="card">
            <div className="card-header">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                    <Icon size={26} />
                </div>
                <p className="card-title">{title}</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{value}</p>

                <span
                    className={cn(
                        "flex w-fit items-center gap-x-2 rounded-full border px-2 py-1 font-medium",
                        isTrending
                            ? "border-blue-500 text-blue-500 dark:border-blue-600 dark:text-blue-600"
                            : "border-red-500 text-red-500 dark:border-red-500 dark:border-red-600 dark:text-red-500",
                    )}
                >
                    {isTrending ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                    {percentValue}
                </span>
            </div>
        </div>
    );
}

export default CardValue;
