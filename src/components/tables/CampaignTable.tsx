const CampaignTable = () => {
  return (
    <div className="flex-none xl:flex-1 pl-5 pb-5 pt-[22px] pr-2 bg-custom-gray-50 rounded-[30px]">
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

      <div className="w-full max-w-[721px] h-[329px] mt-[26px]">
        <img
          className="object-cover"
          src="/images/engine-table.png"
          alt="engine table"
        />
      </div>
    </div>
  );
};

export default CampaignTable;
