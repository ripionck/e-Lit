import HomeAccordion from './Accordion/Accordion';
import Banner from './Banner/Banner';
import CustomCarousel from './Carousel/Carousel';
import Categories from './Categories/Categories';

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <Banner />
      <Categories />
      <HomeAccordion />
    </>
  );
};

export default Home;
