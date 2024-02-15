import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import Books from './Books/Books';
import CustomCarousel from './Carousel/Carousel';

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <HomeBanner />
      <Books />
      <Books />
      <Books />
      <HomeAccordion />
    </>
  );
};

export default Home;
