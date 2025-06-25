import type { TextDiffLineProps } from "../../../types/pages/textdiff.type";

export default function TextDiffLine({index,isDifferent, content, variant}: TextDiffLineProps) 
{
    const Color = variant === "left" ? "bg-green-500 text-green-900" : "bg-red-200 text-red-900";
    return (
        <div
            key={`left-${index}`}
            className={`whitespace-pre-wrap font-mono flex justify-between 
            ${isDifferent 
            ?  (`${Color} h-8 p-2 rounded`)
            : ""}`
            }>
            <div className="flex-grow">{content}</div>
            <div className="ml-4 text-sm flex-shrink-0">{index}</div>
        </div>
    );
}
