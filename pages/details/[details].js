import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
const imageBaseUrl = "https://image.tmdb.org/t/p/original";
import { baseUrl } from "../api";
import { options } from "../api";
import { useRouter } from "next/router";
import axios from "axios";
import { Button } from "primereact/button";
import { Knob } from "primereact/knob";
import Image from "next/image";

const DetailsPage = ({ popularData, topRateData }) => {
  const [movies, setMovies] = useState();
  const [Searchkey, setSearchkey] = useState("");
  const [movieDetails, setMovieDetails] = useState("");
  const router = useRouter();
  const details = router.query.details;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${details}?language=en-US`,
        options
      )
      .then(function (response) {
        setMovieDetails(response.data);
      });
  }, [details]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${Searchkey}&include_adult=false&language=en-US&page=1`,
        options
      );
      const movies = await response.json();
      setMovies(movies);
    };
    fetchData();
  }, [Searchkey]);

  const onMovieSearch = (searchKey) => {
    setSearchkey(searchKey);
  };

  return (
    <Layout
      onMovieSearch={(searchKey) => {
        onMovieSearch(searchKey);
      }}
      key={"key"}
      popularData={popularData}
      imageBaseUrl={imageBaseUrl}
      topRateData={topRateData}
      movies={movies}
    >
      <div className="navbarComponent detailsPageDet">
        <div className="navlist">
          <p className="cardTitle">{movieDetails?.title}</p>
          <div className="rightNavListItems cursor-pointer  gap-8 midGap">
            <Image
              src={`${imageBaseUrl}${movieDetails?.poster_path}`}
              alt=""
              width={380}
              height={380}
              priority={true}
              className="imageController"
            />
            <div className="flex flex-column justify-content-between aling-item-start spanAdjust gap-5">
              <span>Released :{movieDetails?.release_date}</span>
              <span>Revenue :{movieDetails?.revenue}</span>{" "}
              <span>Budget : {movieDetails?.budget}</span>
              <span>
                Overview: <br />
                {movieDetails?.overview}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const fetchMovies = async (url) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return null;
  }
};
export async function getServerSideProps() {
  const popularUrl = `${baseUrl}popular?language=en-US&page=1`;
  const playingUrl = `${baseUrl}now_playing?language=en-US&page=1`;
  const topRatedUrl = `${baseUrl}top_rated?language=en-US&page=1`;
  const UpcomingUrl = `${baseUrl}upcoming?language=en-US&page=1`;
  try {
    const [popularData, topRateData, playMovieData, UpcomingMovieData] =
      await Promise.all([
        fetchMovies(popularUrl),
        fetchMovies(topRatedUrl),
        fetchMovies(playingUrl),
        fetchMovies(UpcomingUrl),
      ]);
    return {
      props: { popularData, topRateData, playMovieData, UpcomingMovieData },
    };
  } catch (error) {
    return { props: { popularData: [], topRateData: [], playMovieData: [] } };
  }
}

export default DetailsPage;
