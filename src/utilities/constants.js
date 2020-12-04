import { useEffect, useState } from "react";

export const ChangeImage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = (imgs) => {
    setImageIndex((image) =>
      image === imgs.length - 1 ? imgs.length - 1 : image + 1
    );
  };

  const prevImage = () => {
    setImageIndex((image) => (image === 0 ? 0 : image - 1));
  };

  return [imageIndex, setImageIndex, nextImage, prevImage];
};

export const ChangeTheme = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const darkMode = () => {
    setMode("dark");
  };
  const lightMode = () => {
    setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
  }, []);

  return [theme, darkMode, lightMode];
};

const importAll = (r) => {
  return r.keys().map(r);
};

export const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);
