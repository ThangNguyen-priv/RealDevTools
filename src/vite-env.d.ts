/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_API_BASE_URL?: string
  // Thêm các env variables khác nếu cần
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}