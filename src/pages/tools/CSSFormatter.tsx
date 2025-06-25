import ToolLayout from "../../layout/tools/ToolLayout";
import { ToolContext } from "../../context/ToolContext";

export default function CSSFormatter() {

    const formatCSS = (inputCode: string) => {
        if (!inputCode.trim()) {
            alert("Please enter some code to format.");
            return { outputCode: "" };
        }
        try {
            const formatted = inputCode
                .replace(/\s*{\s*/g, " {\n  ")
                .replace(/;\s*/g, ";\n  ")
                .replace(/\s*}\s*/g, "\n}\n")
                .replace(/,\s*/g, ",\n");
            return { outputCode: formatted };
        } catch (error) {
            return {
                outputCode:
                    "Error formatting CSS: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    };

    return (
        <ToolContext.Provider value={{ format: formatCSS }}>
            <ToolLayout />
        </ToolContext.Provider>
    );
}
