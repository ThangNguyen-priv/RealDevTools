

import type { ChatBotResponseProps } from "../../../types";
import ChatBotSingleMessage from "./ChatBotSingleMessage";



export default function ChatBotResponse({ history, loading, messageEndRef }: ChatBotResponseProps) {


    return (
        <main className="flex-1 overflow-y-auto p-4 pb-14">
            <div className="flex flex-col gap-2" >
                {!loading && history.length === 0 ? (
                    <p className="text-gray-800 p-2">Hãy bắt đầu cuộc trò chuyện!</p>
                ) : (
                    history.map((item, idx) => (
                        <ChatBotSingleMessage
                            idx={idx}
                            item={item}
                        />
                    ))
                )}

                {/* div cuoi de scroll den khi bot response */}
                <div ref={messageEndRef} />

                {loading && (
                    <div className="flex justify-start bg-gray-200 rounded p-2">
                        <div className="text-sm text-gray-800 p-2">
                            <strong>Bot: </strong>
                            <span className="animate-ping">Đang trả lời...</span>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}