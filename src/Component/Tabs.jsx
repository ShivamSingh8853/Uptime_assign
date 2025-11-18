import React, { useState, useEffect, useRef } from "react";
import { GoBook } from "react-icons/go";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { VscGithubProject } from "react-icons/vsc";
import { GoPackage } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const tabs = [
  { id: 1, label: "Overview", path: "/", icon: <GoBook size={18} />, count: null },
  { id: 2, label: "Repositories", path: "/repositories", icon: <RiGitRepositoryCommitsLine size={18} />, count: 114 },
  { id: 3, label: "Projects", path: "/projects", icon: <VscGithubProject size={18} />, count: null },
  { id: 4, label: "Packages", path: "/packages", icon: <GoPackage size={18} />, count: 25 },
  { id: 5, label: "Stars", path: "/stars", icon: <CiStar size={18} />, count: 2 },
];

const ResponsiveTabs = () => {
  const rowRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const [visibleTabs, setVisibleTabs] = useState(tabs);
  const [hiddenTabs, setHiddenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);


  const recalcTabs = () => {
    if (!rowRef.current) return;

    const containerWidth = rowRef.current.offsetWidth - 60;
    let usedWidth = 0;

    let tempVisible = [];
    let tempHidden = [];

    const childWidths = Array.from(rowRef.current.children)
      .filter((c) => !c.dataset.menu) 
      .map((c) => c.offsetWidth + 16); 

    tabs.forEach((tab, i) => {
      const w = childWidths[i] || 130;

      if (usedWidth + w < containerWidth) {
        tempVisible.push(tab);
        usedWidth += w;
      } else {
        tempHidden.push(tab);
      }
    });

    setVisibleTabs(tempVisible);
    setHiddenTabs(tempHidden);
  };

  useEffect(() => {
    if (!rowRef.current) return;

    const resizeObserver = new ResizeObserver(recalcTabs);
    resizeObserver.observe(rowRef.current);

    window.addEventListener("resize", recalcTabs);
    recalcTabs();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalcTabs);
    };
  }, []);


  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="border-b bg-[#f6f8fa]">
      <div ref={rowRef} className="flex items-center gap-4 px-6 overflow-hidden">


        {visibleTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              navigate(tab.path);
            }}
            className={`py-3 flex items-center gap-2 text-sm relative whitespace-nowrap`}
          >
            {tab.icon}
            {tab.label}

            {tab.count && (
              <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-gray-200">
                {tab.count}
              </span>
            )}

            {activeTab === tab.id && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-red-500 rounded-full"></span>
            )}
          </button>
        ))}


        {hiddenTabs.length > 0 && (
          <div className="relative" ref={dropdownRef}>
            <button
              data-menu
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border border-gray-300 rounded-md hover:bg-gray-200"
            >
              <BsThreeDots size={20} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 w-52 rounded-xl border shadow-xl p-2 z-50 bg-white">
                {hiddenTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      navigate(tab.path);
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-200 rounded-lg"
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveTabs;
