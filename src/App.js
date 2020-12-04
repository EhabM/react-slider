import React from "react";
import GlobalStyle from "./GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container/Container";
import { generalTheme, darkTheme, lightTheme } from "./GlobalStyles/theme";
import ToogleTheme from "./components/ToogleTheme/ToogleTheme";
import { ChangeTheme, ChangeImage, images } from "./utilities/constants";
import SlideNumber from "./components/SlideNumber/SlideNumber";
import SliderImg from "./components/SliderImg/SliderImg";
import Controller from "./components/Controller/Controller";

function App() {
  const [theme, dark, light] = ChangeTheme();
  const [imageIndex, setImageIndex, nextImage, prevImage] = ChangeImage();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const goToImg = (num) => {
    setImageIndex(num);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeProvider theme={generalTheme}>
        <GlobalStyle />
        <Container>
          <SlideNumber
            themeMode={theme}
            imgNumb={imageIndex + 1}
            imgsLength={images.length}
          />
          <ToogleTheme
            unSuccessD={theme === "light"}
            unSuccessL={theme === "dark"}
            onClickD={() => dark()}
            onClickL={() => light()}
          />

          <SliderImg
            imageIndex={imageIndex}
            imageSrc={images[imageIndex].default}
          />
          <Controller
            imgIndex={imageIndex}
            goToImg={goToImg}
            nextDisabled={imageIndex === images.length - 1}
            prevDisabled={imageIndex === 0}
            nextImage={() => nextImage(images)}
            prevImage={() => prevImage()}
          />
        </Container>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
