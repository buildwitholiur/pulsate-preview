import { Link } from "react-router";
import UnlockCard from "../shared/UnlockCard";

const Performance = () => {
  return (
    <section className="pt-8">
      <div className="py-5 rounded-[30px] bg-custom-gray-50 flex items-start gap-5 relative">
        {/* Unlock Box */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[538px] z-50">
          <UnlockCard>
            <div className="flex items-center gap-4">
              <img
                className="w-[50px] h-auto"
                src="/images/lock.svg"
                alt="lock"
              />

              <h3 className="font--18">
                Unlock Premium Insights For Better Results
              </h3>
            </div>

            <ul className="ml-3 mt-[26px] space-y-[38px]">
              <li>
                <div className="flex items-center gap-5">
                  <img className="w-5 h-5" src="/images/track.svg" alt="" />

                  <p className="font--16">Track Campaign Success Metrics</p>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-5">
                  <img
                    className="w-5 h-5"
                    src="/images/performing-notifications.svg"
                    alt=""
                  />

                  <p className="font--16">
                    See Your Best-Performing Notifications
                  </p>
                </div>
              </li>
            </ul>

            <Link
              to="/"
              className="custom__btn custom__btn--secondary w-full mt-[27px]"
            >
              <img
                className="w-fit h-[18px]"
                src="/images/lock-btn.svg"
                alt=""
              />

              <span>Unlock Full Access</span>

              <img className="w-5 h-5" src="/images/arrow2-right.svg" alt="" />
            </Link>
          </UnlockCard>
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
