export const apiConfig = {
    chatbot: {
        BASE_URL: '', // Add your base URL here
        api_key: import.meta.env.VITE_API_KEY,
        model: 'gemini-1.5-flash',
        contents:''
    },
    sidebar:{
        url:'/data/sidebarJSON.json'
    },
    timeout: 3000,
} as const

if(!apiConfig.chatbot.api_key)
{
    console.warn('chat bot key not found!!!1');
}