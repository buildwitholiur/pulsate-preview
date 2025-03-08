import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CampaignSlider = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul className="flex items-center gap-[9px]">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="bg-custom-blue-900/40 w-[6px] h-[6px] rounded-full"></div>
    ),
  };

  return (
    <div className="custom__slider-bg w-full xl:max-w-[368px] h-auto rounded-[30px] flex items-center justify-center p-5 xl:p-0">
      <div className="custom__glass-bg w-full max-w-[290px] sm:max-w-[450px] md:max-w-[600px] xl:w-[327px] xl:h-[387px] rounded-[20px] p-5 md:px-9 md:pt-[42px] md:pb-[44px]">
        <Slider {...settings} className="w-full h-full">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="">
                <div className="min-h-[265px]">
                  <h1 className="font--36 uppercase text-custom-gray-700 italic">
                    Start with{" "}
                    <span className="flex items-baseline gap-2">
                      Your{" "}
                      <span className="w-full max-w-[106px] h-[27px] block bg-custom-blue-800 rounded-full"></span>
                    </span>{" "}
                    Opps Engine
                  </h1>

                  <p className="font--16 mt-[22px]">
                    Learn proven strategies to boost campaign success rates
                  </p>
                </div>

                <Link to="/" className="custom__btn custom__btn--sm">
                  <span>Get Started</span>
                  <img
                    className="w-5 h-5"
                    src="/images/arrow2-right.svg"
                    alt="arrow2"
                  />
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default CampaignSlider;
