import React from 'react';

type Card = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
};

const Card = ({ className = '', children, onClick = () => {}, clickable }: Card) => {
  const _className = (() => {
    let classNames = 'bg-white dark:bg-slate-800 rounded-2xl shadow-[0px_2px_4px_rgba(96,97,112,0.16)] ';
    classNames += className;

  if (clickable) {
      classNames += 'hover:cursor-pointer ';
    }

    return classNames;
  })();

  return (
    <div className={_className} onClick={() => onClick()}>
      {children}
    </div>
  );
};

export default Card;
