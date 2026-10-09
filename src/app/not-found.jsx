import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>
            <h2 className='text-4xl font-bold text-red-500'>Ooopps Sorry! Page Not Found</h2>
            <Link href="/">
            <button className='btn bg-red-400 text-white'>Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;