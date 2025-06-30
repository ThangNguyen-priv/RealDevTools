
export interface FormatterProps {
  input: string
  output: string
  onInputChange: (value: string) => void
  onFormat: () => void
}


export type TextDiffResultProps = {
    resultLeft: React.ReactNode[];
    resultRight: React.ReactNode[];
    same: boolean;
    ref: React.Ref<HTMLDivElement>;
};

export type TextDiffLineProps = {
    index: number;
    isDifferent: boolean;
    content: string;
    variant: "left" | "right";
    hasEmpty: boolean;
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


export type WordCounterPanelProps = {
    output: number;
    title: string;
}
