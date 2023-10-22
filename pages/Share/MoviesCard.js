import Image from "next/image";
import Link from "next/link";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { Knob } from "primereact/knob";
import { useRouter } from "next/navigation";
const MoviesCard = ({ popularData, title, imageBaseUrl, onShowMore }) => {
  const router = useRouter();
  return (
    <div className="navbarComponent leftNavigation rightNaveCardLink">
      <div className="navlist">
        <p className="cardTitle">{title}</p>
        {popularData?.slice(0, 3).map((item, index) => {
          return (
            <>
              <Link href={`/details/${item.id}`}>
                <div className="rightNavListItems cursor-pointer justify-content-between aling-item-center" key={index}>
                  <Image
                    src={`${imageBaseUrl}${item.backdrop_path}`}
                    alt=""
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "5px",
                      filter: "drop-shadow(2px 4px 6px #11c4e0)",
                    }}
                  />
                  <div className="flex flex-column justify-content-start ratedTi">
                    <span>{item.title}</span> <span>{item?.release_date}</span>
                  </div>
                  <div className="knobStyle">
                    <Knob
                      value={item.vote_count / 100 + "%"}
                      valueColor="#708090"
                      rangeColor="#11c4e0"
                      size={35}
                    />
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <div className="flex justify-content-center align-items-center mt-1 buttonControler">
        <Button
          style={{
            background: "#1e293b",
            padding: " 8px 26px",
            border: "1px solid #11c4e0",
            marginTop: "5px",
          }}
          onClick={() => {
            title === "Upcoming Movies"
              ? router.push(`/upcoming`)
              : router.push(`/toprated`);
          }}
        >
          More
        </Button>
      </div>
    </div>
  );
};

export default MoviesCard;
