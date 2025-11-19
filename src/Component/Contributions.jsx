import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Contributions = () => {
  const [data, setData] = useState({});
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearData, setYearData] = useState([]);
  const [activity, setActivity] = useState(null);
  const [user, setUser] = useState(null);

  const [visibleMonths, setVisibleMonths] = useState([]);
  
  const BASE_URL = "https://uptime-assign-1.onrender.com";

  useEffect(() => {
    fetch(`${BASE_URL}/api/contributions`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        const years = Object.keys(json).sort();
        setSelectedYear(years[years.length - 1]);
      });
  }, []);


  useEffect(() => {
    if (!selectedYear) return;
    const arr = data[selectedYear];
    setYearData(Array.isArray(arr) ? arr : []);
    setVisibleMonths([]);
  }, [selectedYear, data]);


  useEffect(() => {
    if (!selectedYear) return;
    fetch(`${BASE_URL}/api/activity/${selectedYear}`)
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, [selectedYear]);


  useEffect(() => {
    fetch(`${BASE_URL}/api/user`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;
  const safeYearData = Array.isArray(yearData) ? yearData : [];

  const totalContributions = safeYearData.reduce(
    (sum, item) => sum + (item.count || 0),
    0
  );

  const years = Object.keys(data).sort((a, b) => b - a);


  const today = new Date();
  const initialMonth =
    Number(selectedYear) === today.getFullYear()
      ? today.getMonth()
      : 11; 

  const monthName = new Date(selectedYear, initialMonth, 1).toLocaleString(
    "default",
    { month: "long" }
  );


  const generateMonthList = () => {
    let list = [];
    let currentYear = Number(selectedYear);
    let currentMonth = initialMonth;

    for (let i = 0; i < 36; i++) {

      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
      }

      list.push({
        key: `${currentYear}-${currentMonth}`,
        monthName: new Date(currentYear, currentMonth, 1).toLocaleString(
          "default",
          { month: "long" }
        ),
        year: currentYear,
      });

      currentMonth -= 1;
    }
    return list;
  };

  const monthList = generateMonthList();


  return (
    <div className="mt-8 flex gap-10">
      <div className="flex-1">
        <div className="flex justify-between mb-4">
          <div className="font-normal">
            {totalContributions} Contributions in {selectedYear}
          </div>
          <div className="text-blue-500 text-sm hover:cursor-pointer">
            Contribution settings
          </div>
        </div>

        <div className="w-[850px] border pr-2">
          <CalendarHeatmap
            startDate={new Date(`${selectedYear}-01-01`)}
            endDate={new Date(`${selectedYear}-12-31`)}
            values={safeYearData}
            showWeekdayLabels={true}
            classForValue={(value) => {
              if (!value || value.count === 0) return "color-empty";
              if (value.count >= 10) return "color-github-4";
              if (value.count >= 5) return "color-github-3";
              if (value.count >= 2) return "color-github-2";
              return "color-github-1";
            }}
          />
        </div>

        {activity && (
          <div className="w-[850px] border mt-4 p-4">
            <div className="font-semibold">Activity Overview</div>

            <div className="mt-2">
              Contributed to{" "}
              <span className="text-blue-600">
                {activity.top_repositories.slice(0, 3).join(", ")}
              </span>{" "}
              and {activity.top_repositories.length - 3} other repositories.
            </div>

            <div className="mt-2 text-gray-600">
              Total contributions: {activity.total_contributions}
            </div>

            <div className="text-gray-600">
              Active days: {activity.active_days}
            </div>
          </div>
        )}


        <div className="py-10">
          <div className="font-semibold mb-2">Contribution Activity</div>


          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-sm px-2">
              {monthName} {selectedYear}
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="text-center mt-5 text-gray-500">
            {user.login} had no activity during this period
          </div>


          {visibleMonths.map((m) => (
            <div key={m.key} className="mt-10">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium px-2">
                  {m.monthName} {m.year}
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <div className="text-center mt-5 text-gray-500">
                {user.login} had no activity during this period
              </div>
            </div>
          ))}


          <div
            className="text-blue-500 text-sm font-semibold border text-center hover:cursor-pointer hover:bg-gray-100 mt-5 py-2 rounded-md"
            onClick={() => {
              const next = monthList[visibleMonths.length + 1]; 
              if (next) setVisibleMonths([...visibleMonths, next]);
            }}
          >
            Show more activity
          </div>
          <div className="text-sm mt-10 text-gray-500">Seeing something unexpected? Take a look at the <a href="https://docs.github.com/en/account-and-profile/how-tos" className="text-blue-500 underline">GitHub profile guide.</a></div>
        </div>
      </div>


      <div className="flex flex-col gap-2 text-sm text-gray-700">
        {years.map((y) => (
          <div
            key={y}
            onClick={() => setSelectedYear(y)}
            className={`hover:cursor-pointer pl-6 pr-12 py-3 rounded ${
              Number(y) === Number(selectedYear)
                ? "bg-blue-500 text-white font-bold"
                : "hover:bg-gray-200"
            }`}
          >
            {y}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributions;
