import EngagementMetrics from "../components/sections/EngagementMetrics";
import OpportunitiesEngine from "../components/sections/OpportunitiesEngine";
import OpportunitiesList from "../components/sections/OpportunitiesList";
import Performance from "../components/sections/Performance";

const HomePage = () => {
  return (
    <>
      <OpportunitiesEngine />
      <EngagementMetrics />
      <OpportunitiesList />
      <Performance />
    </>
  );
};

export default HomePage;
