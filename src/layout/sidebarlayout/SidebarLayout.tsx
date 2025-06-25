/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./layout.css";

import { useLocation } from "react-router-dom";
import type { SidebarItem } from "../../types";
import { useSearchItem, useSidebarData } from "../../hooks";
import { SidebarContent } from "../../components/common/Sidebar";

export default function SidebarLayout({ menuItems = [] }: SidebarItem) {
    // State to manage sidebar open/close
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();
    // Custom hooks
    const { listData, loading, error } = useSidebarData(menuItems);
    const { searchTerm, setSearchTerm, filteredData, handleSearch } = useSearchItem(listData);

    //quản lý sidebar trên mobile
    useEffect(() => {
        const isMobile = window.innerWidth < 768; // md breakpoint
        if (isMobile && isOpen) {
            setIsOpen(false);
        }
    }, [location.pathname]);

    // Loading state
    if (loading) {
        return (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                    <i className="fa fa-spinner fa-spin text-2xl mb-2" />
                    <p className="text-sm">Loading sidebar data...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="text-center py-6 text-destructive">
                <i className="fa fa-exclamation-triangle mb-2 text-2xl" />
                <p className="text-sm mb-2">Error loading data: {error}</p>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Hamburger button */}
            <button
                className="block md:hidden fixed top-4 left-4 z-25 text-foreground bg-primary p-2 rounded"
                onClick={() => setIsOpen(true)}>
                <i className={`fa ${isOpen ? "" : "fa-bars"} text-lg`}></i>
            </button>

            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-card border-r border-border p-4 z-25">
                <SidebarContent
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onSearch={handleSearch}
                    filteredData={filteredData}
                />
            </div>

            {/* Mobile Sidebar - CHỈ KHI CẦN */}
            {isOpen && (
                <div className="block md:hidden fixed inset-0 z-30 bg-zinc-400/80">
                    {" "}
                    {/* ← Wrapper với z-20 */}
                    {/* Overlay */}
                    <div
                        className=" absolute inset-0 bg-background/60 backdrop-blur-xs"
                        onClick={() => setIsOpen(false)}
                    />
                    {/* Sidebar Menu */}
                    <div className="absolute w-60 top-0 left-0 h-full bg-card border-r border-border transform transition-transform duration-300 ease-in-out">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-2"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close sidebar">
                            <i className="fa fa-times text-lg" />
                        </button>

                        {/* Content */}
                        <div className="h-full overflow-y-auto p-4 pt-16">
                            <SidebarContent
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                onSearch={handleSearch}
                                filteredData={filteredData}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
