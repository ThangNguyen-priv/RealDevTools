
// types/tools.ts
export interface FormatterProps {
  input: string
  output: string
  onInputChange: (value: string) => void
  onFormat: () => void
}

export interface ToolConfig {
  id: string
  name: string
  description: string
  icon: string
  path: string
}


export type HeaderLayoutProps = {
  pathName: string;
}


export type ToolButtonProps = {
    input: string;
    setInput: (value: string) => void;
    setOutput: (value: string) => void;
}

export type ConvertTextAreaProps = {
    input: string;
    setInput: (value: string) => void;
    output: string;
}

export type ToolContextProps = {
    format: (inputCode:string) => { outputCode: string }
    |Promise<{ outputCode: string }>;
};
