import { onAuthStateChanged, type User } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import { auth } from "../FireBase/FireBase";

type AuthProviderProps = {
  children: ReactNode;
};

// TMDB movie type
type Movie = {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  release_date?: string;
};

// context data
type AuthContextType = {

  signOut(): unknown;
 
  user: User | null;

  favoriteMovies: Movie[];

  setFavoriteMovies:
    React.Dispatch<
      React.SetStateAction<Movie[]>
    >;

};



const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );



export const UserAuth = () => {

  const context =
    useContext(AuthContext);


  if (!context) {

    throw new Error(
      "UserAuth must be used inside AuthProvider"
    );
  }
  return context;
};




export const AuthProvider = ({
  children,
}: AuthProviderProps) => {


  const [user, setUser] =useState<User | null>(null);
  const [favoriteMovies,setFavoriteMovies] = useState<Movie[]>(()=>{
    const saved =
      localStorage.getItem("favorites");
    return saved
      ? JSON.parse(saved)
      : [];
  });
    useEffect(()=>{
    localStorage.setItem(
        "favorites",
        JSON.stringify(favoriteMovies)
    );
    },[favoriteMovies]);


  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
        }
      );
    return unsubscribe;
  }, []);




  return (

    <AuthContext.Provider
      value={{
        user,
        signOut: () =>
          auth.signOut(),
        favoriteMovies,
        setFavoriteMovies,
      }}
    >
      {children}
    </AuthContext.Provider>

  );
};