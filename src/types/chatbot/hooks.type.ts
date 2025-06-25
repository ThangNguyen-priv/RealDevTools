import type { ChatMessage } from './messages.type';

export type ChatBotHookReturn = {
    history: ChatMessage[];
    loading: boolean; // Thêm loading
    sendMessage: (message: string) => Promise<void>;
    clearHistory: () => void;
};