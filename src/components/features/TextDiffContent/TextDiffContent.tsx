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
    useEffect(() => {
        if (BottomRef.current) {
            BottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [same, resultLeft, resultRight]);

    const OnDiffCheck = () => {
        if (!inputLeft || !inputRight) {
            alert("Vui lòng nhập cả hai trường để so sánh");
            return;
        }

        // Xử lý đầu vào
        const leftLines = inputLeft.split("\n");
        const rightLines = inputRight.split("\n");
        // Đồng bộ hóa các dòng trống giữa hai mảng
        const maxLength = Math.max(leftLines.length, rightLines.length);

        
        // Duyệt qua từng vị trí để đồng bộ dòng trống
        for (let i = 0; i < maxLength; i++) {
            const leftLine = leftLines[i] || "";
            const rightLine = rightLines[i] || "";
            
            // Nếu dòng phải trống mà dòng trái không trống, thêm dòng trống vào trái
            if (rightLine === "" && leftLine !== "" && i < rightLines.length) {
                leftLines.splice(i, 0, "");
            }
            // Nếu dòng trái trống mà dòng phải không trống, thêm dòng trống vào phải  
            else if (leftLine === "" && rightLine !== "" && i < leftLines.length) {
                rightLines.splice(i, 0, "");
            }

        }

        // Cân bằng độ dài cuối cùng
        while (leftLines.length < rightLines.length) {
            leftLines.push("");
        }
        while (rightLines.length < leftLines.length) {
            rightLines.push("");
        }

        const finalMaxLength = Math.max(leftLines.length, rightLines.length);

        const resultL = [];
        const resultR = [];

        let hasDifference = false;

        // Bắt đầu từ index 0 để xử lý tất cả các dòng
        for (let i = 0; i < finalMaxLength; i++) {
            // Lấy dòng tương ứng từ cả hai bên
            const leftLine = leftLines[i];
            const rightLine = rightLines[i];


            // Kiểm tra nếu dòng trái hoặc phải là trống
            const isLeftEmpty = leftLine === "";
            const isRightEmpty = rightLine === "";

            // Nếu cả hai đều trống thì xem như giống nhau
            const bothEmpty = isLeftEmpty && isRightEmpty;
            
            // Kiểm tra độ dài mảng ban đầu
            const lengthDifferent = leftLines.length < finalMaxLength || rightLines.length < finalMaxLength;
            
            // Đảm bảo đánh dấu là different nếu một bên có nội dung và bên kia trống
            const contentDifferent = leftLine !== rightLine;

            // Xác định nếu dòng này khác nhau (trừ trường hợp cả hai đều trống)
            const isDifferent = !bothEmpty && (contentDifferent || lengthDifferent);

            if (isDifferent) hasDifference = true;
            resultL.push(
                <TextDiffLine
                    key={`left-${i}-${Date.now()}`}
                    index={i}
                    isDifferent={isDifferent}
                    content={leftLine}
                    variant="left"
                    hasEmpty={isLeftEmpty}
                />
            );

            resultR.push(
                <TextDiffLine
                    key={`right-${i}-${Date.now()}`}
                    index={i}
                    isDifferent={isDifferent}
                    content={rightLine}
                    variant="right"
                    hasEmpty={isRightEmpty}
                />
            );
        }

        setSame(!hasDifference);
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
            <TextDiffResult
                same={same}
                resultLeft={resultLeft}
                resultRight={resultRight}
                ref={BottomRef}
            />
        </div>
    );
}
