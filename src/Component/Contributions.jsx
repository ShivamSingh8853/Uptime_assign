import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Contributions = () => {
  const [data, setData] = useState({}); // {2022:[], 2023:[]}
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearData, setYearData] = useState([]);

  // FETCH YEAR-WISE DATA FROM SERVER
  useEffect(() => {
    fetch("http://localhost:5000/api/contributions")
      .then((res) => res.json())
      .then((json) => {
        setData(json);

        const years = Object.keys(json).sort();
        setSelectedYear(years[years.length - 1]); // latest year
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // WHEN YEAR CHANGES → LOAD DATA FOR THAT YEAR
  useEffect(() => {
    if (!selectedYear) {
      setYearData([]);
      return;
    }

    const arr = data[selectedYear];

    // Always ensure it's an array
    setYearData(Array.isArray(arr) ? arr : []);
  }, [selectedYear, data]);

  // SAFETY: heatmap needs array always
  const safeYearData = Array.isArray(yearData) ? yearData : [];

  // Total contributions count
  const totalContributions = safeYearData.reduce(
    (sum, item) => sum + (item.count || 0),
    0
  );

  const years = Object.keys(data).sort((a, b) => b - a);


  return (
    <div className="mt-8 flex gap-4">
      {/* LEFT SECTION */}
      <div className="flex-1">
        <div className="flex justify-between mb-4">
          <div className="font-normal">
            {totalContributions} Contributions in {selectedYear}
          </div>
          <div className="text-blue-500 text-sm hover:cursor-pointer">
            Contribution settings
          </div>
        </div>

        {/* HEATMAP */}
        <div className="w-[850px] border pr-2">
          <CalendarHeatmap
            startDate={new Date(`${selectedYear}-01-01`)}
            endDate={new Date(`${selectedYear}-12-31`)}
            values={safeYearData} // always safe
            classForValue={(value) => {
              if (!value || value.count === 0) return "color-empty";
              if (value.count >= 10) return "color-github-4";
              if (value.count >= 5) return "color-github-3";
              if (value.count >= 2) return "color-github-2";
              return "color-github-1";
            }}
            showWeekdayLabels={true}
          />
        </div>

        {/* ACTIVITY SECTION */}
        <div className="width-[850px] height-[200px] border mt-4 p-4">
          <div className="font-semibold">Activity Overview</div>
          <div className="mt-2">
            Contributed to{" "}
            <span className="text-blue-600">
              UptimeAI/uptime_webapp, UptimeAI/uptime_server,
              UptimeAI/uptime_ml
            </span>{" "}
            and 13 other repositories.
          </div>
        </div>
      </div>

      {/* RIGHT SIDE YEAR LIST */}
      <div className="flex flex-col gap-2 text-sm text-gray-500 ml-10">
        {years.map((y) => (
          <div
            key={y}
            className={`hover:cursor-pointer pl-6 pr-12 py-3 rounded ${
              Number(y) === Number(selectedYear)
                ? "bg-blue-400 font-bold text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedYear(y)}
          >
            {y}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributions;
