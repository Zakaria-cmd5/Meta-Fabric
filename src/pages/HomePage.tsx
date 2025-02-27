import FourImageCard from "../components/ui/FourImageCard";
import FullWidthFirstImageCard from "../components/ui/FullWidthFirstImageCard";
import ImageSlider from "../components/ui/ImageSlider";
import OneImageCard from "../components/ui/OneImageCard";
import SectionSlider from "../components/ui/SectionSlider";

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <div className="relative -top-32 p-5 flex flex-wrap justify-center gap-8">
        <div className="flex justify-center w-full gap-4">
          <FourImageCard />
          <OneImageCard />
          <FullWidthFirstImageCard />
          <FourImageCard />
        </div>
        <div className="flex justify-center w-full gap-4 mt-8">
          <FourImageCard />
          <OneImageCard />
          <FullWidthFirstImageCard />
          <FourImageCard />
        </div>
      </div>
      <SectionSlider />
    </>
  );
};

export default HomePage;
