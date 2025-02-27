import historyLeft from "../../assets/history-left.png";
import historyRight from "../../assets/history-right.png";
import SignupButton from "../ui/SignupButton";

const HistorySection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 p-6">
      {/* Container for Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Left Side: Story Image with Text */}
        <div className=" flex flex-col gap-5">
          <img
            src={historyLeft}
            alt="Story Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas
            consequuntur nemo, sapiente, iusto, enim eveniet explicabo aperiam
            modi nam magnam quidem hic in ex quas earum! Fuga, impedit
            laboriosam.
          </p>
        </div>

        {/* Right Side: Image with Signup Button */}
        <div className="flex flex-col gap-4">
          <img
            src={historyRight}
            alt="Signup Image"
            className="w-[580px] h-[580px] object-cover rounded-lg"
          />
          <div className="mt-4">
            <SignupButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
