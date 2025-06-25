export type ChatBotFormProps = {
    handleSubmit: (e: React.FormEvent) => void;
    handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userMessage: string;
    loading: boolean;
    messageRef: React.Ref<HTMLInputElement>;
};