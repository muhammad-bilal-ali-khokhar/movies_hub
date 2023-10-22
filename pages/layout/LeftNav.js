import useEventListener from "react-use-event-listener";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const LeftNav = () => {
  const router = useRouter();
  const navigationTitles = [
    {
      nav: "Home",
      iconClass: "pi pi-home",
      link: "/home",
    },

    {
      nav: "Top Rated",
      iconClass: "pi pi-chart-line",
      link: "/toprated",
    },
    {
      nav: "Up Coming",
      iconClass: "pi pi-angle-double-up",
      link: "/upcoming",
    },
    {
      nav: "Popular",
      iconClass: "pi pi-star-fill",
      link: "",
    },
    {
      nav: "Watchlist",
      iconClass: "pi pi-list",
      link: "",
    },
    {
      nav: "New Releases",
      iconClass: "pi pi-sync",
      link: "",
    },

    {
      nav: "Popular Movies",
      iconClass: "pi pi-prime",
      link: "",
    },
    {
      nav: "Trending Now",
      iconClass: "pi pi-hashtag",
      link: "",
    },
    {
      nav: "Featured",
      iconClass: "pi pi-link",
      link: "",
    },
    {
      nav: "Movie Collect",
      iconClass: "pi pi-video",
      link: "/",
    },

    {
      nav: "About Us",
      iconClass: "pi pi-tablet",
      link: "",
    },
    {
      nav: "Feedback",
      iconClass: "pi pi-exclamation-circle",
      link: "",
    },
    {
      nav: "Log Out",
      iconClass: "pi pi-sign-out",
      link: "/",
    },
  ];

  // const clickedFunction = (e) => {
  //   window.top.postMessage(e, "*");
  // };

  // useEventListener("message", (event) => {
  //   console.log("Message received from the parent: ", event.data);
  //   router.push(`${event.data ? event.data : "/home"}`);
  // });

  return (
    <div className="navbarComponent leftNavigation">
      <ul className="navlist navlistItemGap">
        {navigationTitles.map((item, index) => {
          return (
            <>
              <span
              // onClick={(e) => clickedFunction(item)}
              >
                <Link className="navListItems" key={index} href={item.link}>
                  <span>{item.nav}</span> <i className={item.iconClass}></i>
                </Link>
              </span>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftNav;
