import React from 'react';

type StatusTagProps = {
    status?: 'Available' | 'in Transit' | 'Not Available'
}

const StatusTag = ({ status = 'Available' }: StatusTagProps) => {
    return (
        <div className={`rounded-full px-2 py-1 text-xs font-semibold ${status === 'in Transit' ? 'bg-yellow-400 text-black' : status === 'Available' ? 'bg-green-400 text-white' : 'bg-red-400 text-white'}`}>
            {status}
        </div>
    )
}

export default StatusTag