import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const API_KEY = "a8bd04e1711338362bc753aded515929";

type Video = {
  key: string;
  site: string;
  type: string;
  name: string;
};
console.log("first")
function Watch() {
  const { id } = useParams();
  console.log("MOVIE ID:", id);

  const navigate = useNavigate();

  const [video, setVideo] = useState<Video | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`,
        );

        const data = await response.json();

        const trailer = data.results.find(
          (item: Video) => item.site === "YouTube" && item.type === "Trailer",
        );

        setVideo(trailer || null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [id]);

  if (loading) {
    return (
      <div
        className="
   h-screen
   bg-black
   flex
   items-center
   justify-center
   text-white
   text-3xl
   "
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
 w-screen
 h-screen
 bg-black
 relative
 "
    >
      <button
        onClick={() => navigate(-1)}
        className="
absolute
top-6
left-6
z-50
bg-black/60
rounded-full
p-3
hover:bg-black
"
      >
        <ArrowLeft size={35} className="text-white" />
      </button>

      {video ? (
        <iframe
          className="
w-full
h-full
"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1&controls=1&rel=0&modestbranding=1`}
          allow="
autoplay;
encrypted-media;
fullscreen
"
          allowFullScreen
        />
      ) : (
        <div
          className="
h-full
flex
items-center
justify-center
text-white
text-3xl
"
        >
          Trailer Not Available
        </div>
      )}
    </div>
  );
}

export default Watch;
