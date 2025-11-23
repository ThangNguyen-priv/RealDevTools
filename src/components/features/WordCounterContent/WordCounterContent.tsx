import { useEffect, useState } from "react";
import SingleInputForm from "../../common/Form/SingleInputForm";
import WordCounterPanel from "../../common/WordCouterPanel/WordCounterPanel";

export default function WordCounterContent() {
    const [input, setInput] = useState<string>("");
    const [wordArray, setWordArray] = useState<React.ReactNode[]>([]);

    const outputWord = input.match(/\b\w+\b/g)?.length || 0;
    const outputCharacter = input.length;

    useEffect(() => {
        const words =
            input
            .toLowerCase()
            .match(/\b\w+\b/g) || [];
        // Tách các từ bằng biểu thức chính quy, bao gồm cả chữ cái và số
        // \b là ranh giới từ, \w+ là một hoặc nhiều ký tự chữ cái (a-z,0-9), số hoặc gạch dưới
        // g là global, tìm tất cả các từ trong chuỗi
        // \b\w+\b sẽ tìm tất cả các từ trong chuỗi

        // Đếm số lần xuất hiện của từng từ bằng Map để tối ưu hiệu suất
        // tạo map count lưu trữ các cặp key và value {word: string, count: number} map giống obj nhưng key có thể là bất kỳ kiểu dữ liệu nào
        const wordCountMap = new Map<string, number>();
        // Duyệt qua mảng từ và cập nhật số lần xuất hiện
        words.forEach((word) => {
            const currentCount = wordCountMap.get(word);
            if (currentCount === undefined) {
                wordCountMap.set(word, 1);
            } else {
                wordCountMap.set(word, currentCount + 1);
            }
        });
        // Chuyển đổi Map thành mảng các React Node để hiển thị
        const mapEntries = wordCountMap.entries();
        // map tra ve mảng các cặp [word, count] từ Map
        // console.log("Map Entries:", mapEntries);
        const mapEntriesArray = Array.from(mapEntries);
        // Chuyển đổi Map thành mảng các đối tượng { word: string, count: number }
        // console.log(
        //     "mapEntriesArray",
        //     mapEntriesArray.map(([word, count]) => ({ word, count }))
        // );

        const result = mapEntriesArray.map(([word, count]) => (
            <div key={word} className="border-b py-1 px-2 flex justify-between">
                <span>{word}</span>
                <span className="text-gray-500">x{count}</span>
            </div>
        ));

        setWordArray(result);
    }, [input]);

    return (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 p-4">
            <SingleInputForm input={input} setInput={setInput} />

            <div className="grid grid-rows-[auto_1fr]">
                <div className="flex flex-row h-fit gap-4">
                    <WordCounterPanel title="Words" output={outputWord}/>
                    <WordCounterPanel title="Characters" output={outputCharacter}/>
                </div>
                <div className="border rounded-2xl w-full h-46 mt-4 p-2 flex flex-col overflow-y-auto grow">
                    <h2 className="text-lg font-semibold mb-2">Words and Occurrences</h2>
                    <div className="text-base">{wordArray}</div>
                </div>
            </div>
        </div>
    );
}
