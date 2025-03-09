import UnlockCard from "../shared/UnlockCard";

const EngagementMetrics = () => {
  const unlockMetricsCardData = {
    title: "Unlock 5 real-time metrics to track campaign performance instantly",
    lockIcon: "/images/lock.svg",
    listItems: [
      {
        icon: "/images/total-users-icon.svg",
        text: "Discover Top-Performing Opportunities",
      },
      {
        icon: "/images/track.svg",
        text: "Never Miss Growth Moments",
      },
      {
        icon: "/images/click-chart-icon.svg",
        text: "Measure Impression & Click Impact",
      },
      {
        icon: "/images/ctr-icon.svg",
        text: "Track (CTR) Click-Through Performance",
      },
      {
        icon: "/images/geofence-chart-icon.svg",
        text: "View Location (Geofence)-Based Engagement",
      },
    ],
    buttonText: "Unlock Full Access",
    buttonIcon: "/images/lock-btn.svg",
    buttonLink: "/unlock",
  };

  return (
    <section className="pt-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <h2 className="font--18">My Engagement Metrics</h2>

        <div className="flex items-center gap-[10px]">
          <p className="text-custom-gray-400">Time Period</p>

          {/* Select Input */}
          <div className="relative w-fit" defaultValue="">
            <select className="custom__select">
              <option value="7 days">Last 7 days</option>
              <option value="1 month">Last 1 month</option>
              <option value="3 month">Last 3 month</option>
            </select>

            <span className="custom__select-icon">
              <img src="/images/select-arrow.svg" alt="arrow" />
            </span>
          </div>
          {/* Select Input */}
        </div>
      </div>

      <div className="mt-5 space-y-[10px] flex flex-col 2xl:flex-row 2xl:justify-center gap-[10px] relative">
        {/* Unlock Box */}
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 bottom-4 w-full max-w-[538px] z-30">
          <UnlockCard {...unlockMetricsCardData} />
        </div>
        {/* Unlock Box */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] flex-[0.7]">
          <div className="bg-custom-gray-50 py-5 rounded-[30px] min-h-[262px] flex flex-col justify-between">
            <h3 className="flex items-center gap-[10px] mx-5">
              <img
                className="w-5 h-5"
                src="/images/engagement-chart-icon.svg"
                alt="chart-engagement"
              />
              <span>Engagement Score</span>
            </h3>

            <div className="">
              <img
                className="w-full h-[107px]"
                src="/images/engagement-chart.png"
                alt="chart-engagement"
              />
            </div>

            <div className="py-3.5 px-5 bg-custom-gray-25 mx-5 rounded-[50px] flex items-center justify-between">
              <h4 className="font--20 font-light">27.06%</h4>

              <h5 className="flex items-center gap-1.5 text-custom-green-700">
                <img
                  className="w-4 h-4"
                  src="/images/chart-arrow.svg"
                  alt="chart arrow"
                />
                <span>27.06%</span>
              </h5>
            </div>
          </div>

          <div className="bg-custom-gray-50 py-5 rounded-[30px] min-h-[262px] flex flex-col justify-between">
            <h3 className="flex items-center gap-[10px] mx-5">
              <img
                className="w-5 h-5"
                src="/images/total-users-icon.svg"
                alt=""
              />
              <span>Total Active Users</span>
            </h3>

            <div className="">
              <img
                className="w-full h-[107px]"
                src="/images/total-users-chart.png"
                alt="chart-engagement"
              />
            </div>

            <div className="py-3.5 px-5 bg-custom-gray-25 mx-5 rounded-[50px] flex items-center justify-between">
              <h4 className="font--20 font-light">1,894</h4>

              <h5 className="flex items-center gap-1.5 text-custom-green-700">
                <img
                  className="w-4 h-4"
                  src="/images/chart-arrow.svg"
                  alt="chart arrow"
                />
                <span>0.99%</span>
              </h5>
            </div>
          </div>

          <div className="bg-custom-gray-50 py-5 rounded-[30px] min-h-[262px] flex flex-col justify-between">
            <h3 className="flex items-center gap-[10px] mx-5">
              <img
                className="w-5 h-5"
                src="/images/new-users-icon.svg"
                alt=""
              />
              <span>New Active Users</span>
            </h3>

            <div className="">
              <img
                className="w-full h-[107px]"
                src="/images/total-users-chart.png"
                alt="chart-engagement"
              />
            </div>

            <div className="py-3.5 px-5 bg-custom-gray-25 mx-5 rounded-[50px] flex items-center justify-between">
              <h4 className="font--20 font-light">1,894</h4>

              <h5 className="flex items-center gap-1.5 text-custom-red-800">
                <img
                  className="w-4 h-4"
                  src="/images/chart-arrow-red.svg"
                  alt="chart arrow"
                />
                <span>0.99%</span>
              </h5>
            </div>
          </div>

          <div className="md:col-span-2 bg-custom-gray-50 py-5 rounded-[30px] min-h-[262px] flex flex-col justify-between gap-5 blur--protected">
            <h3 className="flex items-center gap-[10px] mx-5">
              <img
                className="w-5 h-5"
                src="/images/click-chart-icon.svg"
                alt="chart-engagement"
              />
              <span>Total Impressions / Clicks</span>
            </h3>

            <div className="">
              <img
                className="w-full h-[107px]"
                src="/images/click-chart.png"
                alt="chart-engagement"
              />
            </div>

            <div className="py-5 md:py-[5px] px-5 md:px-12 bg-custom-gray-25 mx-5 rounded-[30px] md:rounded-[50px] flex items-center justify-between">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10 w-full">
                <div className="flex items-center gap-4 justify-between w-full">
                  <div className="">
                    <p className="text-custom-gray-300 font-light font--14 leading-[18px]">
                      Impressions
                    </p>
                    <h4 className="font--20 font-light">32,345</h4>
                  </div>

                  <h5 className="flex items-center gap-1.5 text-custom-green-700">
                    <img
                      className="w-4 h-4"
                      src="/images/chart-arrow.svg"
                      alt="chart arrow"
                    />
                    <span>2.09%</span>
                  </h5>
                </div>

                <span className="hidden md:block w-[1px] h-[21px] bg-custom-gray-100"></span>

                <div className="flex items-center gap-4 justify-between w-full">
                  <div className="">
                    <p className="text-custom-gray-300 font-light font--14 leading-[18px]">
                      Clicks
                    </p>
                    <h4 className="font--20 font-light">5,497</h4>
                  </div>

                  <h5 className="flex items-center gap-1.5 text-custom-green-700">
                    <img
                      className="w-4 h-4"
                      src="/images/chart-arrow.svg"
                      alt="chart arrow"
                    />
                    <span>0.9%</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-custom-gray-50 py-5 rounded-[30px] min-h-[262px] flex flex-col justify-between relative blur--protected">
            <h3 className="flex items-center gap-[10px] mx-5">
              <img className="w-5 h-5" src="/images/ctr-icon.svg" alt="" />
              <span>CTR</span>
            </h3>

            <div className="">
              <img
                className="w-full h-full absolute top-0 left-0 z-10"
                src="/images/ctr-chart.png"
                alt="chart-engagement"
              />
            </div>

            <div className="py-3.5 px-5 bg-custom-gray-25 mx-5 rounded-[50px] flex items-center justify-between relative z-20">
              <h4 className="font--20 font-light">1,894</h4>

              <h5 className="flex items-center gap-1.5 text-custom-green-700">
                <img
                  className="w-4 h-4"
                  src="/images/chart-arrow.svg"
                  alt="chart arrow"
                />
                <span>0.99%</span>
              </h5>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-[10px] flex-[0.3] blur--protected">
          <div className="bg-custom-brand-650 py-5 rounded-[30px] min-h-[262px] flex flex-col justify-between relative">
            <h3 className="flex items-center gap-[10px] mx-5">
              <img
                className="w-5 h-5"
                src="/images/push-chart-icon.svg"
                alt="chart-engagement"
              />
              <span>Push Opportunity Rate</span>
            </h3>

            <div className="">
              <img
                className="w-full h-full absolute top-0 left-0 z-10"
                src="/images/push-chart.png"
                alt="chart-engagement"
              />
            </div>

            <div className="py-3.5 px-5 bg-custom-gray-25 mx-5 rounded-[50px] flex items-center justify-between relative z-20">
              <h4 className="font--20 font-light">68%</h4>

              <h5 className="flex items-center gap-1.5 text-custom-green-700">
                <img
                  className="w-4 h-4"
                  src="/images/chart-arrow.svg"
                  alt="chart arrow"
                />
                <span>2.5%</span>
              </h5>
            </div>
          </div>

          <div className="bg-custom-gray-75 py-5 rounded-[30px] min-h-[262px] flex flex-col justify-between relative">
            <h3 className="flex items-center gap-[10px] mx-5">
              <img
                className="w-5 h-5"
                src="/images/geofence-chart-icon.svg"
                alt="chart-engagement"
              />
              <span>Geofence Opportunity Rate</span>
            </h3>

            <div className="py-3.5 px-5 bg-custom-white/60 mx-5 rounded-[50px] flex items-center justify-between relative z-20">
              <h4 className="font--20 font-light">34%</h4>

              <h5 className="flex items-center gap-1.5 text-custom-green-700">
                <img
                  className="w-4 h-4"
                  src="/images/chart-arrow.svg"
                  alt="chart arrow"
                />
                <span>0.8%</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementMetrics;
