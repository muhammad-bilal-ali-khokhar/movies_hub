import Layout from "../layout/Layout";
import Popular from "../components/Popular";
import { baseUrl, options } from "../api";
import TopRated from "../components/TopRated";
import axios from "axios";
import { useEffect, useState } from "react";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
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

const HomePages = ({ popularData, topRateData, UpcomingMovieData }) => {
  const [movies, setMovies] = useState();
  const [Searchkey, setSearchkey] = useState("");

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
      movies={movies}
      popularData={popularData}
      imageBaseUrl={imageBaseUrl}
      topRateData={topRateData}
    >
      <Popular popularData={popularData} imageBaseUrl={imageBaseUrl} />
      <TopRated
        key={"key"}
        imageBaseUrl={imageBaseUrl}
        UpcomingMovieData={UpcomingMovieData}
      />
    </Layout>
  );
};

export default HomePages;
