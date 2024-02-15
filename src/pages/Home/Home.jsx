import HomeAccordion from './Accordion/Accordion';
import HomeBanner from './Banner/Banner';
import CardSlider from './CardSlider/CardSlider';
import CustomCarousel from './Carousel/Carousel';

const Home = () => {
  return (
    <>
      <CustomCarousel />
      <HomeBanner />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <HomeAccordion />
    </>
  );
};

export default Home;
