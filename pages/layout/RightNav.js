import MoviesCard from "../Share/MoviesCard";
import TitleCard from "../Share/TitleCard";
import Image from "next/image";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { Knob } from "primereact/knob";

const RightNav = ({ popularData, topRateData, imageBaseUrl }) => {
  return (
    <div className="flex flex-column gap-3 w-full">
      <MoviesCard
        key={"key"}
        popularData={popularData}
        imageBaseUrl={imageBaseUrl}
        title={"Popular Movies"}
      />
      <MoviesCard
        key={"key"}
        popularData={topRateData}
        imageBaseUrl={imageBaseUrl}
        title={"Upcoming Movies"}
      />
      <TitleCard title={"Powered By De-Pikachu"} />
    </div>
  );
};

export default RightNav;
