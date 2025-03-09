const CampaignTable = () => {
  const campaignTableData = [
    {
      campaignName: "Pre-Approvals Jan 2025",
      goalsMet: 450,
      eventValue: 450,
      isActive: false,
      isProtected: true,
    },
    {
      campaignName: "Digital Deposit / Mbr Loyalty - Jan 2025",
      goalsMet: 250,
      eventValue: 250,
      isActive: true,
      isProtected: true,
    },
    {
      campaignName: "Ross Collections - Pop test eState",
      goalsMet: 150,
      eventValue: null,
      isActive: false,
      isProtected: false,
    },
    {
      campaignName: "Ross Collections - Pop test",
      goalsMet: 85,
      eventValue: 85,
      isActive: false,
      isProtected: true,
    },
    {
      campaignName: "Ross Collections - push test",
      goalsMet: 15,
      eventValue: 15,
      isActive: false,
      isProtected: true,
    },
    {
      campaignName: "Pre-Approvals Jan 2025",
      goalsMet: 450,
      eventValue: 450,
      isActive: false,
      isProtected: true,
    },
    {
      campaignName: "Ross Collections - Pop test",
      goalsMet: 85,
      eventValue: 85,
      isActive: false,
      isProtected: true,
    },
  ];

  return (
    <div className="flex-none xl:flex-1 pl-5 pb-5 pt-[22px] pr-2 bg-custom-gray-50 rounded-[30px] relative">
      <h2 className="font--18 flex items-center gap-2">
        <img
          className="w-6 h-6"
          src="/images/attribution.svg"
          alt="attribution"
        />

        <span>Attribution</span>

        <button>
          <img className="w-5 h-5" src="/images/help-circle.svg" alt="help" />
        </button>
      </h2>

      {/* Table */}
      <div className="overflow-y-hidden overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-h-1 scrollbar-thumb-custom-gray-100 scrollbar-track-transparent">
        <div className="w-full mt-[26px] space-y-[2px] min-w-[800px] lg:min-w-[600px]">
          {/* Table Header | Row */}
          <div className="flex items-center rounded-[10px]">
            {/* Column */}
            <div className="flex-1 min-h-11 py-[5px] px-6 flex items-center">
              <div className="flex items-center gap-4">
                <h3 className="font-normal">Campaign Name</h3>

                <img
                  className="w-fit h-[14px]"
                  src="/images/sort-table-icon.svg"
                  alt="sort table icon"
                />
              </div>
            </div>
            {/* Column */}

            {/* Column */}
            <div className="min-w-[118px] min-h-11 py-[5px] px-1 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <h3 className="font-normal">Goals Met</h3>
              </div>
            </div>
            {/* Column */}

            {/* Column */}
            <div className="min-w-[160px] min-h-11 py-[5px] px-1 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <img
                  className="w-fit h-[14px]"
                  src="/images/table-lock.svg"
                  alt="table lock"
                />

                <h3 className="font-normal">Event Value</h3>
              </div>
            </div>
            {/* Column */}
          </div>
          {/* Table Header | Row */}

          {/* Table Body */}
          <div className="space-y-[2px] max-h-[283px] overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-w-1 scrollbar-thumb-custom-gray-100 scrollbar-track-transparent">
            {campaignTableData.map((row, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  row.isActive ? "bg-custom-white" : "bg-custom-gray-150"
                } rounded-[10px]`}
              >
                {/* Campaign Name */}
                <div className="flex-1 min-h-[55px] py-[5px] px-6 flex items-center">
                  <div className="flex items-center gap-3">
                    <p
                      className={`text-custom-gray-900 ${
                        row.isActive ? "font-medium" : ""
                      }`}
                    >
                      {row.campaignName}
                    </p>
                  </div>
                </div>

                {/* Goals Met */}
                <div className="min-w-[118px] min-h-[55px] py-[5px] px-1 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <p
                      className={`text-custom-gray-900 ${
                        row.isActive ? "font-medium" : ""
                      }`}
                    >
                      {row.goalsMet}
                    </p>
                  </div>
                </div>

                {/* Event Value */}
                <div
                  className={`min-w-[160px] min-h-[55px] py-[5px] px-1 flex items-center justify-center ${
                    row.isProtected ? "blur--protected-table" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {row.eventValue === null ? (
                      <button className="custom__btn custom__btn--secondary px-[15px]">
                        <img
                          className="w-fit h-[18px]"
                          src="/images/lock-btn.svg"
                          alt="button icon"
                        />
                        <span>Coming Soon</span>
                      </button>
                    ) : (
                      <p
                        className={`text-custom-gray-900 ${
                          row.isActive ? "font-medium" : ""
                        }`}
                      >
                        {row.eventValue}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Table Body */}
        </div>
      </div>
      {/* Table */}
    </div>
  );
};

export default CampaignTable;
