
import { useLocation } from "react-router-dom";
import { usePathName } from "../../../hooks";
import ReviewContent from "../../../components/features/ReviewContent/ReviewContent";
import ToolHeader from "../../../components/common/ToolHeader/ToolHeader";


export default function ReviewLayout() {
    const location = useLocation();
    const pathName = usePathName(location.pathname);

    return (
        <div className="space-y-6">
            <ToolHeader pathName={pathName} />
            <ReviewContent />
        </div>
    );
}
