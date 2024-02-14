import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import CustomCarousel from './Carousel/Carousel';
import CategorySlider from './Category/Category';

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <HomeBanner />
      <CategorySlider />
      <HomeAccordion />
    </>
  );
};

export default Home;
