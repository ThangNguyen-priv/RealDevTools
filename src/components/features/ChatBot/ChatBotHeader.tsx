import type { ChatBotHeaderProps } from "../../../types";


export default function ChatBotHeader({ setIsOpen, clearHistory }: ChatBotHeaderProps)
{
    return (
        <div className="flex items-center justify-center p-2 text-foreground font-bold bg-blue-500 rounded-t-md relative">
            <h1>ChatBot</h1>
            <button
                className="absolute top-2 right-3 text-white hover:text-red-400 hover:transform hover:scale-110"
                onClick={() => setIsOpen(false)}
                title="Close chat"
            >
                ✕
            </button>
            <button
                className="absolute top-2 left-3 text-white hover:transform hover:scale-110 text-sm"
                onClick={clearHistory}
                title="Clear chat"
            >
                🗑️
            </button>
        </div>
    )
}
