import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  color?: 'primary' | 'warning';
  size?: 'sm' | 'base';
};

const Button = ({ children, onClick = () => {}, type = 'primary', disabled, className, size = 'base', color = 'primary' }: ButtonProps) => {
  const _className = (() => {
    let classNames = `tracking-wide border font-semibold text-base ${size === 'base' ? 'px-8 py-3 rounded-lg ' : 'px-4 py-2 rounded '}`;
    classNames += className;

    if (type === 'primary') {
      if (disabled) {
        classNames += ' bg-slate-300 dark:bg-slate-700 border-slate-300 dark:border-slate-700 text-slate-50 dark:text-slate-500 !cursor-not-allowed';
      } else classNames += ` text-slate-50 ${color === 'primary' ? 'bg-blue-600 border-blue-600 ' : 'bg-rose-700 border-rose-700 '}`;
    } else {
      if (disabled) {
        classNames += ' border-slate-300 dark:border-slate-600 text-slate-300 dark:text-slate-600 !cursor-not-allowed ';
      } else classNames += ` ${color === 'primary' ? ' border-blue-600 text-blue-600 ' : ' border-rose-700 text-rose-700'}`;
    }

    return classNames;
  })();

  return (
    <button className={_className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
