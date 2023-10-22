import React, { useEffect, useState } from "react";
import HeaderComponent from "./Header";
import LeftNavigation from "./LeftNav";
import RightNav from "./RightNav";
import Categories from "../components/Categories";
const Layout = ({
  children,
  popularData,
  topRateData,
  imageBaseUrl,
  movies,
  onMovieSearch,
}) => {
  return (
    <>
      <HeaderComponent
        movies={movies}
        onMovieSearch={(searchKey) => {
          onMovieSearch(searchKey);
        }}
      />
      <div className="formBg mainResponse flex gap-9 justify-content-between justify-content-center  p-jc-center p-ai-center w-12 flex flex-row border-round-2xl px-4 absolute">
        <div className="flex w-2 fixed left-0 surface-900 bgColors z-4">
          <LeftNavigation />
        </div>
        <div className="midItems w-8 border-round-2xl overflow-hidden mx-auto">
          <div className="w-full childContent">{children}</div>
          <div className="z-5">
            <p className="ratedTitleRated catoz">CATEGORIES</p>
            <Categories />
          </div>
        </div>
        <div className="w-2 flex flex-column gap-3 fixed right-0 bgColors z-4">
          <RightNav
            key={"key"}
            popularData={popularData}
            imageBaseUrl={imageBaseUrl}
            topRateData={topRateData}
          />
        </div>
      </div>
    </>
  );
};

export default Layout;
