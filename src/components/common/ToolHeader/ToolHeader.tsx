import type { HeaderLayoutProps } from "../../../types";

export default function ToolHeader({pathName}:HeaderLayoutProps) {
    return (
        <div className="border-b border-border pb-4">
            <h2 className="text-3xl font-bold text-foreground">{pathName}</h2>
            <p className="text-muted-foreground mt-2">Tool for dev that all</p>
        </div>
    );
}
