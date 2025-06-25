export type SingleInputFormProps =  {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
export type ReviewFormProps =  {
  // output: string;
  iframeRef: React.Ref<HTMLIFrameElement>;
}

export type SingleButtonProps = {
    name: string;
    className?: string;
    handleClick: () => void;
}
