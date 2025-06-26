import type { TextDiffResultProps } from "../../../types/pages/textdiff.type";
import './index.css';

export default function TextDiffResult({ resultLeft, resultRight, same , ref}: TextDiffResultProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {same ? (
                <div className="col-span-2 bg-green-900/20 text-green-400 font-semibold text-xl rounded-lg border border-green-800 shadow-sm p-6 flex items-center justify-center">
                    Hai nội dung giống nhau hoàn toàn
                </div>
            ) : resultLeft.length > 0 && resultRight.length > 0 ? (
                <>
                    <div className="diff-show hover:shadow-md rounded-lg overflow-hidden">
                        <h2 className="text-lg font-semibold py-3 px-4 bg-blue-900/20 text-blue-300 border border-blue-800 flex items-center justify-center">
                            Nội dung bên trái
                        </h2>
                        <div className="space-y-1 border border-t-0 border-blue-800/50 p-3 bg-slate-900/50 overflow-x-auto max-h-[500px] overflow-y-auto [overscroll-behavior:contain]">
                            {resultLeft}
                        </div>
                    </div>
                    <div className="diff-show hover:shadow-md rounded-lg overflow-hidden">
                        <h2 className="text-lg font-semibold py-3 px-4 bg-purple-900/20 text-purple-300 border border-purple-800 flex items-center justify-center">
                            Nội dung bên phải
                        </h2>
                        <div className="space-y-1 border border-t-0 border-purple-800/50 p-3 bg-slate-900/50 overflow-x-auto max-h-[500px] overflow-y-auto [overscroll-behavior:contain]">
                            {resultRight}
                        </div>
                    </div>
                </>
            ) : null}
            <div ref={ref}/>
        </div>
    );
}