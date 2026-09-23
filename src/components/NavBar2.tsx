import { Search, Bell, User, Menu } from "lucide-react";
import netflixIcon from "../assets/netflixIcon.png";
import { useNavigate } from "react-router-dom";
import { useState,useRef,useEffect } from "react";
import ProfileMenu from "../components/ProfileDrop"
import {UserAuth} from "../context/Auth"

type NavbarProps = {
  color?: string;
  search?: string;
  setsearch?: React.Dispatch<React.SetStateAction<string>>;

};

function Navbar({ color,search,setsearch }: NavbarProps) {
  const navigate = useNavigate();
  const [OpenSearch, setOpenSearch] = useState(false);
  const [OpenProfile,SetOpenProfile]=useState(true)
  const { signOut } = UserAuth();
  const ToggleProfile=()=>{
    SetOpenProfile(!OpenProfile);
  }
  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/");
    } catch(error){
      console.log(error);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
    const toggleSearch = () => {
      setOpenSearch(prev => !prev);
    };

  useEffect(() => {
  if (OpenSearch) {
    inputRef.current?.focus();
  }
  }, [OpenSearch]);

  useEffect(() => {
   const timer = setTimeout(() => {
    console.log(search);
  }, 500);
  return () => clearTimeout(timer);
  }, [search]);


  return (
    <div
      className={`
        w-full
        h-[70px]
        ${color}
        flex
        items-center
        justify-between
        px-4
        md:px-10
        text-white
        z-50
      `}
    >

      <div className="flex items-center gap-8">

        <img
          src={netflixIcon}
          alt="Netflix"
          className="
            w-28
            md:w-40
            lg:w-52
            object-contain
            brightness-200
          "
        />


        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-6
            text-sm
            font-semibold
          "
        >

          <li
            onClick={() => navigate("/Home")}
            className="cursor-pointer hover:text-gray-300"
          >
            Home
          </li>


          <li
            onClick={() => navigate("/TV_Shows")}
            className="cursor-pointer hover:text-gray-300"
          >
            TV Shows
          </li>


          <li
            onClick={() => navigate("/Movies")}
            className="cursor-pointer hover:text-gray-300"
          >
            Movies
          </li>


          <li
            onClick={() => navigate("/New")}
            className="cursor-pointer hover:text-gray-300"
          >
            New & Popular
          </li>


          <li
            onClick={() => navigate("/MyList")}
            className="cursor-pointer hover:text-gray-300"
          >
            My List
          </li>


          <li
            onClick={() =>
              navigate("/Browse_By_Languages")
            }
            className="cursor-pointer hover:text-gray-300"
          >
            Browse By Languages
          </li>

        </ul>


        <Menu
          className="
            block
            lg:hidden
            cursor-pointer
          "
        />

      </div>


      <div
        className="
          flex
          items-center
          gap-3
          md:gap-6
        "
      >
  <div className="flex items-center relative">
  <input
    ref={inputRef}
    value={search ?? ""}
    onChange={(e) => setsearch?.(e.target.value)}
    className={`
      ${OpenSearch ? "w-56 transition-all duration-300  ease-in-out" : "w-0 px-0"}
      bg-white
      text-black
      border
      border-none
      w-0
      px-0
      focus:px-3
      h-9
      outline-none
      `}
    placeholder="Titles, people, genres"
  />
  <Search
          size={22}
          className={`cursor-pointer absolute right-0`}
         onClick={() => {
            toggleSearch();
            navigate("/Browse_By_Languages");
          }}
          color={OpenSearch ? "black" : "white"}
        />
</div>

        <Bell
          size={22}
          fill="white"
          className="
            hidden
            sm:block
            cursor-pointer
          "
        />


        <div
          className="
            flex
            items-center
            gap-2
            cursor-pointer
          "
        >
          <button onClick={()=>ToggleProfile()}>
            <div
            className="
              w-7
              h-7
              md:w-8
              md:h-8
              bg-red-600
              rounded-sm
              flex
              items-center
              justify-center"
          >
            <User size={18}/>

          </div>
          </button>
          <div className="bg-red-500 relative border">
           <div className={`absolute z-50 border  right-2   ${OpenProfile ? "hidden" : "block"}`}>
            <ProfileMenu handleLogout={handleLogout}/> 
           </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;