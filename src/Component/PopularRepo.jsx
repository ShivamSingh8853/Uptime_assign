import React, { useEffect, useState } from "react";
import Contributions from "./Contributions";

const PopularRepo = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("/popular_repo.json")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error("Error loading repos:", err));
  }, []);

  return (
    <div className="mx-2 sm:mx-5 lg:mx-20">

      <div className="mt-10">


        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <div className="font-normal text-lg">Popular Repositories</div>

          <div className="text-blue-500 hover:underline hover:cursor-pointer font-light text-sm">
            Customize your pins
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="relative border border-gray-300 rounded-lg p-4 hover:bg-gray-50"
            >

              <span className="absolute top-3 right-3 text-[10px] sm:text-xs px-2 py-0.5 rounded-md border text-gray-600 bg-white">
                Public
              </span>


              <a
                href={repo.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                {repo.name}
              </a>


              {repo.forked_from && (
                <div className="text-gray-500 text-sm mt-1">
                  Forked from{" "}
                  <a
                    href={repo.forked_from.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {repo.forked_from.owner}/{repo.forked_from.repo}
                  </a>
                </div>
              )}


              <p className="text-gray-700 text-sm mt-2">{repo.description}</p>


              <div className="flex items-center gap-4 text-sm mt-3 text-gray-600">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    {repo.language}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      <Contributions />
    </div>
  );
};

export default PopularRepo;
