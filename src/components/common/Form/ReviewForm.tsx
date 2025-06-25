import type { ReviewFormProps } from "../../../types";
// Import hook theme

export default function ReviewForm({ iframeRef }: ReviewFormProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">Output:</label>
            <iframe
                className="w-full h-60 md:h-90 p-3 border border-border rounded-lg bg-sidebar-primary text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary overflow-x-auto font-mono"
                ref={iframeRef}
                title="Live Preview"></iframe>
        </div>
    );
}
