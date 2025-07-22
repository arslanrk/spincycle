// components/Topbar.tsx
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';

interface TopbarProps {
  toggleSidebar: () => void;
}

export default function Topbar({ toggleSidebar }: TopbarProps) {
  return (
    <div className="flex items-center justify-between bg-white shadow px-4 py-2">
      <button onClick={toggleSidebar} className="text-xl">
        <FiMenu />
      </button>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 text-sm"
          />
        </div>
        <div className="relative group">
          <FiUser className="text-xl cursor-pointer" />
          <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded hidden group-hover:block z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}
