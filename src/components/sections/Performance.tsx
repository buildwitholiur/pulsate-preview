import UnlockCard from "../shared/UnlockCard";

const Performance = () => {
  const unlockPerformanceCardData = {
    title: "Unlock Premium Performance Analytics",
    lockIcon: "/images/lock.svg",
    listItems: [
      {
        icon: "/images/track.svg",
        text: "Track Campaign Success Metrics",
      },
      {
        icon: "/images/performing-notifications.svg",
        text: "See Your Best-Performing Notifications",
      },
    ],
    buttonText: "Unlock Full Access",
    buttonIcon: "/images/lock-btn.svg",
    buttonLink: "/unlock",
  };

  return (
    <section className="pt-8">
      <div className="py-5 rounded-[30px] bg-custom-gray-50 flex items-start gap-5 relative">
        {/* Unlock Box */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20 xl:top-1/2 xl:-translate-y-1/2 w-full max-w-[538px] z-50">
          <UnlockCard {...unlockPerformanceCardData} />
        </div>
        {/* Unlock Box */}

        <div className="w-full max-w-[682px]">
          <h2 className="font--18 flex items-center gap-2 mx-5">
            <img
              className="w-6 h-6"
              src="/images/attribution.svg"
              alt="attribution"
            />

            <span>Performance</span>

            <button>
              <img
                className="w-5 h-5"
                src="/images/help-circle.svg"
                alt="help"
              />
            </button>
          </h2>

          <div className="mt-5">
            <img
              src="/images/performance-table1.png"
              alt="performance table 1"
            />
          </div>
        </div>

        <div className="w-full max-w-[404px]">
          <div className="">
            <img
              src="/images/performance-table2.png"
              alt="performance table 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
