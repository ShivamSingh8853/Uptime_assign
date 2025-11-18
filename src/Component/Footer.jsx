import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f6f8fa] border-t text-gray-500 text-sm px-4 sm:px-6 lg:px-20 py-6 mt-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">

        <div className="flex items-center gap-2">
          <FaGithub className="text-lg" />
          <span>© 2025 GitHub, Inc.</span>
        </div>


        <div className="flex flex-wrap gap-2 lg:gap-6">
          <a href="#" className="hover:text-blue-600 hover:underline">
            Terms
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Security
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Status
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Community
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Docs
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Contact
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Manage Cookies
          </a>
          <a href="#" className="hover:text-blue-600 hover:underline">
            Do not share my personal information
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
