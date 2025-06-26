import { useEffect, useRef, useState } from "react";
import SingleInputForm from "../../common/Form/SingleInputForm";
import { SingleButton } from "../../common/Button";
import TextDiffLine from "../../common/TextDiffLine/TextDiffLine";
import TextDiffResult from "./TextDiffResult";

export default function TextDiffContent() {
    const [inputLeft, setInputLeft] = useState("");
    const [inputRight, setInputRight] = useState("");
    const [resultLeft, setResultLeft] = useState<React.ReactNode[]>([]);
    const [resultRight, setResultRight] = useState<React.ReactNode[]>([]);
    const [same, setSame] = useState<boolean>(false);

    // tự động xuống cuối trang
    const BottomRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (BottomRef.current) {
            BottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[same, resultLeft, resultRight]);

    const OnDiffCheck = () => {
        if (!inputLeft || !inputRight) {
            alert("Vui lòng nhập cả hai trường để so sánh");
            return;
        }

        const leftLines = inputLeft.trim().split("\n");
        const rightLines = inputRight.trim().split("\n");
        const maxLength = Math.max(leftLines.length, rightLines.length);

        const resultL = [];
        const resultR = [];

        let hasDifference = false;

        for (let i = 0; i < maxLength; i++) {
            // neu do dai dong ko bang nhau thi gan dong rong
            const leftLine = leftLines[i] ?? "";
            const rightLine = rightLines[i] ?? "";
            // so sanh dong trai va phai
            const isDifferent = leftLine !== rightLine;

            // neu khac nhau thi danh dau la khac nhau
            if (isDifferent) hasDifference = true;
            // tao mot div cho dong trai va phai
            resultL.push(
                <TextDiffLine
                    index={i}
                    isDifferent={isDifferent}
                    content={leftLine}
                    variant="left"
                />
            );

            resultR.push(
                <TextDiffLine
                    index={i}
                    isDifferent={isDifferent}
                    content={rightLine}
                    variant="right"
                />
            );
        }

        // neu khong co khac nhau thi set same la true
        setSame(!hasDifference);

        // set ket qua trai va phai
        setResultLeft(resultL);
        setResultRight(resultR);
    };

    const handleClear = () => {
        setInputLeft("");
        setInputRight("");
        setResultLeft([]);
        setResultRight([]);
    };

    return (
        <div className="space-y-6 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SingleInputForm input={inputLeft} setInput={setInputLeft} />
                <SingleInputForm input={inputRight} setInput={setInputRight} />
            </div>
            <div className="space-x-4">
                <SingleButton
                    name="Preview"
                    className="px-4 py-2 border-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/50 transition-colors"
                    handleClick={OnDiffCheck}
                />
                <SingleButton
                    name="Clear"
                    className="px-4 py-2 border-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/50 transition-colors"
                    handleClick={handleClear}
                />
            </div>
            <TextDiffResult same={same} resultLeft={resultLeft} resultRight={resultRight} ref={BottomRef} />
        </div>
    );
}
