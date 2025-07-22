import { useState } from 'react';
import {
  FiHome,
  FiUsers,
  FiChevronDown,
  FiChevronRight,
} from 'react-icons/fi';
import { SidebarItem } from './SidebarItem';
import Logo from '../UI/Logo';
import { LuLoaderPinwheel } from 'react-icons/lu';

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const [expandUsers, setExpandUsers] = useState(false);

  return (
    <div className={`bg-gray-800 text-white ${open ? 'w-64' : 'w-16'} transition-all duration-300`}>
      <div className="h-full flex flex-col">
        <div className="p-4 text-blue-500">
          {
            !open ? <LuLoaderPinwheel size={22} /> : <Logo />
          }
          
        </div>
        <nav className="flex-1 space-y-2 mt-5">
          <SidebarItem icon={<FiHome />} label="Dashboard" open={open} />
          <div>
            <SidebarItem
              icon={<FiUsers />}
              label="Users"
              open={open}
              expandable
              expanded={expandUsers}
              onClick={() => setExpandUsers(!expandUsers)}
            />
            {expandUsers && open && (
              <div className="ml-8 space-y-2 text-sm text-gray-300">
                <SidebarItem icon={<FiChevronRight />} label="All Users" open={true} nested />
                <SidebarItem icon={<FiChevronRight />} label="Roles" open={true} nested />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}