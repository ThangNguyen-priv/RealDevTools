import { Link, useLocation } from "react-router-dom";
import type { SideBarItemsProps } from "../../../types";


export default function SidebarItem({ title, href = "/", icon }: SideBarItemsProps) {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <div
            className={`flex items-center gap-2 text-xs font-extralight transition-all duration-200 ${
                isActive ? "font-medium " : "hover:font-medium"
            }`}>
            <i className={`${icon} ${isActive ? "text-blue-400" : ""}`}></i>
            <Link
                to={href}
                className={`block w-full py-2 px-2 rounded-lg transition-colors duration-200 ${
                    isActive
                        ? "bg-primary text-blue-400 foreground font-medium"
                        : "hover:bg-accent hover:text-accent-foreground"
                }`}>
                {title}
            </Link>
        </div>
    );
}
