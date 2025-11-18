import React , {useState, useEffect} from "react";
import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { VscIssues } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoGitPullRequestOutline } from "react-icons/io5";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="w-full bg-[#f6f8fa]">
      <div className="w-full px-4 py-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <button className="p-2 border rounded-md">
            <FiMenu size={20} />
          </button>

          <FaGithub size={32} />

          <span className="text-lg font-semibold">
            {user?.login || "Loading..."}
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* Search Bar */}
          <div className="hidden md:flex items-center border rounded-md px-3 py-1 gap-2 w-72 bg-white">
            <CiSearch size={20} />
            <input
              type="text"
              placeholder="Type / to search"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <div className="md:hidden p-2 border rounded-md cursor-pointer">
            <CiSearch size={20} />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <div className="p-2 border rounded-md"><TbBrandGithubCopilot size={20} /></div>

            <div className="flex items-center border rounded-md bg-white">
              <button className="p-2 border-r"><FaPlus size={14} /></button>
              <button className="p-2">
                <MdOutlineArrowDropDown size={20} />
              </button>
            </div>

            <div className="p-2 border rounded-md"><VscIssues size={20} /></div>
            <div className="p-2 border rounded-md"><IoGitPullRequestOutline size={20} /></div>
          </div>

          {/* Profile Pic */}
          <img
            src={user == null ? '' : user.avatar_url}
            alt="profile"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
