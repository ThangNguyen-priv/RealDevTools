import ToolLayout from "../../layout/tools/ToolLayout";
import { ToolContext } from "../../context/ToolContext";

export default function HTMLFormatter() {
    const formatHTML = async (inputCode: string) => {
        const prettier = await import("prettier/standalone");
        const parserHtml = await import("prettier/parser-html");
        try {
            if (!inputCode.trim()) {
                alert("Please enter some HTML code to format.");
                return { outputCode: "" };
            }
            
            const formatted = await prettier.format(inputCode, {
                parser: "html",
                plugins: [parserHtml],
            });
            return { outputCode: formatted };
        } catch (error) {
            return {
                outputCode:
                    "Error formatting HTML: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    };

    return (
        <ToolContext.Provider value={{ format: formatHTML }}>
            <ToolLayout />
        </ToolContext.Provider>
    );
}
