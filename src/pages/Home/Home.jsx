import { Helmet } from 'react-helmet';
import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import AwardWinners from './BooksSlide/AwardWinners';
import BestSellers from './BooksSlide/BestSellers';
import CommingSoon from './BooksSlide/CommingSoon';
import NewReleases from './BooksSlide/NewReleases';
import CustomCarousel from './Carousel/Carousel';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>E-Lit Emporium</title>
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
