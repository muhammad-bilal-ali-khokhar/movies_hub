import { useState } from "react";
import Logo from "../../public/svgs/index";
import { AutoComplete } from "primereact/autocomplete";
import Link from "next/link";


// This along with sidebars is a layout component and should be moved to intended directory
const HeaderComponent = ({ movies, onMovieSearch }) => {
  const [seaching, setSeaching] = useState("");
  const [items, setItems] = useState();

  const search = () => {
    setItems(
      movies?.results?.map((item) => {
        return item;
      })
    );
  };

  return (
    <>
      <div className="header" style={{visibility:'unset'}}>
        <span className="spin-span">
          <Logo />
        </span>

          <>
          <Link href={`/home`}>
          Home
        </Link>
        <Link href={`/toprated`}>
          Top Rated
        </Link>
        <Link href={`/upcoming`}>
          Upcoming
        </Link>
        </>
        
        <span className="p-input-icon-left" style={{width:search ? '200' : 'auto'}}>
          <i className="pi pi-search" />
          <AutoComplete
            value={seaching}
            suggestions={items?.map((item) => {
              return (
                <>
                  <Link href={`/details/${item?.id}`}>
                    <span className="w-full flex">{item.title}</span>
                  </Link>
                </>
              );
            })}
            completeMethod={search}
            onChange={(e) => {
              if (typeof e.value === "string") {
                setSeaching(e.value);
              } else {
                setSeaching(seaching);
              }
              onMovieSearch(e.value);
            }}
          />
        </span>
      </div>
    </>
  );
};

export default HeaderComponent;
