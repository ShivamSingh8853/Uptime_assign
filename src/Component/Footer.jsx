import React from 'react';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex justify-between items-center text-sm text-gray-500 px-10 py-6 border-t bg-[#f6f8fa]">

            <div className="flex items-center gap-2 px-2">
                <FaGithub className="text-lg" />
                <span>© 2025 GitHub, Inc.</span>
            </div>

            <div className="flex gap-6">
                <a  href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" className="hover:text-blue-600 hover:underline cursor-pointer">Terms</a>
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" className="hover:text-blue-600 hover:underline cursor-pointer">Privacy</a>
                <a href="https://github.com/security" className="hover:text-blue-600 hover:underline cursor-pointer">Security</a>
                <a href="https://www.githubstatus.com/" className="hover:text-blue-600 hover:underline cursor-pointer">Status</a>
                <a href="https://github.com/orgs/community/discussions/" className="hover:text-blue-600 hover:underline cursor-pointer">Community</a>
                <a href="https://docs.github.com/en" className="hover:text-blue-600 hover:underline cursor-pointer">Docs</a>
                <a href="https://support.github.com/?tags=dotcom-footer" className="hover:text-blue-600 hover:underline cursor-pointer">Contact</a>
                <a href="" className="hover:text-blue-600 hover:underline cursor-pointer">Manage Cookies</a>
                <a href="" className="hover:text-blue-600 hover:underline cursor-pointer">
                    Do not share my personal information
                </a>
            </div>

        </div>
    );
};

export default Footer;
