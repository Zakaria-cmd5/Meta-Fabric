import FourImageCard from "../components/ui/FourImageCard";
import FullWidthFirstImageCard from "../components/ui/FullWidthFirstImageCard";
import ImageSlider from "../components/ui/ImageSlider";
import OneImageCard from "../components/ui/OneImageCard";
import SectionSlider from "../components/ui/SectionSlider";

const HomePage = () => {
  return (
    <div className="bg-gray-200">
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
      <SectionSlider heading="Explore Our Brands" />

      <div className="mt-10 p-5 flex flex-wrap justify-center gap-8">
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
      <SectionSlider heading="Explore Our Designer" />

      <div className="mt-10 p-5 flex flex-wrap justify-center gap-8">
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
      <SectionSlider heading="Explore Our Artist" />

      <div className="mt-10 p-5 flex flex-wrap justify-center gap-8">
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
      <SectionSlider heading="Explore Our Creator" />
    </div>
  );
};

export default HomePage;
