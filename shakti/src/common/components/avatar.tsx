import React from 'react';

interface AvatarProps {
    imgUrl?: string | null | undefined;
    size: 'md' | 'base' | 'sm' | 'xs' | 'custom';
    altText?: string;
    onClick?: () => void;
    altColors?: AvatarColorProps;
    roundedFull?: boolean;
    className?: string;
}

interface AvatarColorProps {
    fillColor?: string;
    textColor?: string;
};

const Avatar = ({ size = 'base', imgUrl, altText, onClick = () => {}, altColors, roundedFull = false, className = '' }: AvatarProps) => {
    const getName = () => {
        const _alt = altText?.trim() || '';
        const words = _alt.split(' ');
        if (words.length > 1) return _alt[0] + words[words.length - 1][0];
        else if (_alt.length > 1) return _alt[0] + _alt[1];
        return _alt[0] || '';
    };

    const iconSize =
        size === 'md' ? '96px' : size === 'base' ? '64px' : size === 'sm' ? '40px' : size === 'xs' ? '16px' : size === 'custom' ? undefined : undefined;

    const _className = (() => {
        if (size === 'md') return `w-24 h-24  ${roundedFull ? ' rounded-full ' : 'rounded-lg '}`;
        if (size === 'base') return `w-16 h-16   ${roundedFull ? ' rounded-full ' : 'rounded-md '}`;
        if (size === 'sm') return `w-10 h-10  ${roundedFull ? ' rounded-full ' : ' rounded '}`;
        if (size === 'xs') return `w-4 h-4  ${roundedFull ? ' rounded-full ' : ' rounded-sm '}`;
    })();

    const renderPlaceholder = () => (
        <svg
            className={_className + className}
            width={iconSize}
            height={iconSize}
            viewBox="0 0 75 75"
            preserveAspectRatio="xMinYMid meet"
            style={{ backgroundColor: altColors?.fillColor || '#ddd' }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill={altColors?.textColor || '#222'} fontSize="32" fontWeight="400">
                {getName()?.toUpperCase()}
            </text>
        </svg>
    );

    return (
        <>
            {!imgUrl?.length ? (
                <div
                    className={`
        ${_className + className + (typeof onClick === 'function' ? ' hover:cursor-pointer' : '')} object-cover `}
                >
                    {renderPlaceholder()}
                </div>
            ) : (
                <img
                    src={imgUrl}
                    alt="Not Found :_("
                    onClick={onClick}
                    className={`
        ${_className + className + (typeof onClick === 'function' ? ' hover:cursor-pointer' : '')} object-cover `}
                />
            )}
        </>
    );
};

export default Avatar;
