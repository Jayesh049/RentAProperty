'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

// toh yaha par humne onClick ki functionality void dali hai and label ki functionality daali ahi
const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div
            onClick={onClick}
            className="
            px-4
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
            "
            >
                {label}
            </div>
    );
}


export default MenuItem;