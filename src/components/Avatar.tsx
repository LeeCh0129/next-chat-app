import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  user?: User;
}

const Avatar = ({ user }: AvatarProps) => {
  return (
    <div className="relative">
      <div
        className={`
        relative
        in-line-block
        rounded-full
        overflow-hidden
        h-9
        w-9
        md:h-11
        md:w-11
        `}
      >
        <Image
          fill
          src={user?.image || "/images/placeholder.jpg"}
          alt="Avatar"
        />
      </div>

      <span
        className={`
        absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white md:h-3 md:w-3
        `}
      />
    </div>
  );
};

export default Avatar;
