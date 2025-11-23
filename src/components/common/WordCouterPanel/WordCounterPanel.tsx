import type { WordCounterPanelProps } from "../../../types";

export default function WordCounterPanel({output, title}: WordCounterPanelProps) {
    return (
        <div className="border rounded-2xl w-30 h-30 mt-5 flex flex-col items-center justify-center">
            <h2>{title}</h2>
            <p className="text-2xl font-bold">{output}</p>
        </div>
    );
}
