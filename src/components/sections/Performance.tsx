import NotificationType from "../shared/NotificationType";
import UnlockCard from "../shared/UnlockCard";
import PerformanceTable from "../tables/PerformanceTable";

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
      <div className="p-5 rounded-[30px] bg-custom-gray-50 flex flex-col 2xl:flex-row items-start gap-5 relative">
        {/* Unlock Box */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[538px] z-30">
          <UnlockCard {...unlockPerformanceCardData} />
        </div>
        {/* Unlock Box */}

        <div className="w-full 2xl:flex-1">
          <h2 className="font--18 flex items-center gap-2">
            <img
              className="w-[34px] h-[34px]"
              src="/images/performance-icon.svg"
              alt="performance"
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

          <PerformanceTable />
        </div>

        <NotificationType />
      </div>
    </section>
  );
};

export default Performance;
