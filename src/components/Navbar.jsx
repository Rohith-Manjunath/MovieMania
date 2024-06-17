import React from "react";
import NavMenuItem from "./NavMenuItem";

const Navbar = () => {
  return (
    <div className="p-4 bg-amber-400 flex items-center justify-center gap-4">
      <NavMenuItem title={"Trending"} param={"Trending"} />
      <NavMenuItem title={"Top Rated"} param={"TopRated"} />
    </div>
  );
};

export default Navbar;
