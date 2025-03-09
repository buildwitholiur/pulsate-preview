const PerformanceTable = () => {
  const performanceTableData = [
    {
      rankIcon: "/images/rank-star-green.svg",
      performanceName: "Pre-Approvals Jan 2025",
      opportunities: 932,
      isActive: false,
      isBlurred: false,
    },
    {
      rankIcon: "/images/rank-star-purple.svg",
      performanceName: "Digital Deposit / Mbr Loyalty - Jan 2025",
      opportunities: 293,
      isActive: true,
      isBlurred: false,
    },
    {
      rankIcon: "/images/rank-star-green.svg",
      performanceName: "Pre-Approvals Jan 2025",
      opportunities: 932,
      isActive: false,
      isBlurred: true,
    },
    {
      rankIcon: "/images/rank-star-green.svg",
      performanceName: "Pre-Approvals Jan 2025",
      opportunities: 932,
      isActive: false,
      isBlurred: true,
    },
    {
      rankIcon: "/images/rank-star-green.svg",
      performanceName: "Pre-Approvals Jan 2025",
      opportunities: 932,
      isActive: false,
      isBlurred: true,
    },
    {
      rankIcon: "/images/rank-star-green.svg",
      performanceName: "Pre-Approvals Jan 2025",
      opportunities: 932,
      isActive: false,
      isBlurred: true,
    },
  ];

  return (
    <>
      {/* Table */}
      <div className="mt-5 w-full overflow-y-hidden overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-h-1 scrollbar-thumb-custom-gray-100 scrollbar-track-transparent">
        <div className="w-full space-y-[2px] min-w-[800px] lg:min-w-[650px]">
          {/* Table Header | Row */}
          <div className="flex items-center rounded-[10px]">
            {/* Column */}
            <div className="min-w-[75px] min-h-11 py-[5px] px-1 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <h3 className="font-normal">Rank</h3>
              </div>
            </div>
            {/* Column */}

            {/* Column */}
            <div className="flex-1 min-w-[300px] min-h-11 py-[5px] px-1 flex items-center">
              <div className="flex items-center gap-3">
                <h3 className="font-normal">Performance Name</h3>
              </div>
            </div>
            {/* Column */}

            {/* Column */}
            <div className="min-w-[163px] min-h-11 py-[5px] px-6 flex items-center">
              <div className="flex items-center gap-4">
                <h3 className="font-normal">Opportunities</h3>

                <img
                  className="w-fit h-[14px]"
                  src="/images/sort-table-icon.svg"
                  alt="sort table icon"
                />
              </div>
            </div>
            {/* Column */}

            {/* Column */}
            <div className="min-w-[130px] min-h-11 py-[5px] px-1 flex items-center justify-center">
              <div className="flex items-center gap-3"></div>
            </div>
            {/* Column */}
          </div>
          {/* Table Header | Row */}

          {/* Table Body */}
          <div className="space-y-[2px] max-h-[283px] overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-w-1 scrollbar-thumb-custom-gray-100 scrollbar-track-transparent">
            {performanceTableData.map((row, index) => (
              <div
                key={index}
                className={`flex items-center rounded-[10px] ${
                  row.isActive ? "bg-custom-white" : "bg-custom-gray-150"
                } ${row.isBlurred ? "blur--protected-table" : ""}`}
              >
                {/* Rank Column */}
                <div className="min-w-[75px] min-h-[55px] py-[5px] px-1 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-fit h-[24px]"
                      src={row.rankIcon}
                      alt="rank icon"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-[300px] min-h-[55px] py-[5px] px-1 flex items-center">
                  <div className="flex items-center gap-3">
                    <p
                      className={`text-custom-gray-900 ${
                        row.isActive ? "font-medium" : "font-normal"
                      }`}
                    >
                      {row.performanceName}
                    </p>
                  </div>
                </div>

                {/* Opportunities Column */}
                <div
                  className={`min-w-[163px] min-h-[55px] py-[5px] px-6 flex items-center ${
                    row.isActive ? "" : "bg-custom-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <p
                      className={`text-custom-gray-900 ${
                        row.isActive ? "font-medium" : "font-normal"
                      }`}
                    >
                      {row.opportunities}
                    </p>
                  </div>
                </div>

                {/* Action Column */}
                <div
                  className={`min-w-[130px] min-h-[55px] py-[5px] px-1 flex items-center justify-center rounded-tr-[10px] rounded-br-[10px] ${
                    row.isActive ? "" : "bg-custom-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button className="custom__btn custom__btn--sm custom__btn--blue px-[15px]">
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Table Body */}
        </div>
      </div>
      {/* Table */}
    </>
  );
};

export default PerformanceTable;
