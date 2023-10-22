import Image from "next/image";
import { Rating } from "primereact/rating";
import Link from "next/link";

const RatingCard = ({ item, imageBaseUrl }) => {
  const image = imageBaseUrl + item.backdrop_path;
  return (
    <Link href={`/details/${item.id}`} key={item}>
      <div className="flex flex-column px-3 border-1px-solid-red border-primary border-round-2xl card-details-container py-3 px-3 cursor-pointer mt-0 justify-content-around ">
        <div>
          <Image src={image} alt="" height={110} width={110} />
        </div>
        <div className="detailsCardDetails">
          <p className="ratedTitle">{item.title}</p>
          <span>
            <Rating
              value={3}
              readOnly
              cancel={false}
              className="custom-rating"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RatingCard;
