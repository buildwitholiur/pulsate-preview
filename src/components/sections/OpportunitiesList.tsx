import { Link } from "react-router";
import UnlockCard from "../shared/UnlockCard";

const OpportunitiesList = () => {
  return (
    <section className="pt-8 grid grid-cols-1 gap-[10px] relative">
      {/* Unlock Box */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-13 w-full max-w-[538px] z-50">
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
                <img className="w-5 h-5" src="/images/discover.svg" alt="" />

                <p className="font--16">
                  Discover Top-Performing Opportunities
                </p>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-5">
                <img className="w-5 h-5" src="/images/growth.svg" alt="" />

                <p className="font--16">Never Miss Growth Moments</p>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-5">
                <img className="w-5 h-5" src="/images/ai-powered.svg" alt="" />

                <p className="font--16">Get AI-Powered Campaign Suggestions</p>
              </div>
            </li>
          </ul>

          <Link
            to="/"
            className="custom__btn custom__btn--secondary w-full mt-[27px]"
          >
            <img className="w-fit h-[18px]" src="/images/lock-btn.svg" alt="" />

            <span>Unlock Full Access</span>

            <img className="w-5 h-5" src="/images/arrow2-right.svg" alt="" />
          </Link>
        </UnlockCard>
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

        <div className="grid grid-cols-3 gap-[10px] mt-5">
          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>CD Maturing</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">33</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/maturing.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}

          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>Re-approved Auto Loan</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">1,058</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/loan.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}

          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px] blur--protected">
            <div className="flex items-center justify-between ">
              <h3>Digital Onboarding</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">85</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/digital.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}
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

        <div className="grid grid-cols-3 gap-[10px] mt-5">
          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>CD Maturing</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">33</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/maturing.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}

          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>Re-approved Auto Loan</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">1,058</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/loan.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}

          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>Digital Onboarding</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">85</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/digital.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}
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

        <div className="grid grid-cols-3 gap-[10px] mt-5">
          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>CD Maturing</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">33</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/maturing.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}

          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>Re-approved Auto Loan</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">1,058</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/loan.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}

          {/* Single Item */}
          <div className="bg-custom-white p-5 rounded-[20px]">
            <div className="flex items-center justify-between ">
              <h3>Digital Onboarding</h3>

              <Link to="/" className="custom__btn custom__btn--sm px-[15px]">
                Start Campaign
              </Link>
            </div>

            <div className="flex items-center justify-between gap-6 mt-5 px-5">
              <div className="flex-1/2">
                <p className="font-light text-custom-gray-700">Audience size</p>

                <h5 className="font-normal font--36 mt-3">85</h5>
              </div>

              <img
                className="w-fit h-[103px] 2xl:h-[120px]"
                src="/images/digital.svg"
                alt="help"
              />
            </div>
          </div>
          {/* Single Item */}
        </div>
      </div>
      {/* Opportunities Item */}
    </section>
  );
};

export default OpportunitiesList;
