import React from "react";
import type { ToolContextProps } from "../types";



const ToolContext = React.createContext<ToolContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useToolContext() {
    const context = React.useContext(ToolContext);
    if (!context) {
        throw new Error("useToolContext must be used within a ToolProvider");
    }
    return context;
}

export { ToolContext };
