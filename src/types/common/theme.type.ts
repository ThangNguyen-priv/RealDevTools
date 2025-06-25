// types/theme.ts  
export type Theme = "dark" | "light" | "system"

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}