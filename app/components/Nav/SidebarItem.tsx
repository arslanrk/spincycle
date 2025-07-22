import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  expandable?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  nested?: boolean;
}

export function SidebarItem({ icon, label, open, expandable, expanded, onClick, nested }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center cursor-pointer px-4 py-2 hover:bg-gray-700 hover:border-l-2 hover:border-red-500 ${nested ? 'pl-6' : ''}`}
      onClick={onClick}
    >
      <span className="text-lg">{icon}</span>
      {open && <span className="ml-3 flex-1">{label}</span>}
      {expandable && open && (
        <span>{expanded ? <FiChevronDown /> : <FiChevronRight />}</span>
      )}
    </div>
  );
}