import TrendingMovies from "./trendingMovies";

const Home = ({device}) => {
    return (
        <div>
            <TrendingMovies device={device}></TrendingMovies>
        </div>
    )
}

export default Home;