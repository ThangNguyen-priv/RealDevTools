import React, { useEffect, useRef, useState } from "react";
import { useChatBot } from "../../hooks";
import { ChatBotForm, ChatBotHeader, ChatBotResponse } from "../../components/features/ChatBot";
import { SingleButton } from "../../components/common/Button";

export default function ChatBotLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");

    const messageRef = useRef<HTMLInputElement>(null);
    const messageEndRef = useRef<HTMLDivElement>(null);
    // Use the custom hook
    const { history, loading, sendMessage, clearHistory } = useChatBot();

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send message through the hook
        sendMessage(userMessage);
        // Clear input
        setUserMessage("");
    };

    useEffect(() => {
        if (!loading && messageRef.current) {
            messageRef.current.focus();
        }
        // Scroll to the bottom of the chat when new messages are added
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, loading]);

    return (
        <div>
            <SingleButton
                name="💬"
                className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors text-blue-700 hover:bg-pink-200
                bg-blue-500 fixed bottom-4 right-4 z-50"
                handleClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="fixed bottom-4 right-4 z-50 flex flex-col w-60 h-80 md:h-120 md:w-80 shadow-lg bg-gradient-to-b from-blue-100 to-blue-300 rounded-md overflow-y-auto chatbot-popup">
                    {/* Header */}
                    <ChatBotHeader setIsOpen={setIsOpen} clearHistory={clearHistory} />

                    {/* Chat Response Content */}
                    <ChatBotResponse
                        history={history}
                        loading={loading}
                        messageEndRef={messageEndRef}
                    />

                    {/* Chat Form */}
                    <ChatBotForm
                        handleSubmit={handleSubmit}
                        handleUserInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUserMessage(e.target.value)
                        }
                        userMessage={userMessage}
                        loading={loading}
                        messageRef={messageRef}
                    />
                </div>
            )}
        </div>
    );
}
