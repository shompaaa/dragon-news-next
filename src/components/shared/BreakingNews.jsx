import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        'id': 1,
        "title": "Breaking News"
    },
    {
        'id': 2,
        "title": "Breaking News"
    },
    {
        'id': 3,
        "title": "Breaking News"
    },
    {
        'id': 4,
        "title": "Breaking News"
    },
    {
        'id': 5,
        "title": "Breaking News"
    },
]

const BreakingNews = () => {
    return (
        <div className='flex gap-4 items-center justify-between bg-gray-200 py-3 px-3 rounded-md w-3/4 mx-auto'>
            <button className='btn bg-pink-700 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n => <span key={n.id}>{n.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;