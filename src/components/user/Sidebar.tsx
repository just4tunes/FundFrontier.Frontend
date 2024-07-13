import { Link, useLocation } from 'react-router-dom';
import { LuLayoutDashboard} from "react-icons/lu";
import { RiUserAddLine } from "react-icons/ri";
import { TbHomeStats, TbBuildingBank } from "react-icons/tb";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { useContext, useState } from 'react';
import { UserContext } from '../../hooks/userContext';
import ConfirmationModal from '../features/ConfirmationModal';

interface SidebarProps {
    isSidebarExpanded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarExpanded }) => {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);
    const [active, setActive] = useState(location.pathname);
    const { logout } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSetActive = (path: string) => {
        setActive(path);
    };

    const handleMouseEnter = () => {
        if (!isSidebarExpanded) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isSidebarExpanded) {
            setIsHovered(false);
        }
    };

    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmLogout = () => {
        logout();
    };

    return (
        <div className={`sidebar ${isSidebarExpanded ? 'absolute top-0 left-0' : 'hidden'} transition-all ease-in-out duration-300 md:block h-[100vh] overflow-auto sticky top-0 py-[10px] px-[20px] z-10 ${isSidebarExpanded || isHovered ? "w-[230px]" : "w-[80px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="px-[8px] mb-14">
                <Link to="/" className='flex items-center gap-1'>
                    <FaBitcoin size={30} color='#306ee8' />
                    {(isSidebarExpanded || isHovered) && <h1 className='text-[#306ee8] text-2xl font-bold ease-in-out duration-300'>BitWealth</h1>}
                </Link>
            </div>
            <menu className='mt-[10px]'>
                <ul>
                    <li className='text-[1rem]'>
                        <h5 className='text-[#2a3547] mt-[24px] px-[8px] font-bold text-[13px] leading-[26px]'>{isSidebarExpanded || isHovered ? 'HOME' : '...'}</h5>
                        <Link to="/dashboard" className={`flex ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg ${active === '/dashboard' ? 'bg-[#306ee8] text-white' : ''}`} onClick={() => handleSetActive('/dashboard')}>
                            <LuLayoutDashboard size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>Overview</span>}
                        </Link>
                        <Link to="/dashboard/profile" className={`flex ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg ${active === '/dashboard/profile' ? 'bg-[#306ee8] text-white' : ''}`} onClick={() => handleSetActive('/dashboard/profile')}>
                            <RiUserAddLine size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>My Profile</span>}
                        </Link>
                    </li>

                    <li className='text-[1rem]'>
                        <h5 className='text-[#2a3547] mt-[24px] px-[8px] font-bold text-[13px] leading-[26px]'>{isSidebarExpanded || isHovered ? 'APPS' : '...'}</h5>
                        <Link to="/dashboard/investments" className={`flex ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg ${active === '/dashboard/investments' ? 'bg-[#306ee8] text-white' : ''}`} onClick={() => handleSetActive('/dashboard/investments')}>
                            <TbHomeStats size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>Investments</span>}
                        </Link>
                        <Link to="/dashboard/transaction" className={`flex ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg ${active === '/dashboard/transaction' ? 'bg-[#306ee8] text-white' : ''}`} onClick={() => handleSetActive('/dashboard/transaction')}>
                            <TbBuildingBank size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>Transactions</span>}
                        </Link>
                        {/* <Link to="/dashboard/plans" className={`flex ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg ${active === '/dashboard/plans' ? 'bg-[#306ee8] text-white' : ''}`} onClick={() => handleSetActive('/dashboard/plans')}>
                            <TbReportMoney size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>Our Plans</span>}
                        </Link> */}
                    </li>

                    {/* <li className='text-[1rem]'>
                        <h5 className='text-[#2a3547] mt-[24px] px-[8px] font-bold text-[13px] leading-[26px]'>{isSidebarExpanded || isHovered ? 'TRANSACTIONS' : '...'}</h5>
                        <Link to="/dashboard/withdrawal" className={`flex ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg ${active === '/dashboard/withdrawal' ? 'bg-[#306ee8] text-white' : ''}`} onClick={() => handleSetActive('/dashboard/withdrawal')}>
                            <LuArrowUpSquare size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>Withdrawals</span>}
                        </Link>
                        <Link to="/dashboard/deposit" className={`flex ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg ${active === '/dashboard/deposit' ? 'bg-[#306ee8] text-white' : ''}`} onClick={() => handleSetActive('/dashboard/deposit')}>
                            <LuArrowDownSquare size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>Deposits</span>}
                        </Link>
                    </li> */}

                    <li className='text-[1rem]'>
                        <h5 className='text-[#2a3547] mt-[24px] px-[8px] font-bold text-[13px] leading-[26px]'>{isSidebarExpanded || isHovered ? 'EXTRAS' : '...'}</h5>
                        <button className={`flex w-full ${(isSidebarExpanded || isHovered) ? '' : 'justify-center items-center'} gap-[10px] font-medium text-[#2a3547] text-[14px] py-[10px] px-[8px] hover:bg-[#3399ff1a] hover:text-[#306ee8] rounded-lg`} onClick={handleLogoutClick}>
                            <MdOutlinePowerSettingsNew size={20} />
                            {(isSidebarExpanded || isHovered) && <span className='ease-in-out duration-300'>Log Out</span>}
                        </button>
                    </li>
                </ul>
            </menu>
            <ConfirmationModal
                opened={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmLogout}
                title="Confirm Logout"
                message="Are you sure you want to log out?"
            />
        </div>
    );
};

export default Sidebar;
