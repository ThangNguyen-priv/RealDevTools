import type { SingleButtonProps } from "../../../types";

export default function ReviewButton({ name, handleClick,className }: SingleButtonProps) {
    return (
        <button
            onClick={handleClick}
            className={className}>
            {name}
        </button>
    );
}
