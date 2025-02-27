import innofi from "../../assets/innofi.webp";

const InnoFiSection = () => {
  return (
    <div className="bg-white mt-20 grid grid-cols-2 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex w-full">
          <h1 className="relative top-0 w-fit ml-5 h-auto py-4 flex bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            InnoFi
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <div className="notification ml-5">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">Innofi Funding</div>
            <div className="notibody">
              Get the funds you need to launch your collection.
            </div>
          </div>

          <div className="notification ml-5">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">Global Exposure</div>
            <div className="notibody">
              Showcase your designs to a global NFT market.
            </div>
          </div>

          <div className="notification ml-5">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">Transform Ideas</div>
            <div className="notibody">
              Turn your concepts into exclusive NFT collections.
            </div>
          </div>

          <div className="notification ml-5">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">Exclusive Drops</div>
            <div className="notibody">
              Create limited-edition pieces to set trends.
            </div>
          </div>
        </div>
      </div>
      <div className="mr-20">
        <img src={innofi} alt="InnoFi" className="object-contain" />
      </div>
    </div>
  );
};

export default InnoFiSection;
