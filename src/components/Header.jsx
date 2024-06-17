import MenuItem from "./MenuItem";
import { MdHome } from "react-icons/md";
import { HiMiniInformationCircle } from "react-icons/hi2";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="p-5 max-w-6xl flex items-center justify-between mx-auto">
      <div className="flex items-center justify-center gap-3">
        <MenuItem title={"Home"} href={"/"} Icon={MdHome} />
        <MenuItem
          title={"About"}
          href={"/about"}
          Icon={HiMiniInformationCircle}
        />
      </div>
      <Link href="/" className="flex items-center justify-center gap-4">
        <DarkModeSwitch />

        <span className="p-3 bg-amber-400 text-2xl rounded-md font-semibold">
          IMDB
        </span>
        <span className="font-semibold mx-1 hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
