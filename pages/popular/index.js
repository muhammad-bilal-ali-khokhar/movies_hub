import Layout from "../layout/Layout";
import { baseUrl, options } from "../api";

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
  try {
    const [popularData, topRateData, playMovieData] = await Promise.all([
      fetchMovies(popularUrl),
      fetchMovies(topRatedUrl),
      fetchMovies(playingUrl),
    ]);
    return { props: { popularData, topRateData, playMovieData } };
  } catch (error) {

    return { props: { popularData: [], topRateData: [], playMovieData: [] } };
  }
}
const PopularPage = ({ popularData, topRateData, playMovieData }) => {
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
      popularData={popularData}
      imageBaseUrl={imageBaseUrl}
      topRateData={topRateData}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        popular movie
      </div>
    </Layout>
  );
};

export default PopularPage;
