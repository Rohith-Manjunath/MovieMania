import Link from "next/link";
import React from "react";

const MenuItem = ({ title, href, Icon }) => {
  return (
    <Link href={href} className="hover:text-amber-400 trasni duration-200">
      <span className="font-semibold hidden sm:inline">{title}</span>
      <span className="text-[20px] inline sm:hidden">
        <Icon />
      </span>
    </Link>
  );
};

export default MenuItem;
