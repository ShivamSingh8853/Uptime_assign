import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6 py-6 border-t bg-[#f6f8fa]">
      
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <FaGithub className="text-lg" />
        <span>© 2025 GitHub, Inc.</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
        <a
          href="https://github.com/security"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Security
        </a>
        <a
          href="https://www.githubstatus.com/"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Status
        </a>
        <a
          href="https://github.com/orgs/community/discussions"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Community
        </a>
        <a
          href="https://docs.github.com/en"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
        <a
          href="https://support.github.com/?tags=dotcom-footer"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <a
          href="https://docs.github.com/en/site-policy/cookie-policies"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manage Cookies
        </a>
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/privacy-settings"
          className="hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do not share my personal information
        </a>
      </div>
    </footer>
  );
};

export default Footer;
