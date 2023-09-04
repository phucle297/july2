import Header from "@/elements/header";
import { FC } from "react";
import Banner from "./components/banner";
import AboutUs from "./components/about-us";

const HomePage: FC = () => {
  return (
    <section>
      <Header />
      <Banner />
      <AboutUs />
    </section>
  );
};

export default HomePage;
