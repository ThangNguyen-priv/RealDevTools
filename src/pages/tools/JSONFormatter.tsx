import ToolLayout from "../../layout/tools/ToolLayout";
import { ToolContext } from "../../context/ToolContext";

export default function JSONFormatter()
{
    const formatJson = (inputCode: string) => {
        try {
            const parsed = JSON.parse(inputCode);
            console.log("Parsed JSON:", parsed);
            const outputCode = JSON.stringify(parsed, null, 4);
            return { outputCode };
        } catch (error) {
            console.error("JSON parsing error:", error);
            return { outputCode: "" };
        }
    };
    return (
        <ToolContext.Provider value={{ format: formatJson }}>
            <ToolLayout />
        </ToolContext.Provider>
    )
}
