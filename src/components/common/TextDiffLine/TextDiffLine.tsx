import type { TextDiffLineProps } from "../../../types";
import './index.css'

export default function TextDiffLine({
    index,
    isDifferent,
    content,
    variant,
    hasEmpty,
}: TextDiffLineProps) {
    // Các màu sắc
    const leftColor = "bg-green-500 text-green-900 underline";
    const rightColor = "bg-red-200 text-red-900 underline";
    
    // Màu nền cho dòng trống
    const emptyStyle = "bg-diagonal-stripes bg-gray-600"; 
    
    // Xác định style cần áp dụng
    const bgStyle = hasEmpty 
        ? emptyStyle 
        : (variant === "left" ? leftColor : rightColor);
    
    // LUÔN áp dụng style nếu isDifferent HOẶC hasEmpty
    
    const shouldApplyStyle = isDifferent || hasEmpty;
    
    return (
        <div
            className={`whitespace-pre-wrap font-mono flex justify-between
            ${shouldApplyStyle ? `${bgStyle} h-7 p-2 rounded flex items-center hover:text-lg` : ""}`}>
            <div className="flex-grow">{content}</div>
            <div className="ml-4 text-sm flex-shrink-0">{index + 1}</div>
        </div>
    );
}
