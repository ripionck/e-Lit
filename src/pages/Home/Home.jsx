import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import CustomCarousel from './Carousel/Carousel';
import Categories from './Categories/Categories';

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <Categories />
      <HomeBanner />
      <HomeAccordion />
    </>
  );
};

export default Home;
