import { register } from 'swiper/element/bundle';

register();

const CardCarousel = () => {
  const spaceBetween = 10;

  const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };

  const onSlideChange = (e) => {
    console.log('slide changed');
  };

  return (
    <swiper-container
      slides-per-view={1}
      space-between={spaceBetween}
      centered-slides={true}
      navigation="true"
      pagination="true"
      breakpoints={JSON.stringify({
        768: {
          slidesPerView: 3,
        },
      })}
      onSwiperprogress={onProgress}
      onSwiperslidechange={onSlideChange}
      class="w-full max-w-6xl mx-auto"
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <swiper-slide key={item}>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mx-2 h-full flex flex-col justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Card Title {item}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">
              This is some content inside card number {item}. You can add anything here.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </swiper-slide>
       
      ))}
    </swiper-container>
  );
};

export default CardCarousel;
