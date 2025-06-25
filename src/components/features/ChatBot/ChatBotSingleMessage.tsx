
import ReactMarkdown from "react-markdown";
import type { ChatBotSingleMessageProps } from "../../../types";

export default function ChatBotSingleMessage({ idx, item }: ChatBotSingleMessageProps) {
    const isUser = item.roles === "user";
    return (
        <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-2`}>
            <div
                key={idx}
                className={`
                    rounded-2xl p-1 pl-2 pr-2 max-w-xs break-words shadow-md shadow-gray-300
                    ${
                        isUser 
                        ? "bg-blue-200 text-right" 
                        : "bg-gray-200 text-left"
                    }
                `}
            >
                <div className="text-sm text-gray-800 p-2">
                    <strong>
                        {
                            isUser 
                            ? "Bạn: " 
                            : "Bot: "
                        }
                    </strong>
                    <ReactMarkdown>{item.message}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
