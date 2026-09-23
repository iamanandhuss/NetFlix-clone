import hero from "../assets/hero.jpg";
import netflixIcon from "../assets/netflixIcon.png";
import { Card } from "../components/movieCard";
import { ReasonCard } from "../components/ReasonCard";
import { QuestionCard } from "../components/QuestionCard";
import { EmailInput } from "../components/emailInput";
import Dropdown from "../components/Dropdown";
import { SigninButton } from "../components/signinButton";
import { SignOutButton } from "../components/SignOutButton";
import { useState, useEffect } from "react";
import instance from "../Requests/axios";
import { faqData } from "../components/faqData";
import { useApp } from "../../src/context/AppContext";
import {FinishSetUpButton} from "../components/FinishSetUpButton"
import MovieDetail from "../modal/MovieDetail"
import { Footer } from "e:/module_19/Netflix/netflix-clone/src/components/Footer"
import { useNavigate } from "react-router-dom";
import {UserAuth} from "../context/Auth"



const DashBoard = () => {
  const {Email,favoriteMovies, setFavoriteMovies}=useApp();
  const [movie, setmovie] = useState<any[]>([]);
  const [email,setemail]=useState('')
  const [openModal,setopenModal]=useState(false);
  const [selectedMovie,setselectedMovie]=useState({})
  const toggleModal = () => {
    setopenModal(!openModal);
  };

  const navigate = useNavigate();
  const {user}=UserAuth();


  useEffect(() => {
    const fetchMovie = async () => {
      const response = await instance.get(
        "/search/movie?query=movie&api_key=a8bd04e1711338362bc753aded515929",
      );

      setmovie(response.data.results);
      console.log(response);
    };
    setFavoriteMovies([...favoriteMovies,"movie1","movie2"])
    console.log(Email)
    fetchMovie();
  }, []);

  useEffect(() => {
  if (user) {
    navigate("/Home");
  }
}, [user]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await instance.get(
        "trending/movie/week?api_key=a8bd04e1711338362bc753aded515929",
      );

      setmovie(response.data.results);
      console.log(response);
    };

    fetchMovie();
  }, []);

  return (
    <div
      className="w-screen h-screen bg-black/70"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-screen h-screen ">
        <div className="flex justify-between px-28 p-2">
          <img
            src={netflixIcon}
            alt=""
            className="w-80 h-fit brightness-200 "
          />
          <div className="flex justify-between px-28 p-2">
            <Dropdown />
            {Email !== "" ? (
                <SignOutButton />
              ) : (
                <SigninButton />
              )}
          </div>
        </div>
        <div className="flex  justify-center">
          <div className="text-white text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Unlimited movies,
              <br />
              shows, and more
            </h1>{" "}
            <h2 className="mt-6 text-lg md:text-2xl font-medium">
              Starts at ₹149. Cancel at any time.
            </h2>
            {user? (
                <SignOutButton />
              ) : (
               <EmailInput email={email} setemail={setemail}  />
              )}
          </div>
        </div>
        <div className="relative h-24 mt-50 overflow-hidden">
          {/* CURVED TOP LINE */}
          <div className="absolute top-0  left-1/2 -translate-x-1/2 w-[120%] h-40 rounded-t-[100%] border-t-4 border-pink-600 bg-gradient-to-b from-blue-950 to-blue-950"></div>
        </div>
      </div>
      <MovieDetail  openModal={openModal} toggleModal={toggleModal} selectedMovie={selectedMovie} />
      <section>
        <div className="bg-black h-full p-32 bg-gradient-to-b from-blue-950 to-black">
          <h1 className="text-white text-3xl  font-bold">Trending Now</h1>
          <div className="flex overflow-x-scroll scrollbar-none">
            {movie.map((item, index) => (
              <Card
                item={item}
                setselectedMovie={setselectedMovie}
                toggleModal={toggleModal}
                key={item.id}
                poster={item.backdrop_path}
                count={index + 1}
                
              />
            ))}
          </div>

          <h1 className="text-white text-3xl  font-bold">
            More reasons to join
          </h1>
          <div className="flex">
            {[1, 2, 3, 4].map(() => (
              <ReasonCard />
            ))}
          </div>

          <h1 className="text-white text-3xl  font-bold">
            Frequently Asked Questions
          </h1>
          <div>
            <div className="">
              {faqData.map((faq) => (
                <QuestionCard Question={faq.question} ans={faq.answer} />
              ))}
            </div>
          </div>

          <div className="flex  justify-center text-white">
            {user? (
                <SignOutButton />
              ) : (
               <EmailInput email={email} setemail={setemail}  />
              )}
            
          </div>
          <Footer/>
          
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
