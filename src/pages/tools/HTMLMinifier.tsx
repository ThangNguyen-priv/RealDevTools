import { ToolContext } from "../../context/ToolContext";
import ToolLayout from "../../layout/tools/ToolLayout";


export default function HTMLMinifier() {

    const minifierHTML = (inputCode:string) => {
        try {
            if (!inputCode.trim()) {
                alert("Please enter some HTML code to format.");
                return { outputCode: "" };
            }
            // Simple HTML formatting logic
            const formatted = inputCode
                .replace(/>\s+</g, "><") // Xóa khoảng trắng (gồm cả xuống dòng) giữa các thẻ
                .trim();
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
        <ToolContext.Provider value={{ format: minifierHTML }}>
            <ToolLayout />
        </ToolContext.Provider>
    );
}
