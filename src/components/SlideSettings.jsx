import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount, slidesToShow } =
    props;
  const remainingSlides = slideCount - (currentSlide + slidesToShow);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: remainingSlides <= 0 ? 'none' : 'block',
      }}
      onClick={onClick}
    >
      <HiOutlineChevronRight
        style={{
          color: 'black',
          fontSize: '36px',
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: currentSlide === 0 ? 'none' : 'block',
      }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft style={{ color: 'black', fontSize: '36px' }} />
    </div>
  );
}

export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
