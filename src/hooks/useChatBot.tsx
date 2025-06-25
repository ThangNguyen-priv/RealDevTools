import { useState } from "react";
import { apiConfig } from "../components/config/apiConfig";
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatBotHookReturn, ChatMessage } from "../types";

export default function useChatBot(): ChatBotHookReturn {
    const [history, setHistory] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(false); // Thêm loading state

    // Initialize Google GenAI with the API key from the config
    const genAi = new GoogleGenerativeAI(apiConfig.chatbot.api_key);
    const model = genAi.getGenerativeModel({ model: apiConfig.chatbot.model });

    // Handle form submission
    const sendMessage = async (userMessage: string): Promise<void> => {
        if (!userMessage.trim()) return;

        // Thêm user message vào history truoc
        const userMsg: ChatMessage = {
            roles: "user",
            message: userMessage,
        };
        setHistory((prev) => [...prev, userMsg]);
        setLoading(true); // Bắt đầu loading
        
        try {
            // call gemini api
            const result = await model.generateContent(userMessage);
            const response = result.response;
            // await response sau them bot message vào history
            const botMsg: ChatMessage = {
                roles: "bot",
                message: response.text(),
            };

            setHistory((prevHistory) => [...prevHistory, botMsg]);
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            // Thêm thông báo lỗi vào history
            const errorMsg: ChatMessage = {
                roles: "bot",
                message: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.",
            };
            setHistory((prevHistory) => [...prevHistory, userMsg, errorMsg]);
        } finally {
            setLoading(false); // Kết thúc loading
        }
    };

    // Function to clear chat history
    const clearHistory = () => {
        setHistory([]);
    };

    return {
        history,
        loading,
        sendMessage,
        clearHistory,
    };
}
