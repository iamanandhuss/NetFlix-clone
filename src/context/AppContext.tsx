import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AppContextType {
  Email: string;
  setEmail: (Email: string) => void;
  favoriteMovies: string[];
  setFavoriteMovies: (favoriteMovies: string[]) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: AppProviderProps) {
  const [Email, setEmail] = useState<string>("");
  const [favoriteMovies, setFavoriteMovies] = useState<string[]>(["animal"]);

  return (
    <AppContext.Provider value={{ Email, setEmail,favoriteMovies, setFavoriteMovies }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
