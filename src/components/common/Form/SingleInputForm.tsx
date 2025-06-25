import type { SingleInputFormProps } from "../../../types";

export default function SingleInputForm({ input, setInput }: SingleInputFormProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">Input:</label>
            <textarea
                wrap="off"
                className={`w-full h-60 md:h-80 p-3 border border-border text-sm rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary overflow-x-auto font-mono`}
                placeholder="Enter your code here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}
