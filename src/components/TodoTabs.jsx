import React from "react";

export const TodoTabs = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  const tabs = ["All", "Completed", "Pending"];

  return (
    <div className="flex justify-center w-full m-2">
      <div className="bg-white p-2 rounded-md flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200
              ${
                activeTab === tab
                  ? "bg-[#4A6CF7] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
