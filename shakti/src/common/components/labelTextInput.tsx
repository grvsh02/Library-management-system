import React from 'react';

type IconTextInput = {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value : any) => void;
    charLimit?: number;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    type?: ('email' | 'number' | 'password' | 'text' | 'textarea' | 'url')
    errorText?: string;
    showCharLimit?: boolean;
    showLimit?: boolean;
}


const LabelTextInput = ({ placeholder="Email Address", label = "label" , errorText, charLimit, disabled, onChange = () => {}, required, type, className, value }: IconTextInput) => {

    const [inputValue, setInputValue] = React.useState(value !== null ? value : "");

    React.useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChange = (e: any) => {
        const value = e.currentTarget.value;
        if (charLimit == null || (value.length <= charLimit)) {
            if (typeof onChange === 'function')
                if (type === 'number')
                    onChange(parseInt(value));
                else
                    onChange(value);
            setInputValue(value);
        }
    };

    return (
        <div className={`w-full h-full text-[#030e19] text-sm ${className}`}>
            <div className={charLimit ? 'w-2/3 px-0' : 'w-full px-0'}>
                {label &&
                    <label className="text-lg opacity-80" aria-hidden={false}>
                        {label}
                        {required && <span className="required-marker">*</span>}
                    </label>}
                {(charLimit) &&
                    <div className="w-1/3 opacity-80 px-1 flex items-end justify-end">
                        {value?.length}/{charLimit}
                    </div>}
            </div>
            <input className="w-full p-2 border-2 border-[#828282]" placeholder={placeholder} onChange={handleChange} disabled={disabled} value={inputValue} />
            {errorText &&
                <div className="text-red-400 mt-1 text-xs italic">
                    {errorText}
                </div>}
        </div>

    )
}

export default LabelTextInput;