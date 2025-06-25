import { ToolContext } from "../../context/ToolContext";
import ToolLayout from "../../layout/tools/ToolLayout";

export default function CSSMinifier() {

    const minifierCSS = (inputCode:string) => {
        if (!inputCode.trim()) {
            alert("Please enter some code to minify.");
            return { outputCode: "" };
        }
        try {
            const formatted = inputCode
                .replace(/\s*{\s*/g, " {")
                .replace(/\s*}\s*/g, "}")
                .replace(/\s*;\s*/g, ";")
                .replace('/n', "")
                .trim();
            return { outputCode: formatted };
        } catch (error) {
            return {
                outputCode:
                    "Error minifying CSS: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    };

    return (
        <ToolContext.Provider value={{ format: minifierCSS}}>
            <ToolLayout />
        </ToolContext.Provider>
    );
}
