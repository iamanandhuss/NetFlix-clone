import hero from "../assets/hero.jpg";
import netflixIcon from "../assets/netflixIcon.png";
import { Card } from "../components/movieCard";
import { ReasonCard } from "../components/ReasonCard";
import { QuestionCard } from "../components/QuestionCard";
import { EmailInput } from "../components/emailInput";
import Dropdown from "../components/Dropdown";
import { SigninButton } from "../components/signinButton";
import { useState, useEffect } from "react";
import instance from "../Requests/axios";
import { faqData } from "../components/faqData";

const DashBoard = () => {
  const [movie, setmovie] = useState<any[]>([]);
  const [email,setemail]=useState('')


  useEffect(() => {
    const fetchMovie = async () => {
      const response = await instance.get(
        "/search/movie?query=movie&api_key=a8bd04e1711338362bc753aded515929",
      );

      setmovie(response.data.results);
      console.log(response);
    };

    fetchMovie();
  }, []);

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
            <SigninButton />
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
            <EmailInput email={email} setemail={setemail}  />
          </div>
        </div>
        <div className="relative h-24 mt-50 overflow-hidden">
          {/* CURVED TOP LINE */}
          <div className="absolute top-0  left-1/2 -translate-x-1/2 w-[120%] h-40 rounded-t-[100%] border-t-4 border-pink-600 bg-gradient-to-b from-blue-950 to-blue-950"></div>
        </div>
      </div>

      <section>
        <div className="bg-black h-full p-32 bg-gradient-to-b from-blue-950 to-black">
          <h1 className="text-white text-3xl  font-bold">Trending Now</h1>
          <div className="flex overflow-x-scroll scrollbar-none">
            {movie.map((item, index) => (
              <Card
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

          <div className="flex  justify-center">
            <EmailInput email={email} setemail={setemail}/>
          </div>

          <section className="text-2xl text-white font-medium pt-24">
            <div>
              <div>
                <h1>
                  Questions? Call{" "}
                  <span className="underline">000-800-919-1743</span>
                </h1>
              </div>
              <div className="flex justify-between text-lg underline pt-10 font-medium">
                <div>
                  <h1>FAQ</h1>
                  <h1>Investor Relations</h1>
                  <h1>Privacy</h1>
                  <h1>Speed Test</h1>
                </div>
                <div>
                  <h1>Help Centre</h1>
                  <h1>Jobs</h1>
                  <h1>Cookie Preferences</h1>
                  <h1>Legal Notices</h1>
                </div>
                <div>
                  <h1>Account</h1>
                  <h1>Ways to Watch</h1>
                  <h1>Corporate Information</h1>
                  <h1>Only on Netflix</h1>
                </div>
                <div>
                  <h1>Media Centre</h1>
                  <h1>Terms of Use</h1>
                  <h1>Contact Us</h1>
                </div>
              </div>
              <div className="pt-10">
                <Dropdown />
                <p className="font-sans text-m p-2 m-2">Netflix India</p>
                <p className="font-sans text-m p-2 m-2">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div>
        <SigninButton />
      </div>
    </div>
  );
};

export default DashBoard;
