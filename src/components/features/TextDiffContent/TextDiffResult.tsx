import type { TextDiffResultProps } from "../../../types/pages/textdiff.type";

export default function TextDiffResult({ resultLeft, resultRight, same }: TextDiffResultProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            {same ? (
                <div className="text-green-600 font-semibold text-xl col-span-2 flex justify-center rounded-2xl border p-3">
                    2 input không khác nhau
                </div>
            ) : resultLeft.length > 0 && resultRight.length > 0 ? (
                <>
                    <div>
                        <h2 className="text-lg font-semibold flex justify-center underline mb-2">
                            Left Differences:
                        </h2>
                        <div className="space-y-1 border rounded-2xl p-2">
                            {resultLeft}</div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold flex justify-center underline mb-2">
                            Right Differences:
                        </h2>
                        <div className="space-y-1 border rounded-2xl p-2">
                            {resultRight}</div>
                    </div>
                </>
            ) : null}
        </div>
    );
}
