'use client';

import { Alert } from '@heroui/alert';
import { useState, useEffect } from 'react';
import { InfoIcon, X } from 'lucide-react';

type TopAlertProps = {
    message: string;
    color?: 'success' | 'danger' | 'warning' | 'primary' | 'secondary' | 'default';
    variant?: 'solid' | 'flat' | 'faded' | 'bordered';
    icon?: React.JSX.Element;
    autoHideDuration?: number; // in milliseconds
    onClose?: () => void;
};

export default function TopAlert({
    message,
    color = 'primary',
    variant = 'flat',
    icon = <InfoIcon size={20} className="text-inherit" />,
    autoHideDuration = 3000,
    onClose,
}: TopAlertProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    // Auto-close after duration
    useEffect(() => {
        const timer = setTimeout(() => handleClose(), autoHideDuration);
        return () => clearTimeout(timer);
    }, [autoHideDuration]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, 300); // match animation duration
    };

    if (!isVisible) return null;

    return (
        <div
            className={`
        fixed top-0 left-0 right-0 z-50
        flex justify-center
        p-4
        bg-transparent
        ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}
      `}
        >
            <Alert
                variant={variant}
                color={color}
                isClosable={false} // disable built-in close button
                className="max-w-xl w-full relative pr-12" // space for custom close btn
                icon={
                    <div style={{ width: '1rem' }}>
                        {icon}
                    </div>
                }
                radius="full"
            >
                {message}

                {/* MANUAL CLOSE BUTTON */}
                <button
                    onClick={handleClose}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-default-500 hover:opacity-70 transition-opacity"
                    aria-label="Close alert"
                >
                    <X size={18} />
                </button>
            </Alert>
        </div>
    );
}
