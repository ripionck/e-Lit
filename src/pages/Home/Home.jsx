import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import Banner2 from './Banner/Banner2';
import CustomCarousel from './Carousel/Carousel';
import Categories from './Categories/Categories';

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <Banner2 />
      <Categories />
      <HomeBanner />
      <HomeAccordion />
    </>
  );
};

export default Home;
