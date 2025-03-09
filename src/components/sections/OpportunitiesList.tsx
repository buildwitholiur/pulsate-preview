import { Link } from "react-router";
import UnlockCard from "../shared/UnlockCard";

interface OpportunitiesCardItem {
  title: string;
  audienceSize: number | string;
  imageSrc: string;
  link: string;
  blur?: boolean;
}

const OpportunitiesList = () => {
  const unlockCardData = {
    title: "Unlock Premium Insights For Better Results",
    lockIcon: "/images/lock.svg",
    listItems: [
      {
        icon: "/images/discover.svg",
        text: "Discover Top-Performing Opportunities",
      },
      {
        icon: "/images/growth.svg",
        text: "Never Miss Growth Moments",
      },
      {
        icon: "/images/ai-powered.svg",
        text: "Get AI-Powered Campaign Suggestions",
      },
    ],
    buttonText: "Unlock Full Access",
    buttonIcon: "/images/lock-btn.svg",
    buttonLink: "/unlock",
  };

  const opportunitiesCardItems: OpportunitiesCardItem[] = [
    {
      title: "CD Maturing",
      audienceSize: 33,
      imageSrc: "/images/maturing.svg",
      link: "/",
    },
    {
      title: "Re-approved Auto Loan",
      audienceSize: 1058,
      imageSrc: "/images/loan.svg",
      link: "/",
    },
    {
      title: "Digital Onboarding",
      audienceSize: 85,
      imageSrc: "/images/digital.svg",
      link: "/",
      blur: true,
    },
  ];

  return (
    <section className="pt-8 grid grid-cols-1 gap-[10px] relative">
      {/* Unlock Box */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-13 w-full max-w-[538px] z-30">
        <UnlockCard {...unlockCardData} />
      </div>
      {/* Unlock Box */}

      {/* Opportunities Item */}
      <div className="p-5 rounded-[30px] bg-custom-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex--center rounded-lg bg-custom-gray-200">
              <img
                className="w-fit h-[6px]"
                src="/images/triangle-arrow.svg"
                alt=""
              />
            </div>

            <h2 className="font--18 flex items-center gap-2">
              <img
                className="w-[34px] h-[34px]"
                src="/images/stars.svg"
                alt=""
              />

              <span>Top-3 Opportunities</span>
            </h2>
          </div>

          <button>
            <img className="w-5 h-5" src="/images/help-circle.svg" alt="help" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[10px] mt-5">
          {opportunitiesCardItems.map((item, index) => (
            <div
              key={index}
              className={`bg-custom-white p-[17px] rounded-[20px] ${
                item.blur ? "blur--protected" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="flex-1">{item.title}</h3>
                <Link
                  to={item.link}
                  className="custom__btn custom__btn--sm px-[15px]"
                >
                  Start Campaign
                </Link>
              </div>

              <div className="flex items-center justify-between gap-6 mt-5 md:px-5">
                <div className="flex-1/2">
                  <p className="font-light text-custom-gray-700">
                    Audience size
                  </p>
                  <h5 className="font-normal font--36 mt-3">
                    {item.audienceSize}
                  </h5>
                </div>

                <img
                  className="w-fit h-[103px] 2xl:h-[120px]"
                  src={item.imageSrc}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Opportunities Item */}

      {/* Opportunities Item */}
      <div className="p-5 rounded-[30px] bg-custom-gray-50 blur--protected">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex--center rounded-lg bg-custom-gray-200">
              <img
                className="w-fit h-[6px]"
                src="/images/triangle-arrow.svg"
                alt=""
              />
            </div>

            <h2 className="font--18 flex items-center gap-2">
              <img
                className="w-[34px] h-[34px]"
                src="/images/stars.svg"
                alt=""
              />

              <span>Top-3 Opportunities</span>
            </h2>
          </div>

          <button>
            <img className="w-5 h-5" src="/images/help-circle.svg" alt="help" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[10px] mt-5">
          {opportunitiesCardItems.map((item, index) => (
            <div
              key={index}
              className={`bg-custom-white p-[17px] rounded-[20px] ${
                item.blur ? "blur--protected" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="flex-1">{item.title}</h3>
                <Link
                  to={item.link}
                  className="custom__btn custom__btn--sm px-[15px]"
                >
                  Start Campaign
                </Link>
              </div>

              <div className="flex items-center justify-between gap-6 mt-5 md:px-5">
                <div className="flex-1/2">
                  <p className="font-light text-custom-gray-700">
                    Audience size
                  </p>
                  <h5 className="font-normal font--36 mt-3">
                    {item.audienceSize}
                  </h5>
                </div>

                <img
                  className="w-fit h-[103px] 2xl:h-[120px]"
                  src={item.imageSrc}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Opportunities Item */}

      {/* Opportunities Item */}
      <div className="p-5 rounded-[30px] bg-custom-gray-50 blur--protected">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex--center rounded-lg bg-custom-gray-200">
              <img
                className="w-fit h-[6px]"
                src="/images/triangle-arrow.svg"
                alt=""
              />
            </div>

            <h2 className="font--18 flex items-center gap-2">
              <img
                className="w-[34px] h-[34px]"
                src="/images/stars.svg"
                alt=""
              />

              <span>Top-3 Opportunities</span>
            </h2>
          </div>

          <button>
            <img className="w-5 h-5" src="/images/help-circle.svg" alt="help" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[10px] mt-5">
          {opportunitiesCardItems.map((item, index) => (
            <div
              key={index}
              className={`bg-custom-white p-[17px] rounded-[20px] ${
                item.blur ? "blur--protected" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="flex-1">{item.title}</h3>
                <Link
                  to={item.link}
                  className="custom__btn custom__btn--sm px-[15px]"
                >
                  Start Campaign
                </Link>
              </div>

              <div className="flex items-center justify-between gap-6 mt-5 md:px-5">
                <div className="flex-1/2">
                  <p className="font-light text-custom-gray-700">
                    Audience size
                  </p>
                  <h5 className="font-normal font--36 mt-3">
                    {item.audienceSize}
                  </h5>
                </div>

                <img
                  className="w-fit h-[103px] 2xl:h-[120px]"
                  src={item.imageSrc}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Opportunities Item */}
    </section>
  );
};

export default OpportunitiesList;
