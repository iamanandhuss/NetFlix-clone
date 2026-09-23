import { Footer } from "../components/Footer";
import VideoPlayer from "../components/PlayDemo";
import { MovieCategoryList } from "../components/MovieCategoryList";
import { categories } from "../data/categories";

export interface IAppProps {}

function MovieHome(props: IAppProps) {  
  return (
    <div className="w-screen min-h-screen  bg-black">
      <VideoPlayer videoKey={"week"} />
      <div className="w-full h-[70px] bg-black flex items-center justify-between px-20 pt-8">
        <h1 className="text-2xl font-medium text-white">My List</h1>
      </div>
      {categories.map((category) => (
        <div key={category.title}>
          <h1 className="text-white text-xl md:text-3xl font-bold px-5 md:px-20 mt-10">
            {category.title}
          </h1>
          <MovieCategoryList category={category}/>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default MovieHome;
