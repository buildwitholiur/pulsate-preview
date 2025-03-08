import CampaignSlider from "../shared/CampaignSlider";
import CampaignTable from "../tables/CampaignTable";

const OpportunitiesEngine = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <h1 className="font--30">Opportunities Engine</h1>

        <button className="custom__btn">
          <img
            className="w-6 h-6"
            src="/images/integration.svg"
            alt="Integration"
          />

          <span>Integration</span>

          <img className="w-5 h-5" src="/images/arrow-right.svg" alt="" />
        </button>
      </div>

      <div className="flex flex-col-reverse xl:flex-row gap-2 mt-[22px] h-auto xl:h-[425px]">
        <CampaignTable />

        <CampaignSlider />
      </div>
    </section>
  );
};

export default OpportunitiesEngine;
