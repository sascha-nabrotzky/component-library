import React from 'react';
import './button.css';

type ButtonProps = {
    label: string;
    backgroundColor: string;
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
    label,
    backgroundColor,
    onClick,
    ...props
}) => {
    return (
        <button
            className="sn-ui-button"
            style={{ backgroundColor: backgroundColor }}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
};
