import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
      <div>
        <img src={bannerImg1} alt="banner img 1" />
      </div>

      <div>
        <img src={bannerImg2} alt="banner img 2" />
      </div>

      <div>
        <img src={bannerImg3} alt="banner img 3" />
      </div>
    </Carousel>
  );
};

export default Banner;
