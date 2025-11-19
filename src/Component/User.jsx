import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
const BASE_URL = "https://uptime-assign-1.onrender.com";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/user`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  

  if (!user) return <div>Loading...</div>;

  return (
    <div className="ml-20 mt-10 px-3 w-[300px]">


      <img
        src={user.avatar_url}
        alt="user avatar"
        className="rounded-full w-full h-auto border"
      />


      <div className="font-bold text-xl mt-3">{user.name}</div>


      <div className="text-gray-500">{user.login}</div>


      <div className="text-sm font-semibold text-gray-600 py-3">
        {user.bio}
      </div>


      <span
        className="w-full bg-gray-100 border px-3 py-2 rounded-md 
                   hover:bg-gray-200 cursor-pointer font-bold 
                   text-center inline-block"
      >
        Edit Profile
      </span>


      <div className="flex items-center gap-2 py-3 text-sm">
        <FaUserFriends size={16} />
        <span className="font-bold">{user.followers}</span>
        <span className="text-gray-600">followers</span>

        <span>·</span>

        <span className="font-bold">{user.following}</span>
        <span className="text-gray-600">following</span>
      </div>


      {user.company && (
        <div className="flex items-center gap-2 py-1 text-sm text-gray-700">
          <GoOrganization size={16} />
          <span>{user.company}</span>
        </div>
      )}


      {user.location && (
        <div className="flex items-center gap-2 py-1 text-sm text-gray-700">
          <IoLocationOutline size={16} />
          <span>{user.location}</span>
        </div>
      )}


      {user.email && (
        <div className="flex items-center gap-2 py-1 text-sm text-gray-700">
          <MdOutlineMailOutline size={18} />
          <span>{user.email}</span>
        </div>
      )}


      {user.blog && (
        <div className="flex items-center gap-2 py-1 text-sm text-blue-600 hover:underline cursor-pointer">
          <IoIosLink size={16} />
          <a href={user.blog} target="_blank" rel="noopener noreferrer">
            {user.blog}
          </a>
        </div>
      )}

    </div>
  );
};

export default User;
