import { useLocation } from "react-router-dom";
import ToolHeader from "../../../components/common/ToolHeader/ToolHeader";
import { usePathName } from "../../../hooks";
import TextDiffContent from "../../../components/features/TextDiffContent/TextDiffContent";

export default function TextDiffLayout() {
    const location = useLocation();
    const pathName = usePathName(location.pathname);
    return (
        <div className="space-y-6">
            <ToolHeader pathName={pathName} />
            <TextDiffContent />
        </div>
    );
}
