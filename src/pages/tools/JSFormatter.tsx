
import { ToolContext } from "../../context/ToolContext";
import ToolLayout from "../../layout/tools/ToolLayout";

export default function JSFormatter() {
    const formatJs = (inputCode: string) => {
        if (!inputCode.trim()) {
            alert("Please enter some JavaScript code to format.");
            return { outputCode: "" };
        }
        try {
            // Simple JavaScript formatting logic
            const formatted = inputCode
                .replace(/{/mg, "{\n \t")
                .replace(/}/mg, "\n}")
                .replace(/;/mg, "\n")
                .replace(/^\s*\n/mg, "")
                .replace(/\n\)/g, ")")
            return { outputCode: formatted };
        } catch (error) {
            return {
                outputCode:
                    "Error formatting JavaScript: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    };
    
    return (
        <ToolContext.Provider value={{ format: formatJs }}>
            <ToolLayout />
        </ToolContext.Provider>
    );
}
