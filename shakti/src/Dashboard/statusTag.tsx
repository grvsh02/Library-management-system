import React from 'react';

type StatusTagProps = {
    status?: 'Returned' | 'Due' | 'Pending'
}

const DashBoardStatusTag = ({ status = 'Pending' }: StatusTagProps) => {
    return (
        <div className={`rounded-full px-2 py-1 text-xs font-semibold ${status === 'Pending' ? 'bg-yellow-400 text-black' : status === 'Returned' ? 'bg-green-400 text-white' : 'bg-red-400 text-white'}`}>
            {status}
        </div>
    )
}

export default DashBoardStatusTag