import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import CustomCarousel from './Carousel/Carousel';
import Categories from './Categories/Categories';

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <HomeBanner />
      <Categories />
      <HomeAccordion />
    </>
  );
};

export default Home;
