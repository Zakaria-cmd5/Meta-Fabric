import ArtistSection from "../components/sections/ArtistSection";
import BrandsSection from "../components/sections/BrandsSection";
import CreatorSection from "../components/sections/CreatorSection";
import DesignerSection from "../components/sections/DesignerSection";
import FashionFutureSection from "../components/sections/FashionFutureSection";
import HistorySection from "../components/sections/HistorySection";
import InnoFiSection from "../components/sections/InnoFiSection";
import ImageSlider from "../components/ui/ImageSlider";

const HomePage = () => {
  return (
    <div className="bg-gray-200">
      <ImageSlider />

      <BrandsSection />
      <DesignerSection />
      <ArtistSection />
      <CreatorSection />

      <InnoFiSection />
      <FashionFutureSection />

      <HistorySection />
    </div>
  );
};

export default HomePage;
