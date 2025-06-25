import type { ConvertTextAreaProps } from "../../../types";

export default function ConvertTextArea({ input, setInput, output }: ConvertTextAreaProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-medium">Input CSS:</label>
                <textarea
                    wrap="off"
                    className="w-full h-60 md:h-90 p-3 border border-border rounded-lg bg-input text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary overflow-x-auto"
                    placeholder="Enter your code here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Formatted Output:</label>
                <textarea
                    wrap="off"
                    className="w-full h-60 md:h-90 p-3 border border-border rounded-lg bg-muted text-foreground resize-none overflow-x-auto "
                    placeholder="Formatted will appear here..."
                    value={output}
                    readOnly
                />
            </div>
        </div>
    );
}
