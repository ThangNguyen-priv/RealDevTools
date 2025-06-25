import { useLocation } from "react-router-dom";
import { useToolContext } from "../../../context/ToolContext";
import type { ToolButtonProps } from "../../../types";
import { usePathName } from "../../../hooks";

export default function ToolButton({ input, setInput, setOutput }: ToolButtonProps) {
    const location = useLocation();
    const pathName = usePathName(location.pathname);
    const { format } = useToolContext();

    const handleFormat = async () => {
        try {
            const { outputCode } = await format(input);
            setOutput(outputCode);
        } catch (error) {
            setOutput(
                "Error formatting code: " + (error instanceof Error ? error.message : String(error))
            );
        }
    };

    return (
        <div className="flex gap-3">
            <button
                onClick={handleFormat}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                {pathName.split(" ")[1]} {pathName.split(" ")[0]}
            </button>
            <button
                onClick={() => {
                    setInput("");
                    setOutput("");
                }}
                className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
                Clear
            </button>
        </div>
    );
}
