import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Background from '../../assets/ChatBc.png'

interface BreadCrumbProps {
    name: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ name }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Get the last pathname segment
    const lastPathname = pathnames[pathnames.length - 1];

    return (
        <div className='p-4 rounded-lg w-full h-200px mb-20px p-30 bg-[#ebf3fe] flex justify-between items-center relative '>
            <div>
                <h1 className='text-[1.3rem] mb-1 font-bold'>{name}</h1>
                <p>
                    <Link to="/dashboard">Dashboard . </Link>
                    {lastPathname && (
                        <>
                            {/* <span className='text-blue-500 hover:underline'>.</span> */}
                            <span>{lastPathname.replace(/-/g, ' ')}</span>
                        </>
                    )}
                </p>
            </div>
            <img src={Background} className='hidden md:block max-h-[100px] object-contain' />
        </div>
    );

};

export default BreadCrumb;
