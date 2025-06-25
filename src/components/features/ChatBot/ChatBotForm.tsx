import type { ChatBotFormProps } from "../../../types";


export default function ChatBotForm({
    handleSubmit,
    handleUserInput,
    userMessage,
    loading,
    messageRef
}: ChatBotFormProps) {

    return (
        <form
            className="absolute bottom-0 left-0 right-0 p-2 bg-white flex gap-2 border-t"
            onSubmit={handleSubmit}
        >
            <input
            ref={messageRef}
            type="text"
            placeholder="Nhập vào câu hỏi đến bot"
            className="flex-1 h-10 text-black bg-blue-100 border border-blue-400 rounded-md text-xs p-2 focus:bg-blue-200 focus:border-blue-400 focus:outline-none"
            onChange={handleUserInput}
            value={userMessage}
            disabled={loading}
            />
            <button
            className="bg-blue-500 text-white rounded-md px-4 hover:bg-blue-600 disabled:opacity-50"
            type="submit"
            disabled={loading || !userMessage.trim()}
            >
            {loading ? "Gửi..." : "Gửi"}
            </button>
        </form>
    );
}