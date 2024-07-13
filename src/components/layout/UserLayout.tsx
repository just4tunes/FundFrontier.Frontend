import React from 'react';
// import Sidebar from '../user/Sidebar';
import { Outlet } from 'react-router-dom';

const UserLayout: React.FC = () => {
  // const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="custom-font-jakarta dashboard flex bg-[rgb(248, 248, 248)] m-0 mx-auto">
      {/* <div className={`max-w-[${isSidebarExpanded ? '230px relative' : '80px'}] bg-white ease-in-out duration-300 border border-l-4`}>
        <Sidebar isSidebarExpanded={isSidebarExpanded} />
      </div> */}
      <div className="w-full">
        <div className='flex justify-center w-full sticky top-0 bg-white z-30'>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
