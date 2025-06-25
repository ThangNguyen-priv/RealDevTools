export type Role = 'user' | 'bot';

export type ChatMessage = {
    roles: Role;
    message: string;
};

export type ChatBotSingleMessageProps = {
    idx: number | string,
    item: ChatMessage
}

export type ChatBotResponseProps = {
    history: ChatMessage[];
    loading: boolean;
    messageEndRef?: React.Ref<HTMLDivElement>;
};
