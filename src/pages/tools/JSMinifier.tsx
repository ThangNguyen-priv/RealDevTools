import ToolLayout from "../../layout/tools/ToolLayout";
import { ToolContext } from "../../context/ToolContext";

export default function JSMinifier() {
    const minifierJs = (inputCode: string) => {
        if (!inputCode.trim()) {
            alert("Please enter some JavaScript code to minify.");
            return { outputCode: "" };
        }
        try {
            // Simple JavaScript minification logic
            const minified = inputCode
                .replace(/\s*\n\s*/g, "")
                .replace(/^\s*\n/gm, "")
                .replace(/;\n/gm, ";")
                .replace(/{\s*\n/g, "{")
                .replace(/}\s*\n/g, "}")
                .replace(/,\s*\n/g, ",")
                .trim();
            return { outputCode: minified };
        } catch (error) {
            return {
                outputCode:
                    "Error minifying JavaScript: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    };

    return (
        <ToolContext.Provider value={{ format: minifierJs }}>
            <ToolLayout />
        </ToolContext.Provider>
    );
}
