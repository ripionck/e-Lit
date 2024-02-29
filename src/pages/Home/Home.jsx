import { Helmet } from 'react-helmet';
import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import AwardWinners from './Books/AwardWinners';
import BestSellers from './Books/BestSellers';
import CommingSoon from './Books/CommingSoon';
import NewReleases from './Books/NewReleases';
import CustomCarousel from './Carousel/Carousel';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>E-Lit Emporium | Home</title>
      </Helmet>
      <CustomCarousel />
      <HomeBanner />
      <NewReleases />
      <BestSellers />
      <AwardWinners />
      <CommingSoon />
      <HomeAccordion />
    </>
  );
};

export default Home;
