import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface MobileItemProps {
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem = ({ href, icon: Icon, active, onClick }: MobileItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(`
      group
      flex
      gap-x-3
      text-sm
      leading-6
      font-semibold
      w-full
      justify-center
      p-4
      text-gray-500
      hover:text-black
      hover:bg-gray-100
      `)}
    >
      <Icon className="w-6 h-6" />
    </Link>
  );
};

export default MobileItem;
