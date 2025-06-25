import SingleInputForm from "../../common/Form/SingleInputForm";
import ReviewForm from "../../common/Form/ReviewForm";
import { useRef, useState } from "react";
import { SingleButton } from "../../common/Button";

export default function ReviewContent() {
    const [input, setInput] = useState<string>("");
    const handleClear = () => {
        setInput("");
        const iframe = iframeRef.current;
        if (iframe) {
            const doc = iframe.contentDocument;
            if (doc) {
                doc.open();
                doc.write("");
                doc.close();
            }
        }
    };

    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handlePreview = () => {
        const iframe = iframeRef.current;
        if (iframe) {
            const doc = iframe.contentDocument;
            console.log("iframe doc", doc);
            if (doc) {
                doc.open();
                doc.write(input);
                doc.close();
            }
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SingleInputForm input={input} setInput={setInput} />
            <ReviewForm iframeRef={iframeRef} />
            <div className="space-x-4">
                <SingleButton
                    name="Preview"
                    className="px-4 py-2 border-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/50 transition-colors"
                    handleClick={handlePreview}
                />
                <SingleButton
                    name="Clear"
                    className="px-4 py-2 border-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/50 transition-colors"
                    handleClick={handleClear}
                />
            </div>
        </div>
    );
}
