import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/api";

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    API.get("/api/hero")
      .then(({ data }) => setContent({ hero: data.data }))
      .catch((err) => console.error("Failed to load hero content:", err));
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentContext);
};
