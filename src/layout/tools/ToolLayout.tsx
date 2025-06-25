import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePathName } from "../../hooks";
import ToolHeader from "../../components/common/ToolHeader/ToolHeader";
import ConvertTextArea from "../../components/common/TextArea/ConvertTextArea";
import ToolButton from "../../components/common/Button/ToolButton";



export default function ToolLayout() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const location = useLocation();
    const pathName = usePathName(location.pathname);

    return (
        <div className="space-y-6">
            <ToolHeader pathName={pathName} />
            <ConvertTextArea input={input} setInput={setInput} output={output} />
            <ToolButton input={input} setInput={setInput} setOutput={setOutput} />
        </div>
    );
}
