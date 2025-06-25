export type TextDiffResultProps = {
    resultLeft: React.ReactNode[];
    resultRight: React.ReactNode[];
    same: boolean;
};

export type TextDiffLineProps = {
    index: number;
    isDifferent: boolean;
    content: string;
    variant: "left" | "right";
}
