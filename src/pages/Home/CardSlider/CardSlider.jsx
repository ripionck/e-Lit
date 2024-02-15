import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  return (
    <div className="w-[92%] m-auto px-8 pb-8 bg-gray-200 rounded-xl mb-4">
      <h2 className="text-2xl text-center py-4">Fiction</h2>
      <Slider {...settings}>
        {data.map((d) => (
          <div
            key={d.name}
            className="h-[320px] bg-gray-100 text-black rounded-xl"
          >
            <div className="h-56 flex justify-center items-center rounded-t-xl">
              <img src={d.img} alt="" className="h-44 w-44" />
            </div>

            <div className="flex flex-col items-center justify-center px-4">
              <p className="text-xl font-semibold">{d.title}</p>
              <p className="text-center">{d.author}</p>
              <p className="text-center">{d.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const data = [
  {
    title: `The Great Gatsby`,
    img: `/src/assets/books/42766.png`,
    author: `F. Scott Fitzgerald`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    title: `To Kill a Mockingbird`,
    img: `/src/assets/books/75154.png`,
    author: `Harper Lee`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    title: `1984`,
    img: `/src/assets/books/42766.png`,
    author: `George Orwell`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    title: `The Catcher in the Rye`,
    img: `/src/assets/books/75154.png`,
    author: `J.D. Salinger`,
    price: `$${Math.floor(Math.random() * 20) + 10}`,
  },
  {
    title: `Pride and Prejudice`,
    img: `/src/assets/books/42766.png`,
    author: `Jane Austen`,
    price: `$${Math.floor(Math.random() * 20) + 10}`, // Random price between $10 and $30
  },
];

export default CardSlider;
